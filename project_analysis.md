

# Analisis: Strategi Rendering & Penggunaan Sumber Daya Vercel

Dokumen ini memberikan tinjauan teknis tentang bagaimana halaman-halaman dirender dan mengidentifikasi area potensial yang dapat memengaruhi performa/batas (limits) Vercel.

## Tabel Ringkasan

| Halaman / Rute | Mode Rendering | Sumber Data | Dampak Sumber Daya Vercel |
| --- | --- | --- | --- |
| **Beranda (`/`)** | **SSG** (Prerendered) | Konten YAML | Minimal (Statis) |
| **Dokumentasi (`/docs/**`)** | **SSG** (Crawl/Prerender) | Konten Markdown | Minimal (Statis) |
| **Blog (`/blog/**`)** | **SSG** (Crawl/Prerender) | YAML/Markdown | Minimal (Statis) |
| **Produk (`/product/**`)** | **SSG** (Crawl/Prerender) | Konten YAML | Minimal (Statis) |
| **Harga / FAQ / Agensi** | **SSG** (Prerendered) | Konten YAML | Minimal (Statis) |
| **DevLovers (`/devlovers`)** | **SSR / CSR** | Logika Client | Rendah (Eksekusi Standar) |
| **Login / Daftar** | **SSR / CSR** | Logika Client | Rendah (Eksekusi Standar) |
| **OG Images** | **Serverless / Edge** | SVG Dinamis | **Menengah** (Eksekusi Fungsi) |
| **Optimasi Gambar** | **Serverless / IPX** | Nuxt Image | **Menengah** (Memori/Eksekusi) |

## Analisis Mendalam

### 1. Mode Rendering (SSR vs SSG)

Proyek ini dikonfigurasi sebagai aplikasi yang memprioritaskan **Static Site Generation (SSG)**.

* **Konfigurasi Nuxt**: `nitro.prerender.crawlLinks: true` memastikan bahwa setiap tautan yang ditemukan selama waktu build dihasilkan menjadi file HTML statis.
* **Content Engine**: Penggunaan `@nuxt/content` secara otomatis sesuai dengan pola ini, di mana data diambil dari file lokal (direktori `content/`) dan "dibakar" langsung ke dalam hasil build.

### 2. Batas Eksekusi Vercel

Karena proyek ini sangat bergantung pada SSG, standar waktu "Serverless Function Execution" sangat rendah untuk pengiriman halaman. Namun, dua modul dapat memicu batas eksekusi jika digunakan secara ekstensif:

> [!WARNING]
> **Risiko Potensial "Execution Timeout" di Vercel:**
> 1. **`nuxt-og-image`**: Setiap kali tautan dibagikan dan OG Image diminta, fungsi Serverless (satori/chromium) berjalan untuk menghasilkan gambar tersebut. *Crawler* massal dapat menyebabkan lonjakan waktu eksekusi.
> 2. **`@nuxt/image`**: Menggunakan penyedia seperti `ipx` (bawaan) di Vercel berarti gambar diubah ukurannya secara langsung (*on-the-fly*) melalui fungsi Serverless jika tidak ada dalam *cache*.
> 3. **Dokumen/Blog Dinamis**: Jika file konten baru ditambahkan tanpa melakukan build ulang, mengakses file tersebut akan memicu fallback SSR jika tidak diprerender secara ketat.
> 
> 

### 3. Logika Server-Side

Proyek saat ini **tidak memiliki handler server kustom** (tidak terdeteksi adanya `server/api` atau `server/routes`). Semua logika terlokalisasi di dalam komponen Vue menggunakan fitur *auto-imports* dari Nuxt dan mesin kueri konten.

## Rekomendasi

* **Pertahankan SSG**: Tetap aktifkan `prerender` untuk meminimalkan biaya eksekusi Vercel Edge.
* **Optimasi Gambar**: Gunakan penyedia gambar eksternal (seperti Cloudinary atau Imgix) jika proyek berkembang hingga memiliki ratusan gambar beresolusi tinggi untuk menghindari tercapainya batas memori Serverless Vercel.
* **Cold Starts**: Karena hanya ada sedikit fungsi aktif, "cold starts" bukan merupakan masalah utama bagi bagian statis dari situs ini.

---
