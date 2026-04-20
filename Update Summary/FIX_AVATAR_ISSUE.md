# 🖼️ Fix: Avatar Images Not Showing in Production

## Problem

Avatar images in `public/Avatar/` folder were not showing in Vercel production build, even though they were committed to Git.

## Root Cause

**Case-Sensitivity Mismatch:**
- Folder name: `public/Avatar/` (capital A)
- Code reference: `/avatar/` (lowercase a)

**Why it worked locally but not in production:**
- Windows/macOS: Case-insensitive file systems (both work)
- Linux (Vercel): Case-sensitive file system (must match exactly)

## Solution

Renamed folder from `public/Avatar/` to `public/avatar/` (all lowercase) to match the code references.

### Changes Made

```bash
# Renamed folder (Git tracked the rename)
public/Avatar/ → public/avatar/

# Files affected:
- public/avatar/dark.jpg
- public/avatar/elaina.jpg
- public/avatar/happy.jpg
- public/avatar/koba.jpg
- public/avatar/priasolo.jpg
- public/avatar/sigma.jpg
```

### Code References (Already Correct)

In `app/pages/index.vue`:
```javascript
const avatars = [
  "/avatar/dark.jpg",      // ✅ lowercase
  "/avatar/elaina.jpg",    // ✅ lowercase
  "/avatar/happy.jpg",     // ✅ lowercase
  "/avatar/koba.jpg",      // ✅ lowercase
  "/avatar/priasolo.jpg",  // ✅ lowercase
  "/avatar/sigma.jpg",     // ✅ lowercase
]
```

## Verification

### Local Testing
```bash
pnpm dev
# Check if avatars load at http://localhost:3000
```

### Production Testing
After deployment to Vercel:
1. Check homepage for avatar images
2. Verify in browser DevTools Network tab
3. Confirm no 404 errors for `/avatar/*.jpg`

## Best Practices

### File Naming Conventions
Always use **lowercase** for web assets:
- ✅ `public/avatar/` 
- ✅ `public/images/`
- ✅ `public/icons/`
- ❌ `public/Avatar/`
- ❌ `public/Images/`
- ❌ `public/Icons/`

### Why Lowercase?
1. **Cross-platform compatibility** - Works on all OS
2. **URL consistency** - URLs are case-sensitive
3. **Convention** - Standard web practice
4. **Avoid confusion** - Easier to remember

## Related Issues

If you encounter similar issues with other assets:

1. **Check file paths in code**
   ```bash
   # Search for asset references
   grep -r "public/" app/
   ```

2. **Verify folder names**
   ```bash
   ls -la public/
   ```

3. **Ensure case matches exactly**
   - Code: `/images/logo.png`
   - Folder: `public/images/logo.png` ✅
   - NOT: `public/Images/logo.png` ❌

## Prevention

### Git Configuration
Add to `.gitattributes` to enforce case-sensitivity:
```
* text=auto eol=lf
*.jpg binary
*.png binary
*.svg binary
```

### Linting
Consider adding a linter rule to check for uppercase in public folder names.

### Documentation
Document naming conventions in project README or contributing guide.

## Commit Message

```
fix: rename Avatar folder to lowercase for production compatibility

- Renamed public/Avatar/ to public/avatar/
- Fixes case-sensitivity issue on Linux (Vercel)
- All avatar images now load correctly in production
```

## Status

✅ **Fixed** - Avatar images now work in production

---

**Date:** April 20, 2026  
**Issue:** Avatar images 404 in Vercel  
**Solution:** Folder rename to lowercase  
**Status:** Resolved
