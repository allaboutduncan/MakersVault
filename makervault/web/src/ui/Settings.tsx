import React from "react";
import { AppSettings, SLICER_OPTIONS, THEME_OPTIONS, ThemeId } from "../lib/settings";

type Props = {
  settings: AppSettings;
  onChange: (next: AppSettings) => void;
};

type Section = "root" | "slicer" | "theme" | "imports";

const THEME_SWATCHES: Record<ThemeId, string> = {
  system: "linear-gradient(135deg, #f8fafc 0%, #f8fafc 50%, #0b0f19 50%, #0b0f19 100%)",
  light: "linear-gradient(135deg, #ffffff, #e2e8f0)",
  dark: "linear-gradient(135deg, #0b0f19, #1f2937)",
  neon: "linear-gradient(135deg, #b6ff2b, #0a1508)",
  purple: "linear-gradient(135deg, #c77dff, #12091f)",
  blue: "linear-gradient(135deg, #74d4ff, #0a1324)",
};

export default function Settings({ settings, onChange }: Props) {
  const [section, setSection] = React.useState<Section>("root");
  const [makerworldDraft, setMakerworldDraft] = React.useState(settings.makerworld.cookie);
  const [thingiverseDraft, setThingiverseDraft] = React.useState(settings.thingiverse.cookie);
  const [makerworldEditing, setMakerworldEditing] = React.useState(!settings.makerworld.cookie);
  const [thingiverseEditing, setThingiverseEditing] = React.useState(!settings.thingiverse.cookie);

  const updateSlicer = (patch: Partial<AppSettings["slicer"]>) => {
    onChange({
      ...settings,
      slicer: {
        ...settings.slicer,
        ...patch,
      },
    });
  };
  const updateTheme = (selected: ThemeId) => {
    onChange({
      ...settings,
      theme: {
        selected,
      },
    });
  };
  const updateMakerWorld = (patch: Partial<AppSettings["makerworld"]>) => {
    onChange({
      ...settings,
      makerworld: {
        ...settings.makerworld,
        ...patch,
      },
    });
  };
  const updateThingiverse = (patch: Partial<AppSettings["thingiverse"]>) => {
    onChange({
      ...settings,
      thingiverse: {
        ...settings.thingiverse,
        ...patch,
      },
    });
  };

  React.useEffect(() => {
    if (section !== "imports") return;
    setMakerworldDraft(settings.makerworld.cookie || "");
    setThingiverseDraft(settings.thingiverse.cookie || "");
    setMakerworldEditing(!settings.makerworld.cookie);
    setThingiverseEditing(!settings.thingiverse.cookie);
  }, [section, settings.makerworld.cookie, settings.thingiverse.cookie]);

  React.useEffect(() => {
    if (!makerworldEditing) {
      setMakerworldDraft(settings.makerworld.cookie || "");
    }
  }, [settings.makerworld.cookie, makerworldEditing]);

  React.useEffect(() => {
    if (!thingiverseEditing) {
      setThingiverseDraft(settings.thingiverse.cookie || "");
    }
  }, [settings.thingiverse.cookie, thingiverseEditing]);

  if (section === "slicer") {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Slicer</h2>
            <p className="text-sm opacity-70">Control the Open in Slicer button for 3D files.</p>
          </div>
          <button
            className="text-sm px-3 py-2 rounded-md border border-panel-strong"
            onClick={() => setSection("root")}
          >
            Back
          </button>
        </div>

        <div className="rounded-lg border border-panel bg-panel-soft p-4 flex flex-col gap-4">
          <p className="text-xs opacity-70">
            Requires the Slicer Bridge helper to be installed on each client to register
            the makersvault-slicer:// protocol. Download the installer from{" "}
            <a
              className="underline"
              href="https://github.com/VincentCinque/MakersVault/releases/latest"
              target="_blank"
              rel="noreferrer"
            >
              MakerVault releases
            </a>
            . On Linux, mark the download as executable if prompted.
          </p>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={settings.slicer.enabled}
              onChange={e => updateSlicer({ enabled: e.target.checked })}
              className="w-4 h-4"
            />
            <span>Enable Open in Slicer</span>
          </label>

          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase tracking-wide text-muted">
              Preferred slicer
            </label>
            <select
              value={settings.slicer.selected}
              onChange={e => updateSlicer({ selected: e.target.value })}
              disabled={!settings.slicer.enabled}
              className="px-2 py-1 rounded-md border border-panel-strong bg-panel-strong text-sm"
            >
              {SLICER_OPTIONS.map(opt => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <p className="text-xs opacity-70">
            The Open in Slicer button launches the custom protocol with a signed download URL.
          </p>
        </div>
      </div>
    );
  }

  if (section === "theme") {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Theme</h2>
            <p className="text-sm opacity-70">Choose how MakerVault looks and feels.</p>
          </div>
          <button
            className="text-sm px-3 py-2 rounded-md border border-panel-strong"
            onClick={() => setSection("root")}
          >
            Back
          </button>
        </div>

        <div className="rounded-lg border border-panel bg-panel-soft p-4 flex flex-col gap-3">
          {THEME_OPTIONS.map(option => {
            const selected = settings.theme.selected === option.id;
            return (
              <label
                key={option.id}
                className={`flex items-start gap-3 rounded-md border p-3 cursor-pointer transition ${
                  selected ? "border-accent bg-accent-soft" : "border-panel-strong bg-panel-strong"
                }`}
              >
                <input
                  type="radio"
                  name="theme"
                  value={option.id}
                  checked={selected}
                  onChange={() => updateTheme(option.id)}
                  className="mt-1"
                />
                <span
                  aria-hidden="true"
                  className={`mt-0.5 h-8 w-8 shrink-0 rounded-md border ${
                    selected ? "border-accent" : "border-panel-strong"
                  }`}
                  style={{ backgroundImage: THEME_SWATCHES[option.id] }}
                />
                <div>
                  <div className="font-medium">{option.label}</div>
                  <div className="text-sm text-muted">{option.description}</div>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    );
  }

  if (section === "imports") {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Imports</h2>
            <p className="text-sm opacity-70">Manage session cookies for model imports.</p>
          </div>
          <button
            className="text-sm px-3 py-2 rounded-md border border-panel-strong"
            onClick={() => setSection("root")}
          >
            Back
          </button>
        </div>

        <div className="rounded-lg border border-panel bg-panel-soft p-4 flex flex-col gap-3">
          <div>
            <div className="text-lg font-semibold">MakerWorld</div>
            <p className="text-sm opacity-70">Optional auth for importing MakerWorld models.</p>
          </div>
          <p className="text-xs opacity-70">
            Paste the Cookie header from a logged-in makerworld.com request to lift download limits.
            This value is stored only in your browser.
          </p>
          <div className="flex items-center justify-between gap-3">
            <label className="text-xs uppercase tracking-wide text-muted">
              Session cookie
            </label>
            {makerworldEditing ? (
              <button
                className="text-xs px-2 py-1 rounded-md border border-panel-strong disabled:opacity-60"
                onClick={() => {
                  updateMakerWorld({ cookie: makerworldDraft });
                  setMakerworldEditing(false);
                }}
              >
                Save
              </button>
            ) : (
              <button
                className="text-xs px-2 py-1 rounded-md border border-panel-strong"
                onClick={() => setMakerworldEditing(true)}
              >
                Edit
              </button>
            )}
          </div>
          <textarea
            rows={4}
            value={makerworldDraft}
            onChange={e => setMakerworldDraft(e.target.value)}
            placeholder="example: mw_session=...; mw_token=...;"
            readOnly={!makerworldEditing}
            className={`px-3 py-2 rounded-md border border-panel-strong bg-panel-soft text-sm ${
              makerworldEditing ? "" : "opacity-70"
            }`}
          />
        </div>

        <div className="rounded-lg border border-panel bg-panel-soft p-4 flex flex-col gap-3">
          <div>
            <div className="text-lg font-semibold">Thingiverse</div>
            <p className="text-sm opacity-70">Optional auth for importing Thingiverse models.</p>
          </div>
          <p className="text-xs opacity-70">
            Paste your Thingiverse Cookie header to pass Cloudflare checks when importing.
            This value is stored only in your browser.
          </p>
          <div className="flex items-center justify-between gap-3">
            <label className="text-xs uppercase tracking-wide text-muted">
              Session cookie
            </label>
            {thingiverseEditing ? (
              <button
                className="text-xs px-2 py-1 rounded-md border border-panel-strong disabled:opacity-60"
                onClick={() => {
                  updateThingiverse({ cookie: thingiverseDraft });
                  setThingiverseEditing(false);
                }}
              >
                Save
              </button>
            ) : (
              <button
                className="text-xs px-2 py-1 rounded-md border border-panel-strong"
                onClick={() => setThingiverseEditing(true)}
              >
                Edit
              </button>
            )}
          </div>
          <textarea
            rows={4}
            value={thingiverseDraft}
            onChange={e => setThingiverseDraft(e.target.value)}
            placeholder="example: cf_clearance=...; PHPSESSID=...;"
            readOnly={!thingiverseEditing}
            className={`px-3 py-2 rounded-md border border-panel-strong bg-panel-soft text-sm ${
              thingiverseEditing ? "" : "opacity-70"
            }`}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <button
          className="text-left rounded-lg border border-panel bg-panel-soft p-4 hover:shadow"
          onClick={() => setSection("slicer")}
        >
          <div className="text-xs uppercase tracking-wide text-muted">Slicer</div>
          <div className="text-lg font-semibold">Open in Slicer</div>
          <div className="text-sm opacity-70">Pick a slicer for 3D model downloads.</div>
        </button>
        <button
          className="text-left rounded-lg border border-panel bg-panel-soft p-4 hover:shadow"
          onClick={() => setSection("theme")}
        >
          <div className="text-xs uppercase tracking-wide text-muted">Theme</div>
          <div className="text-lg font-semibold">Appearance</div>
          <div className="text-sm opacity-70">Switch between light, dark, and neon colors.</div>
        </button>
        <button
          className="text-left rounded-lg border border-panel bg-panel-soft p-4 hover:shadow"
          onClick={() => setSection("imports")}
        >
          <div className="text-xs uppercase tracking-wide text-muted">Imports</div>
          <div className="text-lg font-semibold">Import sessions</div>
          <div className="text-sm opacity-70">Manage MakerWorld + Thingiverse cookies.</div>
        </button>
      </div>
    </div>
  );
}
