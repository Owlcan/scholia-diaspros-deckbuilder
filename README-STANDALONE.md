# Scholia Diaspros Deckbuilder - Standalone App

Your TCG deckbuilder is now configured as a Progressive Web App (PWA) that can run as a standalone desktop application!

## 🚀 **Easy Setup (No Technical Knowledge Required)**

### Windows Users:
1. **Double-click `START-APP.bat`**
2. **Wait for your browser to open automatically**
3. **Click the "📱 Install App" button** when it appears
4. **Done!** The app installs as a desktop application

### Mac/Linux Users:
1. **Double-click `start-app.sh`** (or run it in terminal)
2. **Wait for your browser to open automatically**
3. **Click the "📱 Install App" button** when it appears
4. **Done!** The app installs as a desktop application

## 📦 **Sharing the App**

**To share with others:**
1. **Zip the entire folder** (~300MB)
2. **Send to anyone**
3. **They just double-click the START-APP file**
4. **No installation needed** - works on any computer with Python or Node.js

## ✅ **What This Solves**

- ✅ **No CORS issues** - runs on local server
- ✅ **No GitHub/deployment needed** - completely self-contained
- ✅ **Works offline** - once installed as PWA
- ✅ **Own window** - not just a browser tab
- ✅ **Easy distribution** - just share the folder

## 🔧 **Requirements**

The start scripts automatically detect and use:
- **Python 3** (most computers have this)
- **Node.js** (if Python not available)

If neither is installed, the script provides download links.

## 🎯 **How It Works**

1. **Start script launches a local web server**
2. **Opens the app in your browser automatically**
3. **PWA install button appears**
4. **Install as desktop app**
5. **Keep the script running while using the app**

## 📁 **File Structure**
- `START-APP.bat` - Windows launcher
- `start-app.sh` - Mac/Linux launcher  
- `index.html` - Main app file
- `TCG-cards.js` - Card database
- `manifest.json` - PWA configuration
- `sw.js` - Service worker for offline functionality
- `src/assets/images/` - All card images

**Perfect for sharing!** No servers, no GitHub, no deployment - just double-click and go!
