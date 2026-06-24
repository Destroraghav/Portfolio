@echo off
REM Double-click this file to start the local dev server.
REM It changes to this file's own folder (with /d so the drive switches too)
REM and runs the Astro dev server at http://localhost:4321
cd /d "%~dp0"
echo Starting the dev server...  Leave this window open.
echo Open http://localhost:4321 in your browser once it says "ready".
echo Press Ctrl+C in this window to stop.
echo.
call npm run dev
pause
