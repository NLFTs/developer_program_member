# Setup GitHub OAuth untuk Login

## 📋 Langkah-langkah Setup

### 1. Buat GitHub OAuth App

1. Buka https://github.com/settings/developers
2. Klik **"New OAuth App"**
3. Isi form dengan data berikut:

   - **Application name:** NLFTs Developer Program (atau nama lain)
   - **Homepage URL:** `https://nlfts.dev` (atau domain Anda)
   - **Authorization callback URL:** `https://nlfts.dev/confirm` (atau `http://localhost:3000/confirm` untuk development)
   - **Application description:** (optional)

4. Klik **"Register application"**
5. Setelah dibuat, Anda akan mendapatkan:
   - **Client ID** (public)
   - **Client Secret** (private - klik "Generate a new client secret")

### 2. Update File .env

Copy `.env.example` ke `.env` dan isi dengan credentials Anda:

```env
# GitHub Personal Access Token (for API calls)
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Site URL
NUXT_PUBLIC_SITE_URL=https://nlfts.dev

# GitHub OAuth Configuration
GITHUB_CLIENT_ID=Ov23liXqPqPqPqPqPqPq
GITHUB_CLIENT_SECRET=your_secret_here_xxxxxxxxxxxxxxxxxxxxxxxx
NUXT_PUBLIC_GITHUB_CLIENT_ID=Ov23liXqPqPqPqPqPqPq
```

⚠️ **PENTING:** 
- Jangan commit file `.env` ke Git!
- `GITHUB_CLIENT_SECRET` harus dijaga kerahasiaannya
- Untuk production, gunakan environment variables di hosting platform

### 3. Development vs Production

#### Development (localhost)
```env
NUXT_PUBLIC_SITE_URL=http://localhost:3000
```
Callback URL di GitHub OAuth App: `http://localhost:3000/confirm`

#### Production
```env
NUXT_PUBLIC_SITE_URL=https://nlfts.dev
```
Callback URL di GitHub OAuth App: `https://nlfts.dev/confirm`

💡 **Tip:** Anda bisa membuat 2 OAuth Apps terpisah untuk development dan production.

### 4. Test Login

1. Jalankan development server:
   ```bash
   pnpm dev
   ```

2. Buka browser dan akses `http://localhost:3000/login`

3. Klik tombol **"Continue with GitHub"**

4. Anda akan diarahkan ke GitHub untuk authorize aplikasi

5. Setelah authorize, Anda akan diredirect kembali ke website dan login berhasil

### 5. Troubleshooting

#### Error: "The redirect_uri MUST match the registered callback URL"
- Pastikan callback URL di GitHub OAuth App sama persis dengan URL di aplikasi
- Cek apakah ada trailing slash (`/`) yang berbeda
- Untuk localhost, gunakan `http://` bukan `https://`

#### Error: "Bad credentials"
- Cek apakah `GITHUB_CLIENT_ID` dan `GITHUB_CLIENT_SECRET` sudah benar
- Pastikan tidak ada spasi atau karakter tersembunyi
- Regenerate client secret jika perlu

#### Popup blocked
- Browser mungkin memblokir popup
- Izinkan popup untuk domain Anda
- Atau gunakan full-page redirect (ubah kode di `login.vue`)

#### User data tidak tersimpan
- Cek browser console untuk error
- Pastikan localStorage tidak diblokir
- Cek apakah server endpoint `/api/auth/github` berjalan dengan baik

### 6. Security Best Practices

✅ **DO:**
- Simpan `GITHUB_CLIENT_SECRET` di environment variables
- Gunakan HTTPS di production
- Validate user data dari GitHub API
- Implement rate limiting di server endpoint

❌ **DON'T:**
- Jangan commit `.env` ke Git
- Jangan expose `GITHUB_CLIENT_SECRET` ke client
- Jangan trust user input tanpa validation
- Jangan simpan sensitive data di localStorage

### 7. Deployment

#### Vercel
```bash
vercel env add GITHUB_CLIENT_ID
vercel env add GITHUB_CLIENT_SECRET
vercel env add NUXT_PUBLIC_GITHUB_CLIENT_ID
```

#### Netlify
Tambahkan environment variables di:
**Site settings → Environment variables**

#### Railway / Render
Tambahkan environment variables di dashboard masing-masing platform.

---

## 🔗 Resources

- [GitHub OAuth Documentation](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps)
- [Nuxt Runtime Config](https://nuxt.com/docs/guide/going-further/runtime-config)
- [OAuth 2.0 Flow](https://oauth.net/2/)

---

**Last Updated:** April 20, 2026
