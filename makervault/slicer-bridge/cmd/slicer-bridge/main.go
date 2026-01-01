package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"log"
	"net/http"
	"net/url"
	"os"
	"os/exec"
	"path"
	"path/filepath"
	"runtime"
	"strings"
	"time"
)

type SlicerConfig struct {
	Command string   `json:"command"`
	Args    []string `json:"args,omitempty"`
}

type Config struct {
	DownloadDir string                  `json:"download_dir,omitempty"`
	LogFile     string                  `json:"log_file,omitempty"`
	Slicers     map[string]SlicerConfig `json:"slicers,omitempty"`
}

func main() {
	if len(os.Args) < 2 {
		target, err := installSelf()
		if err != nil {
			fmt.Printf("Install failed: %v\n", err)
			printUsage()
			return
		}
		fmt.Printf("Installed MakerVault Slicer Bridge at %s\n", target)
		fmt.Println("You can now use Open in Slicer from MakerVault.")
		return
	}

	arg := strings.TrimSpace(os.Args[1])
	switch arg {
	case "", "-h", "--help":
		printUsage()
		return
	case "install", "--install":
		target, err := installSelf()
		if err != nil {
			fmt.Printf("Install failed: %v\n", err)
			os.Exit(1)
		}
		fmt.Printf("Installed MakerVault Slicer Bridge at %s\n", target)
		fmt.Println("You can now use Open in Slicer from MakerVault.")
		return
	}

	cfg, cfgDir := loadConfig()
	setupLogging(cfg, cfgDir)

	if err := handleProtocol(arg, cfg); err != nil {
		log.Printf("error: %v", err)
	}
}

func printUsage() {
	fmt.Println("Usage:")
	fmt.Println("  slicer-bridge --install")
	fmt.Println("  slicer-bridge <makersvault-slicer://open?...>")
}

func handleProtocol(raw string, cfg Config) error {
	parsed, err := url.Parse(raw)
	if err != nil {
		return fmt.Errorf("parse url: %w", err)
	}
	if parsed.Scheme != "makersvault-slicer" {
		return fmt.Errorf("unexpected scheme: %s", parsed.Scheme)
	}

	action := strings.Trim(parsed.Host, "/")
	if action == "" {
		action = strings.Trim(parsed.Path, "/")
	}
	if action == "" {
		action = "open"
	}
	if action != "open" {
		return fmt.Errorf("unsupported action: %s", action)
	}

	q := parsed.Query()
	downloadURL := strings.TrimSpace(q.Get("url"))
	if downloadURL == "" {
		return errors.New("missing url parameter")
	}
	if !strings.HasPrefix(downloadURL, "http://") && !strings.HasPrefix(downloadURL, "https://") {
		return fmt.Errorf("unsupported url: %s", redactURL(downloadURL))
	}

	filename := strings.TrimSpace(q.Get("filename"))
	if filename == "" {
		if u, err := url.Parse(downloadURL); err == nil {
			filename = path.Base(u.Path)
		}
	}
	filename = sanitizeFilename(filename)

	slicerID := strings.ToLower(strings.TrimSpace(q.Get("slicer")))
	log.Printf("open request slicer=%s url=%s filename=%s", slicerID, redactURL(downloadURL), filename)

	downloadDir := resolveDownloadDir(cfg)
	if err := os.MkdirAll(downloadDir, 0755); err != nil {
		return fmt.Errorf("create download dir: %w", err)
	}

	targetPath := uniquePath(downloadDir, filename)
	if err := downloadFile(downloadURL, targetPath); err != nil {
		return err
	}

	if slicerID == "" || slicerID == "other" {
		return openWithDefault(targetPath)
	}

	cmd, args := resolveSlicerCommand(slicerID, cfg)
	if cmd == "" {
		return openWithDefault(targetPath)
	}

	log.Printf("launch slicer command=%s args=%v", cmd, args)
	return launchCommand(cmd, args, targetPath)
}

