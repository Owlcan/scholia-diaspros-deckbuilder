#!/bin/bash

echo "Starting Scholia Diaspros Deckbuilder..."
echo ""
echo "The app will open in your browser automatically."
echo "Keep this terminal open while using the app."
echo "Press Ctrl+C to stop the app."
echo ""

# Check if Python is available
if command -v python3 &> /dev/null; then
    echo "Using Python server..."
    open http://localhost:8000 2>/dev/null || xdg-open http://localhost:8000 2>/dev/null || echo "Please open http://localhost:8000 in your browser"
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "Using Python server..."
    open http://localhost:8000 2>/dev/null || xdg-open http://localhost:8000 2>/dev/null || echo "Please open http://localhost:8000 in your browser"
    python -m http.server 8000
# Check if Node.js is available
elif command -v node &> /dev/null; then
    echo "Using Node.js server..."
    open http://localhost:8000 2>/dev/null || xdg-open http://localhost:8000 2>/dev/null || echo "Please open http://localhost:8000 in your browser"
    npx http-server -p 8000 -c-1
else
    echo ""
    echo "ERROR: Neither Python nor Node.js found!"
    echo ""
    echo "Please install one of the following:"
    echo "- Python 3: https://www.python.org/downloads/"
    echo "- Node.js: https://nodejs.org/download/"
    echo ""
    echo "Then run this script again."
    echo ""
    read -p "Press any key to continue..."
fi
