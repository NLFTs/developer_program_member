<script setup lang="ts">
useSeoMeta({
  title: 'Solusi Enterprise - Program Developer NLFTs',
  ogTitle: 'Solusi Enterprise - Program Developer NLFTs',
  description: 'Skalakan pengembangan enterprise Anda dengan alat profesional NLFTs, dukungan khusus, dan layanan konsultasi.',
  ogDescription: 'Skalakan pengembangan enterprise Anda dengan alat profesional NLFTs, dukungan khusus, dan layanan konsultasi.'
})
</script>

<template>
  <UMain class="bg-black text-white py-16">
    <UContainer>
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <section class="text-center mb-16">
          <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Solusi Enterprise
          </h1>
          <p class="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Skalakan pengembangan Anda dengan alat tingkat enterprise, dukungan khusus, dan layanan konsultasi profesional.
          </p>
        </section>

        <!-- Features -->
        <section class="mb-16">
          <h2 class="text-2xl font-bold mb-8">Fitur Enterprise</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4">Dukungan Prioritas</h3>
              <p class="text-neutral-400 mb-4">
                Dapatkan dukungan khusus dengan waktu respons terjamin dan akses langsung ke tim engineering kami.
              </p>
              <ul class="text-sm text-neutral-300 space-y-2">
                <li>• Dukungan teknis 24/7</li>
                <li>• Account manager khusus</li>
                <li>• Perbaikan bug prioritas</li>
              </ul>
            </div>

            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4">Pengembangan Kustom</h3>
              <p class="text-neutral-400 mb-4">
                Solusi yang disesuaikan dibangun khusus untuk kebutuhan dan persyaratan enterprise Anda.
              </p>
              <ul class="text-sm text-neutral-300 space-y-2">
                <li>• Modul dan plugin kustom</li>
                <li>• Layanan integrasi</li>
                <li>• Optimasi performa</li>
              </ul>
            </div>

            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4">Pelatihan & Konsultasi</h3>
              <p class="text-neutral-400 mb-4">
                Panduan ahli untuk membantu tim Anda mengadopsi dan menguasai alat NLFTs secara efektif.
              </p>
              <ul class="text-sm text-neutral-300 space-y-2">
                <li>• Sesi pelatihan on-site</li>
                <li>• Konsultasi arsitektur</li>
                <li>• Workshop best practices</li>
              </ul>
            </div>

            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4">Keamanan & Kepatuhan</h3>
              <p class="text-neutral-400 mb-4">
                Fitur keamanan tingkat enterprise dan dukungan kepatuhan untuk industri yang diatur.
              </p>
              <ul class="text-sm text-neutral-300 space-y-2">
                <li>• Kepatuhan SOC 2</li>
                <li>• Audit keamanan</li>
                <li>• Alat kepatuhan GDPR</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Pricing -->
        <section class="mb-16">
          <h2 class="text-2xl font-bold mb-8">Harga Enterprise</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-2">Pemula</h3>
              <div class="text-3xl font-bold mb-4">$2,500<span class="text-lg text-neutral-400">/bulan</span></div>
              <ul class="text-sm text-neutral-300 space-y-2 mb-6">
                <li>• Hingga 10 developer</li>
                <li>• Dukungan email</li>
                <li>• Pelatihan dasar</li>
                <li>• SLA standar</li>
              </ul>
              <UButton label="Hubungi Penjualan" color="neutral" class="w-full" />
            </div>

            <div class="border border-blue-500 rounded-lg p-6 relative">
              <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Populer
              </div>
              <h3 class="text-lg font-semibold mb-2">Profesional</h3>
              <div class="text-3xl font-bold mb-4">$7,500<span class="text-lg text-neutral-400">/bulan</span></div>
              <ul class="text-sm text-neutral-300 space-y-2 mb-6">
                <li>• Hingga 50 developer</li>
                <li>• Dukungan prioritas 24/7</li>
                <li>• Pelatihan komprehensif</li>
                <li>• SLA bisnis</li>
              </ul>
              <UButton label="Hubungi Penjualan" color="white" class="w-full" />
            </div>

            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-2">Enterprise</h3>
              <div class="text-3xl font-bold mb-4">Kustom<span class="text-lg text-neutral-400"></span></div>
              <ul class="text-sm text-neutral-300 space-y-2 mb-6">
                <li>• Developer unlimited</li>
                <li>• Dukungan dedicated</li>
                <li>• Pengembangan kustom</li>
                <li>• SLA enterprise</li>
              </ul>
              <UButton label="Hubungi Penjualan" color="neutral" class="w-full" />
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section class="text-center bg-neutral-900 rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4">Siap untuk Skalakan?</h2>
          <p class="text-neutral-400 mb-6">
            Hubungi tim penjualan kami untuk mendiskusikan kebutuhan enterprise Anda.
          </p>
          <UButton label="Hubungi Kami" color="white" size="lg" to="/contact" />
        </section>
      </div>
    </UContainer>
  </UMain>
</template>