func setupLogging(cfg Config, cfgDir string) {
	logPath := cfg.LogFile
	if logPath == "" {
		logPath = filepath.Join(cfgDir, "bridge.log")
	}
	if err := os.MkdirAll(filepath.Dir(logPath), 0755); err != nil {
		log.SetOutput(os.Stderr)
		return
	}
	f, err := os.OpenFile(logPath, os.O_CREATE|os.O_APPEND|os.O_WRONLY, 0644)
	if err != nil {
		log.SetOutput(os.Stderr)
		return
	}
	log.SetOutput(f)
}

func loadConfig() (Config, string) {
	cfgDir := configDir()
	cfgPath := filepath.Join(cfgDir, "config.json")
	cfg := Config{Slicers: map[string]SlicerConfig{}}
	data, err := os.ReadFile(cfgPath)
	if err != nil {
		return cfg, cfgDir
	}
	if err := json.Unmarshal(data, &cfg); err != nil {
		return cfg, cfgDir
	}
	if cfg.Slicers == nil {
		cfg.Slicers = map[string]SlicerConfig{}
	}
	return cfg, cfgDir
}

func configDir() string {
	dir, err := os.UserConfigDir()
	if err != nil || dir == "" {
		return filepath.Join(os.TempDir(), "makersvault-slicer")
	}
	return filepath.Join(dir, "makersvault-slicer")
}

func resolveDownloadDir(cfg Config) string {
	if cfg.DownloadDir != "" {
		return cfg.DownloadDir
	}
	dir, err := os.UserCacheDir()
	if err != nil || dir == "" {
		return filepath.Join(os.TempDir(), "makersvault-slicer")
	}
	return filepath.Join(dir, "makersvault-slicer")
}

func sanitizeFilename(name string) string {
	name = strings.TrimSpace(name)
	name = filepath.Base(name)
	name = strings.Map(func(r rune) rune {
		switch r {
		case '<', '>', ':', '"', '/', '\\', '|', '?', '*':
			return -1
		}
		if r < 32 {
			return -1
		}
		return r
	}, name)
	name = strings.Trim(name, " .")
	if name == "" {
		return "model"
	}
	return name
}

func uniquePath(dir, name string) string {
	ext := filepath.Ext(name)
	base := strings.TrimSuffix(name, ext)
	path := filepath.Join(dir, name)
	for i := 1; fileExists(path); i++ {
		path = filepath.Join(dir, fmt.Sprintf("%s-%d%s", base, i, ext))
	}
	return path
}

func fileExists(path string) bool {
	_, err := os.Stat(path)
	return err == nil
}

func downloadFile(downloadURL, targetPath string) error {
	client := &http.Client{Timeout: 5 * time.Minute}
	req, err := http.NewRequest(http.MethodGet, downloadURL, nil)
	if err != nil {
		return fmt.Errorf("request: %w", err)
	}
	res, err := client.Do(req)
	if err != nil {
		return fmt.Errorf("download: %w", err)
	}
	defer res.Body.Close()
	if res.StatusCode < 200 || res.StatusCode >= 300 {
		return fmt.Errorf("download failed: %s", res.Status)
	}
	out, err := os.Create(targetPath)
	if err != nil {
		return fmt.Errorf("create file: %w", err)
	}
	defer out.Close()
	if _, err := io.Copy(out, res.Body); err != nil {
		return fmt.Errorf("save file: %w", err)
	}
	return nil
}

func resolveSlicerCommand(id string, cfg Config) (string, []string) {
	id = strings.ToLower(strings.TrimSpace(id))
	if id == "" || id == "other" {
		return "", nil
	}

	if cfg.Slicers != nil {
		if sc, ok := cfg.Slicers[id]; ok && sc.Command != "" {
			return sc.Command, sc.Args
		}
	}

	envKey := "MAKERVAULT_SLICER_" + strings.ToUpper(strings.ReplaceAll(id, "-", "_"))
	if val := strings.TrimSpace(os.Getenv(envKey)); val != "" {
		return val, nil
	}

	switch runtime.GOOS {
	case "windows":
		return findWindowsCommand(id), nil
	case "linux":
		return findLinuxCommand(id), nil
	default:
		return "", nil
	}
}

