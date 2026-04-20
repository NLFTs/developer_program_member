# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2026-04-20

### 🎉 Major Refactor: From Social Media to Static Website

This is a **BREAKING CHANGE** release that completely transforms the website from a social media platform to a static content-driven website.

### ❌ Removed

#### Features
- User profile pages (dynamic routes `/[username]`)
- Profile editing functionality
- Social media integration (Instagram, Bluesky, Facebook, X)
- Tech stack badges and selection
- User bio and website fields
- Following/followers system
- User posts and comments
- Achievement center
- Creator LAB
- Admin badges and verification
- Database storage for user data

#### Files
- `app/pages/[username].vue` - Dynamic user profile page
- `app/pages/sampel_prof.vue` - Sample profile page
- `app/components/ProfileEditModal.vue` - Profile edit modal
- `app/composables/useProfile.ts` - Profile database composable
- `server/api/profile/[username].get.ts` - Profile API endpoint
- `server/utils/profile.ts` - Profile server utilities
- `server/api/profile/` - Profile API folder

#### Dependencies
- `@nuxtjs/supabase` - Supabase integration module

#### Configuration
- Supabase module from `nuxt.config.ts`
- Supabase redirect configuration
- `SUPABASE_URL` and `SUPABASE_KEY` environment variables

### ✅ Added

#### Features
- Simple GitHub OAuth authentication (localStorage-based)
- Static content-driven website
- Improved performance (no database queries)
- Simplified user experience

#### Files
- `app/composables/useAuth.ts` - Simple auth state management
- `server/api/auth/github.post.ts` - GitHub OAuth server endpoint
- `.env.example` - Environment variables template
- `REFACTOR_SUMMARY.md` - Refactor overview documentation
- `REFACTOR_NOTES.md` - Detailed refactor documentation
- `SETUP_GITHUB_OAUTH.md` - GitHub OAuth setup guide
- `CHECKLIST.md` - Deployment checklist
- `QUICK_START.md` - Quick start guide
- `PENJELASAN_REFACTOR.md` - Indonesian documentation
- `DOCS_INDEX.md` - Documentation index
- `CHANGELOG.md` - This file

#### Configuration
- Runtime config for GitHub OAuth in `nuxt.config.ts`
- GitHub OAuth environment variables

### 🔄 Changed

#### Files
- `app/pages/login.vue` - Simplified login without Supabase
- `app/pages/confirm.vue` - New OAuth callback handler
- `app/components/AppHeader.vue` - Simplified header with new auth
- `app/pages/product/index.vue` - Updated to use new auth composable
- `nuxt.config.ts` - Removed Supabase, added runtime config
- `package.json` - Removed Supabase dependency
- `.env` - Removed Supabase credentials, added GitHub OAuth
- `README.md` - Updated project documentation

#### Behavior
- User authentication now uses localStorage instead of database
- User data is not persisted on server
- Login state is client-side only
- No user profiles or social features

### ⚠️ Breaking Changes

#### URLs
- All `/[username]` routes now return 404
- `/api/profile/[username]` endpoint removed

#### Data
- All user profile data from database is no longer accessible
- User must login again (new auth system)
- No data migration from old system

#### Features
- Profile editing removed
- Social media links removed
- Tech stack selection removed
- User bio and website removed
- Following/followers removed
- Posts and comments removed

### 🚀 Migration Guide

#### For Users
1. Login again with GitHub OAuth
2. User data will be stored in browser only
3. Profile pages are no longer available

#### For Developers
1. Run `pnpm remove @nuxtjs/supabase`
2. Run `pnpm install`
3. Setup GitHub OAuth (see SETUP_GITHUB_OAUTH.md)
4. Update `.env` with GitHub credentials
5. Test login functionality
6. Deploy with new environment variables

### 📊 Performance Improvements
- Faster page loads (no database queries)
- Better SEO (static pages)
- Reduced server load
- Lower hosting costs

### 🔒 Security Improvements
- No user data stored on server
- Simplified attack surface
- No database vulnerabilities
- OAuth-only authentication

---

## [1.x.x] - Previous Versions

Previous versions included social media features with Supabase database integration. See Git history for details.

---

## Version Naming

- **Major version (2.0.0)**: Breaking changes, major refactors
- **Minor version (2.1.0)**: New features, non-breaking changes
- **Patch version (2.0.1)**: Bug fixes, minor improvements

---

**Note:** This changelog follows [Keep a Changelog](https://keepachangelog.com/) format.
