import React, { useEffect, useState } from "react";
import { Folder, UnauthorizedError, createFolder, deleteFolder, downloadFolderZip, listFolders, updateFolder } from "../lib/api";
import TagInput from "./TagInput";

type Props = {
  selectedId?: string | null;
  onSelect: (id: string | null) => void;
  onFoldersChanged?: () => void;
  onUnauthorized?: () => void;
};

export default function Sidebar({ selectedId, onSelect, onFoldersChanged, onUnauthorized }: Props) {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState("");
  const [newParent, setNewParent] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [busy, setBusy] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editTags, setEditTags] = useState<string[]>([]);
  const [editParent, setEditParent] = useState<string | null>(null);

  const filenameFromDisposition = (res: Response, fallback: string) => {
    const dispo = res.headers.get("content-disposition") || "";
    const match = dispo.match(/filename="?([^\";]+)"?/i);
    return (match && match[1]) || fallback;
  };

  const saveResponseToDisk = async (res: Response, fallback: string) => {
    const filename = filenameFromDisposition(res, fallback);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleError = (err: unknown, message: string) => {
    if (err instanceof UnauthorizedError) {
      onUnauthorized?.();
      return;
    }
    console.error(err);
    alert(message);
  };

  const refresh = async () => {
    try {
      setFolders(await listFolders());
    } catch (err) {
      handleError(err, "Unable to load folders.");
    }
  };
  useEffect(() => { refresh(); }, []);

  const startCreate = (parentId: string | null = null) => {
    setCreating(true);
    setNewName("");
    setNewParent(parentId ?? (selectedId || null));
  };
  const create = async () => {
    if (!newName.trim()) return;
    setBusy(true);
    try {
      await createFolder(newName.trim(), [], newParent || undefined);
      await refresh();
      if (newParent) {
        setExpanded(prev => new Set(prev).add(newParent));
      }
      onFoldersChanged?.();
    } catch (err) {
      handleError(err, "Folder creation failed. Please try again.");
    } finally { setBusy(false); setCreating(false); }
  };

  const startEdit = (f: Folder) => {
    setEditing(f.id);
    setEditName(f.name);
    setEditTags(f.tags);
    setEditParent(f.parent_id || null);
  };
  const saveEdit = async () => {
    if (!editing) return;
    setBusy(true);
    try {
      await updateFolder(editing, editName.trim() || "Untitled", editTags, editParent || undefined);
      await refresh();
      onFoldersChanged?.();
    } catch (err) {
      handleError(err, "Folder update failed. Please try again.");
    } finally { setBusy(false); setEditing(null); setEditTags([]); setEditParent(null); }
  };

  const remove = async (id: string) => {
    if (!confirm("Delete folder? (Assets remain but become unassigned)")) return;
    setBusy(true);
    try {
      await deleteFolder(id);
      await refresh();
      onFoldersChanged?.();
      if (selectedId === id) onSelect(null);
    }
    catch (err) {
      handleError(err, "Failed to delete folder.");
    }
    finally { setBusy(false); }
  };

  const downloadFolder = async (folder: Folder) => {
    setBusy(true);
    try {
      const res = await downloadFolderZip(folder.id);
      const safe = (folder.name || "folder").replace(/\s+/g, "_") || "folder";
      await saveResponseToDisk(res, `${safe}.zip`);
    } catch (err) {
      handleError(err, "Unable to download folder.");
    } finally {
      setBusy(false);
    }
  };

  const folderById = React.useMemo(() => {
    const map: Record<string, Folder> = {};
    folders.forEach(f => { map[f.id] = f; });
    return map;
  }, [folders]);

  useEffect(() => {
    // Ensure selected folder path is expanded
    if (!selectedId) return;
    const next = new Set(expanded);
    let current = folderById[selectedId];
    const guard = new Set<string>();
    while (current?.parent_id && !guard.has(current.parent_id)) {
      next.add(current.parent_id);
      guard.add(current.parent_id);
      current = folderById[current.parent_id];
    }
    setExpanded(next);
  }, [selectedId, folderById]);

  const isDescendant = React.useCallback(
    (candidateId: string, targetId: string) => {
      let current = folderById[candidateId];
      const guard = new Set<string>();
      while (current) {
        if (!current.parent_id) return false;
        if (current.parent_id === targetId) return true;
        if (guard.has(current.parent_id)) break;
        guard.add(current.parent_id);
        current = folderById[current.parent_id];
      }
      return false;
    },
    [folderById]
  );

  const folderPath = React.useCallback(
    (folder: Folder) => {
      const segments = [folder.name || "Untitled"];
      let current = folder;
      const guard = new Set<string>([folder.id]);
      while (current.parent_id) {
        const parent = folderById[current.parent_id];
        if (!parent || guard.has(parent.id)) break;
        segments.unshift(parent.name || "Untitled");
        guard.add(parent.id);
        current = parent;
      }
      return segments.join(" / ");
    },
    [folderById]
  );

  const folderOptions = React.useMemo(() => {
    const opts = [{ id: null as string | null, name: "(Root)" }];
    const sorted = [...folders].sort((a, b) => folderPath(a).localeCompare(folderPath(b)));
    sorted.forEach(f => opts.push({ id: f.id, name: folderPath(f) }));
    return opts;
  }, [folders, folderPath]);

  const childrenMap = React.useMemo(() => {
    const map: Record<string, Folder[]> = {};
    const push = (key: string, f: Folder) => {
      if (!map[key]) map[key] = [];
      map[key].push(f);
    };
    folders.forEach(f => push(f.parent_id || "__root", f));
    Object.values(map).forEach(list => list.sort((a, b) => a.name.localeCompare(b.name)));
    return map;
  }, [folders]);

  // Default-expand root folders so they are visible
  useEffect(() => {
    const roots = childrenMap["__root"] || [];
    if (!roots.length) return;
    setExpanded(prev => {
      const next = new Set(prev);
      roots.forEach(r => next.add(r.id));
      return next;
    });
  }, [childrenMap]);

  const toggleExpand = (id: string) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const renderFolderNode = (folder: Folder, depth = 0) => {
    const children = childrenMap[folder.id] || [];
    const isSelected = selectedId === folder.id;
    const isOpen = expanded.has(folder.id);
    return (
      <div key={folder.id} className="rounded-md">
        <div
          className={`flex items-center gap-2 px-2 py-1 ${isSelected ? "bg-emerald-50 dark:bg-neutral-800" : ""}`}
          style={{ paddingLeft: 8 + depth * 12 }}
        >
          {children.length ? (
            <button
              onClick={() => toggleExpand(folder.id)}
              className="text-xs w-5 h-5 flex items-center justify-center rounded border border-transparent hover:border-neutral-400 dark:hover:border-neutral-600"
              aria-label={isOpen ? "Collapse" : "Expand"}
            >
              {isOpen ? "▾" : "▸"}
            </button>
          ) : (
            <span className="w-5 h-5" />
          )}
          <button className="flex-1 text-left truncate" onClick={() => onSelect(folder.id)} title={folderPath(folder)}>
            {depth > 0 ? " - " : ""}
            {folder.name || "Untitled"}
          </button>
          <div className="relative">
            <details className="group">
              <summary className="list-none w-8 h-8 rounded-md border flex items-center justify-center text-xs cursor-pointer select-none">
                ⋯
              </summary>
              <div className="absolute right-0 mt-1 min-w-[140px] rounded-md border bg-white dark:bg-neutral-900 shadow-lg z-10">
                <button
                  className="w-full text-left px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-60"
                  disabled={busy}
                  onClick={() => startCreate(folder.id)}
                >
                  + Subfolder
                </button>
                <button
                  className="w-full text-left px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-60"
                  disabled={busy}
                  onClick={() => startEdit(folder)}
                >
                  Edit
                </button>
                <button
                  className="w-full text-left px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-60"
                  disabled={busy}
                  onClick={() => downloadFolder(folder)}
                >
                  Zip download
                </button>
                <button
                  className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/40 disabled:opacity-60"
                  disabled={busy}
                  onClick={() => remove(folder.id)}
                >
                  Delete
                </button>
              </div>
            </details>
          </div>
        </div>
        {isOpen && children.map(child => renderFolderNode(child, depth + 1))}
      </div>
    );
  };

  return (
    <aside className="w-64 border-r border-neutral-200 dark:border-neutral-800 p-3 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="text-xs text-neutral-500">Location Manager</div>
        <button className="text-sm px-2 py-1 rounded-md border" onClick={() => startCreate(null)}>New</button>
      </div>

      <button
        className={`flex items-center gap-2 px-2 py-1 rounded-md ${!selectedId ? 'bg-emerald-50 dark:bg-neutral-800' : ''}`}
        onClick={() => onSelect(null)}
      >
        <span>All Items</span>
      </button>

      <div className="flex flex-col gap-1">
        {(childrenMap["__root"] || []).map(f => renderFolderNode(f, 0))}
        {folders.length === 0 && <div className="text-sm opacity-60 px-2">No folders yet</div>}
      </div>

      {creating && (
        <div className="mt-2 flex flex-col gap-2">
          <input
            value={newName}
            onChange={e=>setNewName(e.target.value)}
            placeholder="Folder name"
            className="px-2 py-1 text-sm rounded-md border w-full bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white"
          />
          <select
            value={newParent || ""}
            onChange={e => setNewParent(e.target.value || null)}
            className="px-2 py-1 text-sm rounded-md border w-full bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white"
          >
            {folderOptions.map(opt => (
              <option key={opt.id ?? "root"} value={opt.id || ""}>{opt.name}</option>
            ))}
          </select>
          <div className="flex gap-2">
            <button disabled={busy} className="text-sm px-3 py-1 rounded-md bg-emerald-600 text-white flex-1" onClick={create}>Create</button>
            <button className="text-sm px-3 py-1 rounded-md border flex-1" onClick={()=>{ setCreating(false); setNewParent(null); }}>Cancel</button>
          </div>
        </div>
      )}

      {editing && (
        <div className="mt-2 flex flex-col gap-2">
          <input
            value={editName}
            onChange={e=>setEditName(e.target.value)}
            className="px-2 py-1 text-sm rounded-md border bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white"
          />
          <select
            value={editParent || ""}
            onChange={e => setEditParent(e.target.value || null)}
            className="px-2 py-1 text-sm rounded-md border bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white"
          >
            {folderOptions
              .filter(opt => !editing || (opt.id !== editing && !(opt.id && isDescendant(opt.id, editing))))
              .map(opt => (
                <option key={opt.id ?? "root"} value={opt.id || ""}>{opt.name}</option>
              ))}
          </select>
          <TagInput value={editTags} onChange={setEditTags} placeholder="Add folder tags" />
          <div className="flex items-center gap-2">
            <button disabled={busy} className="text-sm px-2 py-1 rounded-md bg-emerald-600 text-white" onClick={saveEdit}>Save</button>
            <button className="text-sm px-2 py-1 rounded-md border" onClick={()=>{ setEditing(null); setEditTags([]); setEditParent(null); }}>Cancel</button>
          </div>
        </div>
      )}
    </aside>
  );
}