func findWindowsCommand(id string) string {
	candidates := windowsCandidates()[id]
	if len(candidates) == 0 {
		return ""
	}
	var bases []string
	if pf := os.Getenv("ProgramFiles"); pf != "" {
		bases = append(bases, pf)
	}
	if pf86 := os.Getenv("ProgramFiles(x86)"); pf86 != "" {
		bases = append(bases, pf86)
	}
	if la := os.Getenv("LOCALAPPDATA"); la != "" {
		bases = append(bases, la, filepath.Join(la, "Programs"))
	}

	for _, rel := range candidates {
		if filepath.IsAbs(rel) && fileExists(rel) {
			return rel
		}
		for _, base := range bases {
			full := filepath.Join(base, rel)
			if fileExists(full) {
				return full
			}
		}
	}
	return ""
}

func findLinuxCommand(id string) string {
	candidates := linuxCandidates()[id]
	for _, name := range candidates {
		if path, err := exec.LookPath(name); err == nil {
			return path
		}
	}
	return ""
}

func windowsCandidates() map[string][]string {
	return map[string][]string{
		"orca":       {"OrcaSlicer\\OrcaSlicer.exe"},
		"bambu":      {"Bambu Studio\\BambuStudio.exe"},
		"prusa":      {"PrusaSlicer\\PrusaSlicer.exe"},
		"superslicer": {"SuperSlicer\\SuperSlicer.exe"},
		"cura":       {"UltiMaker Cura\\UltiMaker Cura.exe", "Ultimaker Cura\\Ultimaker Cura.exe"},
		"ideamaker":  {"ideaMaker\\ideaMaker.exe"},
		"simplify3d": {"Simplify3D\\Simplify3D.exe"},
		"kisslicer":  {"KISSlicer\\KISSlicer.exe"},
		"repetier":   {"Repetier-Host\\RepetierHost.exe"},
		"chitubox":   {"CHITUBOX\\CHITUBOX.exe"},
		"lychee":     {"LycheeSlicer\\LycheeSlicer.exe"},
		"photon":     {"Photon Workshop\\PhotonWorkshop.exe"},
		"creality":   {"Creality Print\\CrealityPrint.exe"},
	}
}

func linuxCandidates() map[string][]string {
	return map[string][]string{
		"orca":       {"orca-slicer", "OrcaSlicer"},
		"bambu":      {"bambu-studio", "BambuStudio"},
		"prusa":      {"prusa-slicer", "PrusaSlicer"},
		"superslicer": {"superslicer", "SuperSlicer"},
		"cura":       {"cura", "UltiMaker-Cura", "Cura"},
		"ideamaker":  {"ideamaker", "ideaMaker"},
		"simplify3d": {"simplify3d", "Simplify3D"},
		"kisslicer":  {"KISSlicer"},
		"repetier":   {"repetier-host", "RepetierHost"},
		"chitubox":   {"chitubox", "CHITUBOX"},
		"lychee":     {"lychee-slicer", "LycheeSlicer"},
		"photon":     {"photon-workshop", "PhotonWorkshop"},
		"creality":   {"creality-print", "CrealityPrint"},
	}
}

func launchCommand(cmd string, args []string, filePath string) error {
	allArgs := append([]string{}, args...)
	allArgs = append(allArgs, filePath)
	c := exec.Command(cmd, allArgs...)
	return c.Start()
}

func openWithDefault(filePath string) error {
	switch runtime.GOOS {
	case "windows":
		return exec.Command("cmd", "/c", "start", "", filePath).Start()
	case "linux":
		return exec.Command("xdg-open", filePath).Start()
	default:
		return fmt.Errorf("unsupported os: %s", runtime.GOOS)
	}
}

func redactURL(raw string) string {
	parsed, err := url.Parse(raw)
	if err != nil {
		return raw
	}
	q := parsed.Query()
	if q.Has("token") {
		q.Set("token", "REDACTED")
		parsed.RawQuery = q.Encode()
	}
	return parsed.String()
}
