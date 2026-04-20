# ✅ Refactor Checklist

## 🎯 Pre-Deployment Checklist

### 1. Dependencies
- [ ] Run `pnpm remove @nuxtjs/supabase`
- [ ] Run `pnpm install`
- [ ] Verify no Supabase packages in `node_modules`

### 2. GitHub OAuth Setup
- [ ] Create GitHub OAuth App at https://github.com/settings/developers
- [ ] Copy Client ID and Client Secret
- [ ] Update `.env` file with credentials
- [ ] Set correct callback URL (`http://localhost:3000/confirm` for dev)

### 3. Environment Variables
- [ ] `GITHUB_CLIENT_ID` is set
- [ ] `GITHUB_CLIENT_SECRET` is set
- [ ] `NUXT_PUBLIC_GITHUB_CLIENT_ID` is set
- [ ] `NUXT_PUBLIC_SITE_URL` is set
- [ ] No Supabase variables in `.env`

### 4. Code Verification
- [ ] No `useSupabaseClient()` calls in codebase
- [ ] No `useSupabaseUser()` calls in codebase
- [ ] No `useProfile()` calls in codebase
- [ ] All imports updated to use `useAuth()`

### 5. File Cleanup
- [ ] `app/pages/[username].vue` deleted
- [ ] `app/pages/sampel_prof.vue` deleted
- [ ] `app/components/ProfileEditModal.vue` deleted
- [ ] `app/composables/useProfile.ts` deleted
- [ ] `server/api/profile/` folder deleted
- [ ] `server/utils/profile.ts` deleted

### 6. Testing
- [ ] Run `pnpm dev` successfully
- [ ] Homepage loads without errors
- [ ] Login page works
- [ ] GitHub OAuth popup opens
- [ ] After login, user data appears in header
- [ ] Logout works correctly
- [ ] No 404 errors in console
- [ ] No Supabase errors in console

### 7. Routes Testing
- [ ] `/` - Homepage ✅
- [ ] `/login` - Login page ✅
- [ ] `/confirm` - OAuth callback ✅
- [ ] `/blog` - Blog listing ✅
- [ ] `/docs` - Documentation ✅
- [ ] `/product` - Product listing ✅
- [ ] `/events` - Events page ✅
- [ ] `/[username]` - Should return 404 ✅

### 8. Browser Testing
- [ ] Chrome/Edge - Login works
- [ ] Firefox - Login works
- [ ] Safari - Login works
- [ ] Mobile browser - Login works
- [ ] Popup not blocked
- [ ] localStorage working

### 9. Production Preparation
- [ ] Update environment variables in hosting platform
- [ ] Set production callback URL in GitHub OAuth App
- [ ] Update `NUXT_PUBLIC_SITE_URL` to production domain
- [ ] Test build: `pnpm build`
- [ ] Test preview: `pnpm preview`

### 10. Documentation
- [ ] Read `REFACTOR_SUMMARY.md`
- [ ] Read `REFACTOR_NOTES.md`
- [ ] Read `SETUP_GITHUB_OAUTH.md`
- [ ] Update README.md if needed
- [ ] Document any custom changes

---

## 🚨 Common Issues & Solutions

### Issue: "Module not found: @nuxtjs/supabase"
**Solution:** Run `pnpm remove @nuxtjs/supabase` and `pnpm install`

### Issue: "useSupabaseClient is not defined"
**Solution:** Replace with `useAuth()` composable

### Issue: "Popup blocked"
**Solution:** Allow popups in browser settings

### Issue: "redirect_uri mismatch"
**Solution:** Check callback URL in GitHub OAuth App matches exactly

### Issue: "User data not saved"
**Solution:** Check browser console, verify localStorage is enabled

### Issue: "404 on /[username]"
**Solution:** This is expected! Profile pages have been removed

---

## 📝 Post-Deployment Checklist

### 1. Production Testing
- [ ] Login works on production
- [ ] Logout works on production
- [ ] All pages load correctly
- [ ] No console errors
- [ ] Performance is good

### 2. Monitoring
- [ ] Check error logs
- [ ] Monitor login success rate
- [ ] Check for 404 errors on old routes
- [ ] Monitor page load times

### 3. User Communication
- [ ] Notify users about changes
- [ ] Explain new login system
- [ ] Inform about removed features
- [ ] Provide support contact

---

## ✅ Sign-off

- [ ] All checklist items completed
- [ ] Testing passed
- [ ] Documentation updated
- [ ] Ready for deployment

**Completed by:** _______________  
**Date:** _______________  
**Signature:** _______________

---

**Good luck with your deployment! 🚀**
