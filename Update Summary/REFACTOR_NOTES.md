# Refactor Besar-Besaran: Dari Sosial Media ke Website Statis

## 🎯 Tujuan Refactor
Mengubah website dari sistem sosial media dengan backend Supabase menjadi website statis yang optimal, dengan mempertahankan HANYA sistem login/logout GitHub OAuth.

## ✅ Yang Sudah Dihapus

### 1. Fitur Sosial Media & Database
- ❌ Halaman dinamis `[username].vue` - profil user publik
- ❌ Halaman `sampel_prof.vue` - sample profile
- ❌ Component `ProfileEditModal.vue` - edit profile
- ❌ Composable `useProfile.ts` - integrasi database profile
- ❌ Server API `/api/profile/[username].get.ts` - endpoint profile
- ❌ Server utils `profile.ts` - fetch profile dari database
- ❌ Module `@nuxtjs/supabase` dari nuxt.config.ts
- ❌ Dependency `@nuxtjs/supabase` dari package.json
- ❌ Konfigurasi Supabase dari .env

### 2. Konfigurasi Backend
- ❌ `supabase.redirect: false` dari nuxt.config.ts
- ❌ `SUPABASE_URL` dan `SUPABASE_KEY` dari .env

## ✅ Yang Dipertahankan & Disederhanakan

### 1. Sistem Autentikasi (Tanpa Database)
- ✅ Login dengan GitHub OAuth
- ✅ Logout functionality
- ✅ User state management (localStorage)
- ✅ Halaman `/login` - disederhanakan
- ✅ Halaman `/confirm` - OAuth callback

### 2. File Baru yang Dibuat

#### `app/composables/useAuth.ts`
Composable sederhana untuk handle auth state tanpa database:
- Load user dari localStorage
- Logout function
- isLoggedIn computed property

#### `server/api/auth/github.post.ts`
Server endpoint untuk handle GitHub OAuth:
- Exchange code untuk access token
- Fetch user data dari GitHub API
- Return user data (TIDAK disimpan ke database)

#### `app/pages/login.vue` (Updated)
Halaman login yang disederhanakan:
- GitHub OAuth popup
- Tanpa integrasi Supabase
- Menggunakan GitHub OAuth App langsung

#### `app/pages/confirm.vue` (Updated)
OAuth callback handler:
- Terima code dari GitHub
- Call server endpoint untuk exchange token
- Simpan user data di localStorage
- Redirect ke home atau close popup

#### `app/components/AppHeader.vue` (Updated)
Header yang disederhanakan:
- Menggunakan `useAuth()` composable
- Menghapus link ke profil user
- Menghapus badge admin
- Hanya menampilkan nama dan avatar dari GitHub

## 🔧 Konfigurasi yang Diperlukan

### 1. GitHub OAuth App
Anda perlu membuat GitHub OAuth App di https://github.com/settings/developers

**Callback URL:** `https://yourdomain.com/confirm`

### 2. Environment Variables (.env)
```env
GITHUB_TOKEN=your_github_personal_access_token
NUXT_PUBLIC_SITE_URL=https://nlfts.dev

# GitHub OAuth Configuration
GITHUB_CLIENT_ID=your_github_oauth_app_client_id
GITHUB_CLIENT_SECRET=your_github_oauth_app_client_secret
NUXT_PUBLIC_GITHUB_CLIENT_ID=your_github_oauth_app_client_id
```

## 📦 Dependencies yang Dihapus

Jalankan command berikut untuk menghapus dependency Supabase:
```bash
pnpm remove @nuxtjs/supabase
```

## 🚀 Cara Menjalankan

1. Install dependencies:
```bash
pnpm install
```

2. Setup GitHub OAuth App dan update .env

3. Jalankan development server:
```bash
pnpm dev
```

## 📝 Catatan Penting

### Sistem Login Baru
- User data disimpan di **localStorage** (client-side only)
- Tidak ada database backend
- Tidak ada persistent storage
- User harus login ulang setiap kali clear browser data

### Fitur yang Tidak Ada Lagi
- ❌ Profil user publik (nlfts.dev/username)
- ❌ Edit profile
- ❌ Social media links
- ❌ Tech stack badges
- ❌ User posts/comments
- ❌ Following/followers
- ❌ Achievement system
- ❌ Creator LAB
- ❌ Admin badges

### Website Sekarang Adalah
- ✅ Website statis dengan konten dari Nuxt Content
- ✅ Blog posts (dari markdown files)
- ✅ Documentation
- ✅ Product pages
- ✅ Events
- ✅ Simple login/logout (tanpa database)

## 🎨 Struktur Baru

```
app/
├── composables/
│   ├── useAuth.ts          # Auth state management (NEW)
│   └── useGsap.ts          # GSAP animations
├── pages/
│   ├── login.vue           # Login page (UPDATED)
│   ├── confirm.vue         # OAuth callback (UPDATED)
│   ├── index.vue           # Home page
│   ├── blog/               # Blog pages
│   ├── docs/               # Documentation
│   └── product/            # Product pages
└── components/
    ├── AppHeader.vue       # Header (UPDATED)
    └── ...

server/
└── api/
    └── auth/
        └── github.post.ts  # GitHub OAuth handler (NEW)
```

## 🔄 Migration Path

Jika di masa depan Anda ingin menambahkan database lagi:
1. Install database client (Supabase, Prisma, etc.)
2. Update `useAuth.ts` untuk sync dengan database
3. Update `server/api/auth/github.post.ts` untuk save user ke database
4. Tambahkan kembali fitur profile jika diperlukan

## ⚠️ Breaking Changes

- Semua URL `nlfts.dev/[username]` akan return 404
- User yang sudah login sebelumnya harus login ulang
- Tidak ada data user yang tersimpan di server

## 🎉 Hasil Akhir

Website sekarang adalah:
- 🚀 Lebih cepat (no database queries)
- 🎯 Lebih fokus (content-driven)
- 🔒 Lebih aman (no user data storage)
- 💰 Lebih murah (no database hosting)
- 🎨 Lebih sederhana (less complexity)

---

**Refactor Date:** April 20, 2026
**Status:** ✅ Complete
