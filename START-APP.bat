@echo off
echo Starting Scholia Diaspros Deckbuilder...
echo.
echo The app will open in your browser automatically.
echo Keep this window open while using the app.
echo Close this window to stop the app.
echo.

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Using Python server...
    start http://localhost:8069
    python -m http.server 8069
) else (
    REM Check if Node.js is available
    node --version >nul 2>&1
    if %errorlevel% == 0 (
        echo Using Node.js server...
        start http://localhost:8069
        npx http-server -p 8069 -c-1
    ) else (
        echo.
        echo ERROR: Neither Python nor Node.js found!
        echo.
        echo Please install one of the following:
        echo - Python 3: https://www.python.org/downloads/
        echo - Node.js: https://nodejs.org/download/
        echo.
        echo Then run this file again.
        echo.
        pause
    )
)
