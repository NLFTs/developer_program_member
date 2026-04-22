<script setup lang="ts">
useSeoMeta({
  title: 'Komunitas DevLovers - Program Developer NLFTs',
  ogTitle: 'Komunitas DevLovers - Program Developer NLFTs',
  description: 'Bergabunglah dengan komunitas DevLovers - sekelompok developer bersemangat yang membangun masa depan dengan alat dan framework NLFTs.',
  ogDescription: 'Bergabunglah dengan komunitas DevLovers - sekelompok developer bersemangat yang membangun masa depan dengan alat dan framework NLFTs.'
})
</script>

<template>
  <UMain class="bg-black text-white py-16">
    <UContainer>
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <section class="text-center mb-16">
          <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Komunitas DevLovers
          </h1>
          <p class="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Komunitas developer bersemangat yang mencintai membangun hal-hal menakjubkan dengan alat dan framework modern.
          </p>
        </section>

        <!-- Community Stats -->
        <section class="mb-16">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-3xl font-bold text-white mb-2">2,500+</div>
              <div class="text-sm text-neutral-400">Anggota Aktif</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-white mb-2">150+</div>
              <div class="text-sm text-neutral-400">Proyek Dibangun</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-white mb-2">50+</div>
              <div class="text-sm text-neutral-400">Negara</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-white mb-2">24/7</div>
              <div class="text-sm text-neutral-400">Dukungan</div>
            </div>
          </div>
        </section>

        <!-- What We Do -->
        <section class="mb-16">
          <h2 class="text-2xl font-bold mb-8">Apa yang Kami Lakukan</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4">Pertemuan Mingguan</h3>
              <p class="text-neutral-400">
                Bergabunglah dengan pertemuan virtual mingguan kami di mana kami membahas tren terbaru dalam pengembangan web, berbagi proyek, dan belajar satu sama lain.
              </p>
            </div>
            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4">Review Kode</h3>
              <p class="text-neutral-400">
                Dapatkan umpan balik tentang kode Anda dari developer berpengalaman dan bantu orang lain meningkatkan keterampilan mereka melalui review kolaboratif.
              </p>
            </div>
            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4">Proyek Open Source</h3>
              <p class="text-neutral-400">
                Berkontribusi pada proyek open source yang didorong komunitas dan bangun alat yang menguntungkan seluruh ekosistem developer.
              </p>
            </div>
            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4">Sumber Daya Pembelajaran</h3>
              <p class="text-neutral-400">
                Akses materi pembelajaran yang dikurasi, tutorial, dan workshop yang dirancang untuk membantu Anda berkembang sebagai developer.
              </p>
            </div>
          </div>
        </section>

        <!-- Join Community -->
        <section class="text-center bg-neutral-900 rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4">Siap untuk Bergabung?</h2>
          <p class="text-neutral-400 mb-6">
            Bergabunglah dengan ribuan developer yang membangun masa depan bersama NLFTs.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <UButton label="Bergabung Discord" icon="i-simple-icons-discord" color="primary" to="https://discord.gg/nlfts" target="_blank" size="lg" />
            <UButton label="Pelajari Lebih Lanjut" color="neutral" to="/about" size="lg" />
          </div>
        </section>
      </div>
    </UContainer>
  </UMain>
</template>
