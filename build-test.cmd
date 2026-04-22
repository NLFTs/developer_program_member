@echo off
echo Testing NLFTs Build Process...
echo.

echo Step 1: Installing dependencies...
call pnpm install
if %errorlevel% neq 0 (
    echo Error: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo Step 2: Building application...
call pnpm build
if %errorlevel% neq 0 (
    echo Error: Build failed
    pause
    exit /b 1
)

echo.
echo Step 3: Testing sitemap generation...
echo Sitemap should be available at: http://localhost:3000/sitemap.xml

echo.
echo Step 4: Starting preview server...
echo Starting server on http://localhost:3000
call pnpm preview

pause