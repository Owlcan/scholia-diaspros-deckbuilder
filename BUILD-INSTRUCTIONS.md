# Building the Standalone Executable

## For You (The Developer)

To create the standalone executable for your users:

1. **Install Node.js** (only needed once): https://nodejs.org/download/
2. **Double-click `BUILD-STANDALONE.bat`**
3. **Wait for it to finish** (may take 5-10 minutes first time)
4. **Find your executable** in the `dist` folder

## What Gets Created

Two options for your users:

### Option 1: Setup File (Recommended)
- `dist/Scholia Diaspros Deckbuilder Setup 1.0.0.exe`
- Users double-click to install
- Creates desktop shortcut
- Looks professional

### Option 2: Portable Executable  
- `dist/Scholia Diaspros Deckbuilder 1.0.0.exe`
- Users just double-click to run
- No installation needed
- Single file (~200MB)

## For Your Users

**They literally just:**
1. **Double-click the .exe file**
2. **That's it!**

- ✅ **No Python needed**
- ✅ **No batch files**
- ✅ **No technical knowledge**
- ✅ **Proper Windows app icon**
- ✅ **Opens in its own window**
- ✅ **Works offline**

## Distribution

Send them either:
- The setup file (installs like any Windows program)
- The portable exe (just runs, no installation)

**Perfect for non-technical users!**

---

## Shipping small updates without a full re-download

If you changed only a few files (HTML/CSS/JS/assets), you can ship a tiny "patch zip" and avoid rebuilding/installing:

1) Create a folder with just the changed files, preserving paths (e.g., `index.html`, `styles.css`, `main.js`, `sw.js`, `src/assets/...`).
2) Copy one of the scripts from `scripts/update/` into that folder:
	- `Update.ps1` (PowerShell; supports optional backup)
	- `Update.bat` (Batch; minimal copy)
3) Zip that folder and share with users.

User instructions (PowerShell):
```
Right-click the patch zip > Extract All...
Open PowerShell in the extracted folder
Run: .\Update.ps1 -InstallPath "C:\\Program Files\\Scholia Diaspros Deckbuilder"  # or wherever it's installed
```

User instructions (Batch/CMD):
```
Right-click the patch zip > Extract All...
Open Command Prompt in the extracted folder
Run: Update.bat "C:\\Program Files\\Scholia Diaspros Deckbuilder"
```

Notes:
- Ask users to close the app first.
- Edit the file list inside the script (`$ChangedFiles` or `FILES`) per patch.
- This does not modify your build pipeline and avoids new installer/warning prompts.
