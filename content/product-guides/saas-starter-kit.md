# Panduan Penggunaan SaaS Boilerplate

Selamat datang di panduan resmi penggunaan SaaS Boilerplate dari FTs Project. Template ini dirancang untuk memberikan fondasi yang kuat bagi aplikasi SaaS Anda.

## Persiapan Awal

Sebelum memulai, pastikan Anda telah menginstal Node.js versi terbaru di perangkat Anda.

### 1. Kloning Repositori
Jalankan perintah berikut di terminal Anda:
```bash
git clone https://github.com/fts-project/saas-boilerplate.git
```

### 2. Instal Dependensi
Masuk ke direktori proyek dan instal paket yang diperlukan:
```bash
cd saas-boilerplate
pnpm install
```

## Konfigurasi Environment
Salin file `.env.example` menjadi `.env` dan isi variabel yang diperlukan:
- `DATABASE_URL`: URL koneksi database Anda.
- `NEXTAUTH_SECRET`: Kunci rahasia untuk autentikasi.

## Menjalankan Server Pengembangan
Jalankan perintah berikut untuk melihat aplikasi Anda berjalan secara lokal:
```bash
pnpm dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## Struktur Proyek
- `/app`: Berisi logika halaman dan komponen.
- `/lib`: Utilitas dan fungsi pembantu.
- `/styles`: File CSS global.

Selamat membangun produk luar biasa!
