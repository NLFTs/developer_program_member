# 🚀 Quick Start Guide

Get your NLFTs Developer Program website up and running in 5 minutes!

## ⚡ Fast Track

```bash
# 1. Install dependencies
pnpm install

# 2. Remove old Supabase package
pnpm remove @nuxtjs/supabase

# 3. Copy environment file
cp .env.example .env

# 4. Start development server
pnpm dev
```

## 🔑 Setup GitHub OAuth (Required for Login)

### Step 1: Create GitHub OAuth App

1. Go to https://github.com/settings/developers
2. Click **"New OAuth App"**
3. Fill in:
   - **Application name:** NLFTs Developer Program
   - **Homepage URL:** `http://localhost:3000`
   - **Callback URL:** `http://localhost:3000/confirm`
4. Click **"Register application"**
5. Copy your **Client ID**
6. Click **"Generate a new client secret"** and copy it

### Step 2: Update .env File

Open `.env` and update:

```env
GITHUB_CLIENT_ID=your_client_id_here
GITHUB_CLIENT_SECRET=your_client_secret_here
NUXT_PUBLIC_GITHUB_CLIENT_ID=your_client_id_here
```

### Step 3: Test Login

1. Open `http://localhost:3000/login`
2. Click **"Continue with GitHub"**
3. Authorize the app
4. You should be logged in! ✅

## 📝 What Changed?

This website was recently refactored from a social media platform to a static website:

### ❌ Removed
- User profiles (nlfts.dev/username)
- Database (Supabase)
- Social media features
- Profile editing
- User posts/comments

### ✅ Kept
- GitHub OAuth login/logout
- Blog posts (from markdown)
- Documentation
- Product pages
- Events

## 🎯 Key Files

| File | Purpose |
|------|---------|
| `app/pages/login.vue` | Login page |
| `app/pages/confirm.vue` | OAuth callback |
| `app/composables/useAuth.ts` | Auth state management |
| `server/api/auth/github.post.ts` | OAuth server endpoint |
| `app/components/AppHeader.vue` | Header with login button |

## 🐛 Troubleshooting

### "Module not found: @nuxtjs/supabase"
```bash
pnpm remove @nuxtjs/supabase
pnpm install
```

### "Popup blocked"
Allow popups in your browser settings for localhost.

### "redirect_uri mismatch"
Make sure callback URL in GitHub OAuth App is exactly:
```
http://localhost:3000/confirm
```

### Login not working
1. Check `.env` file has correct credentials
2. Check browser console for errors
3. Verify GitHub OAuth App callback URL
4. Try clearing localStorage and cookies

## 📚 Next Steps

1. ✅ Read [REFACTOR_SUMMARY.md](./REFACTOR_SUMMARY.md) for full overview
2. ✅ Check [SETUP_GITHUB_OAUTH.md](./SETUP_GITHUB_OAUTH.md) for detailed OAuth setup
3. ✅ Review [CHECKLIST.md](./CHECKLIST.md) before deployment
4. ✅ Update content in `content/` folder
5. ✅ Customize components in `app/components/`
6. ✅ Deploy to production!

## 🚀 Production Deployment

### Before Deploying

1. Create production GitHub OAuth App with production callback URL
2. Update environment variables in hosting platform
3. Test build locally:
   ```bash
   pnpm build
   pnpm preview
   ```

### Deploy to Vercel

```bash
vercel
```

Add environment variables in Vercel dashboard.

### Deploy to Netlify

```bash
netlify deploy --prod
```

Add environment variables in Netlify dashboard.

## 💡 Tips

- User data is stored in **localStorage** (no database)
- Users must login again after clearing browser data
- Old profile URLs (nlfts.dev/username) will return 404
- Focus on content-driven pages (blog, docs, products)

## 🎉 You're Ready!

Your website is now a fast, static, content-driven platform with simple authentication.

**Happy coding! 🚀**

---

Need help? Check the documentation files or open an issue on GitHub.
