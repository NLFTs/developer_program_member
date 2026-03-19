# Nuxt Portfolio Template

template ini di bangun menggunakan [Nuxt UI](https://ui.nuxt.com).

- [Live demo](https://destkaa.nlfts.dev)

<a href="https://destkaa.nlfts.dev" target="_blank">
  <picture>
    <img alt="Nuxt Portfolio Template" src="https://github.com/NLFTs/portofolio/raw/main/public/og.png">
  </picture>
</a>

## Quick Start

```bash [Terminal]
npm create nuxt@latest -- -t ui/portfolio
```

or 

```bash
git clone https://github.com/NLFTs/portofolio.git
```

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-name=portofolio&repository-url=https%3A%2F%2Fgithub.com%2FNLFTs%2Fportofolio.git&demo-image=https%3A%2F%2Fui.nuxt.com%2Fassets%2Ftemplates%2Fnuxt%2Fportfolio-dark.png&demo-url=https%3A%2F%2Fportfolio-template.nuxt.dev%2F&demo-title=Nuxt%20Portfolio%20Template&demo-description=A%20sleek%20portfolio%20template%20to%20showcase%20your%20work%2C%20skills%20and%20blog%20powered%20by%20Nuxt%20Content.)

## Setup

Silakan Install depedensi

```bash
pnpm install
```

## Development Server

Jalankan Server Development `http://localhost:3000`:

```bash
pnpm dev
```

or

```bash
npm run dev
```

## Production

Build untuk deployment

```bash
pnpm build
```

local preview production

```bash
pnpm preview
```

Cek Status [deployment documentation](https://nuxt.com/docs/getting-started/deployment). untuk info lebih lanjut.

## Cara Mengganti Content

### 1. Tulisan text dan identitas

anda tidak peru repot mencari file untuk merubah `nama` `title` `description` `social media` dan lainya. beberapa konenten telah kami simpan di folder content sehingga ini akan mempermudah anda

Sebagai contoh semua content halaman utama berada di folder `content/` dan di dalam file `index.yml`

Contoh Isi Halamanya


```yaml
seo:
  title: "Kaka Viangi - Fotografer & Web Developer"
  description: "Selamat Datang! Saya Kaka Viangi, seorang Fotografer & Web Developer yang berbasis di Bandung. Saya berspesialisasi dalam menciptakan pengalaman digital yang berpusat pada pengguna yang indah dan fungsional."
title: "Hey, Aku Destkaa"
description: "Aku adalah seorang Fotografer & Web Developer yang berbasis di Bandung, Indonesia. Saya ahli dalam membangun website dan antarmuka siap pakai dengan cepat."
hero:
  links:
    - label: "Buat Janji Temu"
      to: https://cal.com/destkaa
      color: "neutral"
  images:
    - src: /gallery/image.png
      alt: Gambar Galeri 1
    - src: /gallery/image2.png
      alt: Gambar Galeri 2
    - src: /gallery/image3.png
      alt: Gambar Galeri 3
    - src: /gallery/image4.png
      alt: Gambar Galeri 4
    - src: /gallery/image5.png
      alt: Gambar Galeri 5
    - src: /gallery/image6.png
      alt: Gambar Galeri 6
    - src: /gallery/image7.png
      alt: Gambar Galeri 7
    - src: /gallery/image8.png
      alt: Gambar Galeri 8
    - src: /gallery/image1.png
      alt: Gambar Galeri 9
about:
  title: "Tentang Saya"
  description: |
    Sebagai seorang fotografer dan pengembang web dengan pengalaman bertahun-tahun, saya menggabungkan kreativitas visual dengan keahlian teknis untuk menghadirkan pengalaman digital yang luar biasa.
    Pendekatan saya memadukan strategi kreatif dengan keahlian teknis, mengubah konsep menjadi produk digital yang fungsional dan bermakna yang mengintegrasikan desain dan teknologi secara mulus.
experience:
  title: Pengalaman Kerja
  items:
    - position: "Contibutor di"
      date: "2026 - Sekarang"
      company:
        name: Nuxt.js
        logo: "i-simple-icons-nuxtdotjs"
        url: "https://nuxt.com"
        color: "#00DC82"
    - position: "Jurnalis di"
      date: "2024 - 2025"
      company:
        name: "Fts Studio"
        logo: "i-simple-icons-raycast"
        url: "#"
        color: "#5E6AD2"
testimonials:
  - quote: "Lumayan , Gambar nya bagus  dan beberapa karya nya bermakna tanpa harus berlebihan."
    author:
      name: 'Davin Gahisan'
      description: 'C founder NLFTs'
      avatar:
        src: 'https://avatars.githubusercontent.com/u/228851591?v=4'
        srcset: 'https://avatars.githubusercontent.com/u/228851591?v=4 2x'
blog:
  title: "Artikel Terbaru"
  description: "Beberapa pemikiran terbaru saya"
faq:
  title: Pertanyaan yang Sering Diajukan
  description: Jawaban atas pertanyaan umum tentang proses dan layanan saya.
  categories:
    - title: Layanan & Proses
      questions:
        - label: Layanan apa saja yang Anda tawarkan?
          content: |
            Saya berspesialisasi dalam fotografi dan pengembangan web. Ini mencakup fotografi produk, fotografi portrait, pembuatan website responsif, aplikasi web (terutama dengan Vue.js/Nuxt.js), dan pengembangan sistem desain. Tujuan saya adalah menciptakan pengalaman digital yang mulus dari konsep hingga peluncuran.
        - label: Bagaimana proses kerja Anda?
          content: |
            Proses saya bersifat kolaboratif dan iteratif, biasanya melibatkan tahap Penemuan & Riset, Ideasi & Prototyping, Pengujian, Desain Visual, dan kolaborasi erat dengan tim pengembangan selama implementasi. Saya menyesuaikan proses berdasarkan kebutuhan proyek, selalu fokus pada solusi yang berpusat pada pengguna.
        - label: Apakah Anda bekerja dengan startup?
          content: |
            Tentu saja! Saya senang bekerja dengan startup untuk membantu membentuk visi produk mereka dan menciptakan antarmuka yang ramah pengguna dari awal. Saya dapat menyesuaikan proses saya agar sesuai dengan lingkungan startup yang serba cepat.
    - title: Harga & Jadwal
      questions:
        - label: Berapa biaya proyek biasanya?
          content: |
            Biaya proyek bervariasi tergantung cakupan, kompleksitas, fitur, dan jadwal. Untuk proyek fotografi dan pengembangan web yang komprehensif, engagement saya biasanya dimulai dari Rp 5.000.000, dengan proyek rata-rata berkisar antara Rp 8.000.000 hingga Rp 25.000.000. Untuk konsultasi atau tugas desain tertentu, tarif harian saya adalah Rp 1.500.000.
        - label: Bagaimana ketentuan pembayaran Anda?
          content: |
            Saya umumnya membutuhkan DP 40% untuk menjadwalkan proyek dan memulai pekerjaan, dengan sisa 60% jatuh tempo setelah proyek selesai dan diserahkan. Saya menerima pembayaran melalui transfer bank.
        - label: Berapa lama proyek biasanya selesai?
          content: |
            Jadwal sangat bergantung pada cakupan dan kompleksitas proyek. Proyek kecil mungkin membutuhkan 3-4 minggu, sementara proyek yang lebih besar dan rumit bisa memakan waktu 2 hingga 4 bulan. Saya selalu memberikan estimasi jadwal terperinci setelah fase penemuan awal.
        - label: Apakah Anda menawarkan retainer atau dukungan berkelanjutan?
          content: |
            Ya, untuk klien yang membutuhkan dukungan desain berkelanjutan, pengembangan fitur, atau pemeliharaan, saya menawarkan opsi retainer bulanan yang disesuaikan dengan kebutuhan spesifik. Mari diskusikan jika ini sesuatu yang Anda minati.
    - title: Tentang Saya
      questions:
        - label: Apa yang paling Anda nikmati dari pekerjaan Anda?
          content: |
            Saya menyukai tantangan dalam memecahkan masalah kompleks melalui desain dan teknologi. Sangat memuaskan melihat orang berinteraksi dengan sesuatu yang saya buat dan merasa bahwa itu benar-benar berguna dan mudah digunakan. Menjembatani kebutuhan pengguna dan kemungkinan teknis adalah yang benar-benar membuat saya bersemangat.
        - label: Apa hobi Anda di luar pekerjaan?
          content: |
            Ketika tidak sedang mendesain atau coding, saya menikmati berkeliling Bandung, mencoba kafe-kafe baru, dan memotret pemandangan alam. Saya juga suka berkontribusi pada proyek open-source dan bereksperimen dengan teknologi baru.

```


dan anda tinggal merubah halaman lainya seperti 

- Halaman about `content/about.yml`
- Halaman Teman `content/friends.yml`
- Halaman project `content/project.yml`
- Halaman blog `content/blog.yml`

dan lainya... 


### 2. Impovisasi Desain Website

Anda tidak perlu kawatir soal desain website yang tidak bisa di ubah, semua anatar muka telah ada di dalam folder app untuk anda customasi lebih lanjut dengan bebeas seperti menambahkan halaman atau sekedar redesign ulang halaman yang sudah ada. tanpa perlu mengkahawatikan masalah soal desain 

Berikut adalah beberapa contoh halaman yang ada di dalam folder app:

- `app/pages/index.vue` - Halaman utama
- `app/pages/about.vue` - Halaman tentang
- `app/pages/friends.vue` - Halaman teman
- `app/pages/project.vue` - Halaman project
- `app/pages/blog.vue` - Halaman blog
- `app/pages/contact.vue` - Halaman kontak

dan sisanya adalah componnents kecil yang bisa anda sesuaikan dengan bebas


### Assets

#### Blog 

jika anda ingin menulis artikel anda bisa langsung menulisnya di dalam folder `content/blog` dengan format markdown anda bisa menggunakan format yang telah di berikan oleh nuxt ui/ nuxt content agar tampilan nya menarik dan sesuai dengan apa yang anda mau. jika anda tidak tau apa saja format markdown yang di berikan oleh nuxt anda bisa membaca dokumentasinya di [sini](https://content.nuxt.com/docs/getting-started)

#### Image

jika anda ingin menambahkan gambar pada website anda anda bisa menambahkannya di dalam folder `public` atau `assets` anda bisa menggunakan format yang telah di berikan oleh nuxt ui/ nuxt content agar tampilan nya menarik dan sesuai dengan apa yang anda mau. jika anda tidak tau apa saja format gambar anda bisa menggunakan format yang telah di berikan oleh nuxt ui/ nuxt content atau anda bisa mencari di google tentang format gambar.

#### Video

jika anda ingin menambahkan video pada website anda anda bisa menambahkannya di dalam folder `public` atau `assets` anda bisa menggunakan format yang telah di berikan oleh nuxt ui/ nuxt content agar tampilan nya menarik dan sesuai dengan apa yang anda mau. jika anda tidak tau apa saja format video anda bisa menggunakan format yang telah di berikan oleh nuxt ui/ nuxt content atau anda bisa mencari di google tentang format video.

#### Audio

jika anda ingin menambahkan audio pada website anda anda bisa menambahkannya di dalam folder `public` atau `assets` anda bisa menggunakan format yang telah di berikan oleh nuxt ui/ nuxt content agar tampilan nya menarik dan sesuai dengan apa yang anda mau. jika anda tidak tau apa saja format audio anda bisa menggunakan format yang telah di berikan oleh nuxt ui/ nuxt content atau anda bisa mencari di google tentang format audio.

#### Font

jika anda ingin menambahkan font pada website anda anda bisa menambahkannya di dalam folder `public` atau `assets` anda bisa menggunakan format yang telah di berikan oleh nuxt ui/ nuxt content agar tampilan nya menarik dan sesuai dengan apa yang anda mau. jika anda tidak tau apa saja format font anda bisa menggunakan format yang telah di berikan oleh nuxt ui/ nuxt content atau anda bisa mencari di google tentang format font.

#### Icon

jika anda ingin menambahkan icon pada website anda anda bisa menambahkannya di dalam folder `public` atau `assets` anda bisa menggunakan format yang telah di berikan oleh nuxt ui/ nuxt content agar tampilan nya menarik dan sesuai dengan apa yang anda mau. jika anda tidak tau apa saja format icon anda bisa menggunakan format yang telah di berikan oleh nuxt ui/ nuxt content atau anda bisa mencari di google tentang format icon.

#### Other

jika anda ingin menambahkan file lain pada website anda anda bisa menambahkannya di dalam folder `public` atau `assets` anda bisa menggunakan format yang telah di berikan oleh nuxt ui/ nuxt content agar tampilan nya menarik dan sesuai dengan apa yang anda mau. jika anda tidak tau apa saja format file anda bisa menggunakan format yang telah di berikan oleh nuxt ui/ nuxt content atau anda bisa mencari di google tentang format file.







