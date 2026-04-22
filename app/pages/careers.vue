<script setup lang="ts">
useSeoMeta({
  title: 'Karir - Program Developer NLFTs',
  ogTitle: 'Bergabung dengan Tim Kami - Program Developer NLFTs',
  description: 'Bergabunglah dengan tim NLFTs dan bantu membangun masa depan alat developer dan framework. Jelajahi peluang karir di organisasi kami yang berkembang.',
  ogDescription: 'Bergabunglah dengan tim NLFTs dan bantu membangun masa depan alat developer dan framework. Jelajahi peluang karir di organisasi kami yang berkembang.'
})
</script>

<template>
  <UMain class="bg-black text-white py-16">
    <UContainer>
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <section class="text-center mb-16">
          <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Bergabung dengan Tim Kami
          </h1>
          <p class="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Bantu kami membangun masa depan alat developer dan framework. Kami mencari developer bersemangat yang ingin membuat dampak.
          </p>
        </section>

        <!-- Current Openings -->
        <section class="mb-16">
          <h2 class="text-2xl font-bold mb-8">Lowongan Saat Ini</h2>
          <div class="space-y-6">
            <div class="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="text-xl font-semibold mb-2">Developer Frontend Senior</h3>
                  <p class="text-neutral-400">Remote • Full-time</p>
                </div>
                <span class="text-sm bg-green-500/10 text-green-400 px-3 py-1 rounded-full">Buka</span>
              </div>
              <p class="text-neutral-300 mb-4">
                Pimpin pengembangan komponen framework inti kami dan alat developer. Pengalaman dengan Vue.js, Nuxt.js, dan TypeScript diperlukan.
              </p>
              <UButton label="Lamar Sekarang" color="white" size="sm" to="/contact" />
            </div>

            <div class="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="text-xl font-semibold mb-2">Insinyur Developer Relations</h3>
                  <p class="text-neutral-400">Remote • Full-time</p>
                </div>
                <span class="text-sm bg-green-500/10 text-green-400 px-3 py-1 rounded-full">Buka</span>
              </div>
              <p class="text-neutral-300 mb-4">
                Bangun hubungan dengan komunitas developer kami, buat konten teknis, dan wakili NLFTs di konferensi dan acara.
              </p>
              <UButton label="Lamar Sekarang" color="white" size="sm" to="/contact" />
            </div>

            <div class="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="text-xl font-semibold mb-2">Penulis Teknis</h3>
                  <p class="text-neutral-400">Remote • Part-time</p>
                </div>
                <span class="text-sm bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full">Segera</span>
              </div>
              <p class="text-neutral-300 mb-4">
                Buat dokumentasi komprehensif, tutorial, dan panduan untuk alat developer dan framework kami.
              </p>
              <UButton label="Segera Hadir" color="neutral" size="sm" disabled />
            </div>
          </div>
        </section>

        <!-- Why Join Us -->
        <section class="mb-16">
          <h2 class="text-2xl font-bold mb-8">Mengapa Bergabung dengan NLFTs?</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Budaya Remote-First</h3>
              <p class="text-neutral-400">Bekerja dari mana saja di dunia dengan jam kerja fleksibel dan fokus pada hasil, bukan lokasi.</p>
            </div>
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Dampak Nyata</h3>
              <p class="text-neutral-400">Pekerjaan Anda akan digunakan oleh ribuan developer di seluruh dunia setiap hari.</p>
            </div>
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Pembelajaran Berkelanjutan</h3>
              <p class="text-neutral-400">Akses ke konferensi, kursus, dan anggaran pembelajaran untuk pengembangan profesional Anda.</p>
            </div>
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Kompensasi Kompetitif</h3>
              <p class="text-neutral-400">Gaji yang kompetitif, tunjangan kesehatan, dan paket ekuitas untuk semua karyawan.</p>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section class="text-center bg-neutral-900 rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4">Siap untuk Memulai?</h2>
          <p class="text-neutral-400 mb-6">
            Jika Anda tidak melihat posisi yang sempurna, kami masih ingin mendengar dari Anda. Kirimkan resume dan cerita Anda.
          </p>
          <UButton label="Hubungi Kami" color="white" size="lg" to="/contact" />
        </section>
      </div>
    </UContainer>
  </UMain>
</template>
