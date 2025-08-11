@echo off
echo.
echo ========================================
echo  Building Standalone Deckbuilder App
echo ========================================
echo.

echo Installing dependencies...
call npm install

echo.
echo Building Windows executable...
call npm run build-win

echo.
echo ========================================
echo Build complete!
echo.
echo Your standalone app is in the 'dist' folder:
echo - Setup file: dist\Scholia Diaspros Deckbuilder Setup 1.0.0.exe
echo.
echo Users can:
echo 1. Run the setup file to install the app
echo 2. Double-click the desktop shortcut to launch
echo.
echo No technical knowledge required!
echo ========================================
echo.
pause
