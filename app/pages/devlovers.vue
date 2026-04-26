<script setup lang="ts">
useSeoMeta({
  title: 'Komunitas DevLovers - Program Developer NLFTs',
  ogTitle: 'Komunitas DevLovers - Program Developer NLFTs',
  description: 'Bergabunglah dengan komunitas DevLovers - kelompok pengembang yang bersemangat membangun masa depan dengan alat dan kerangka kerja NLFTs.',
  ogDescription: 'Bergabunglah dengan komunitas DevLovers - kelompok pengembang yang bersemangat membangun masa depan dengan alat dan kerangka kerja NLFTs.'
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
            Komunitas pengembang yang bersemangat membangun hal-hal luar biasa dengan alat dan kerangka kerja modern.
          </p>
        </section>

        <!-- Community Stats -->
        <section class="mb-16">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-3xl font-bold text-white mb-2">
                2,500+
              </div>
              <div class="text-sm text-neutral-400">
                Anggota Aktif
              </div>
            </div>
            <div>
              <div class="text-3xl font-bold text-white mb-2">
                150+
              </div>
              <div class="text-sm text-neutral-400">
                Proyek Selesai
              </div>
            </div>
            <div>
              <div class="text-3xl font-bold text-white mb-2">
                50+
              </div>
              <div class="text-sm text-neutral-400">
                Negara
              </div>
            </div>
            <div>
              <div class="text-3xl font-bold text-white mb-2">
                24/7
              </div>
              <div class="text-sm text-neutral-400">
                Dukungan
              </div>
            </div>
          </div>
        </section>

        <!-- What We Do -->
        <section class="mb-16">
          <h2 class="text-2xl font-bold mb-8">
            Apa Yang Kami Lakukan
          </h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4">
                Pertemuan Mingguan
              </h3>
              <p class="text-neutral-400">
                Ikuti pertemuan virtual mingguan kami untuk membahas perkembangan web terbaru, berbagi proyek, dan saling belajar satu sama lain.
              </p>
            </div>
            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4">
                Tinjauan Kode
              </h3>
              <p class="text-neutral-400">
                Dapatkan masukan untuk kode Anda dari pengembang berpengalaman dan bantu orang lain meningkatkan keterampilan mereka melalui tinjauan kolaboratif.
              </p>
            </div>
            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4">
                Proyek Sumber Terbuka
              </h3>
              <p class="text-neutral-400">
                Berkontribusi pada proyek sumber terbuka komunitas dan bangun alat yang bermanfaat bagi seluruh ekosistem pengembang.
              </p>
            </div>
            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4">
                Sumber Belajar
              </h3>
              <p class="text-neutral-400">
                Akses materi pembelajaran, tutorial, dan workshop pilihan yang dirancang untuk membantu Anda berkembang sebagai pengembang.
              </p>
            </div>
          </div>
        </section>

        <!-- Join Community -->
        <section class="text-center bg-neutral-900 rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4">
            Siap Bergabung?
          </h2>
          <p class="text-neutral-400 mb-6">
            Terhubung dengan pengembang yang berpikiran sama dan mulai membangun hal-hal luar biasa bersama.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <UButton
              label="Gabung Discord"
              color="white"
              size="lg"
              external
              to="https://discord.gg/nlfts"
            />
            <UButton
              label="Ikuti di X"
              color="neutral"
              size="lg"
              external
              to="https://x.com/nlfts"
            />
            <UButton
              label="GitHub"
              color="neutral"
              size="lg"
              external
              to="https://github.com/nlfts"
            />
          </div>
        </section>
      </div>
    </UContainer>
  </UMain>
</template>
