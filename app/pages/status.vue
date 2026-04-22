<script setup lang="ts">
useSeoMeta({
  title: 'Status Sistem - Program Developer NLFTs',
  ogTitle: 'Status Sistem - Program Developer NLFTs',
  description: 'Status real-time layanan NLFTs dan infrastruktur. Periksa uptime saat ini dan ketersediaan layanan.',
  ogDescription: 'Status real-time layanan NLFTs dan infrastruktur. Periksa uptime saat ini dan ketersediaan layanan.'
})

// Mock status data - in real app this would come from monitoring service
const services = [
  { name: 'Website', status: 'operational', uptime: '99.9%' },
  { name: 'API', status: 'operational', uptime: '99.8%' },
  { name: 'Dokumentasi', status: 'operational', uptime: '99.9%' },
  { name: 'CDN', status: 'operational', uptime: '99.7%' },
  { name: 'Database', status: 'operational', uptime: '99.9%' },
  { name: 'Autentikasi', status: 'operational', uptime: '99.8%' }
]

const incidents = [
  {
    date: '2024-12-15',
    title: 'Perlambatan API singkat diselesaikan',
    status: 'resolved',
    description: 'Waktu respons API meningkat selama 15 menit karena peningkatan lalu lintas. Masalah diselesaikan dengan penskalaan infrastruktur.'
  },
  {
    date: '2024-12-10',
    title: 'Pemeliharaan terjadwal selesai',
    status: 'resolved',
    description: 'Pemeliharaan database yang direncanakan selesai dengan sukses tanpa gangguan layanan.'
  }
]
</script>

<template>
  <UMain class="bg-black text-white py-16">
    <UContainer>
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <section class="mb-16">
          <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Status Sistem
          </h1>
          <p class="text-xl text-neutral-400 max-w-2xl leading-relaxed">
            Status real-time semua layanan NLFTs dan komponen infrastruktur.
          </p>
        </section>

        <!-- Overall Status -->
        <section class="mb-12">
          <div class="bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center">
            <div class="flex items-center justify-center gap-3 mb-2">
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <h2 class="text-xl font-semibold text-green-400">Semua Sistem Operasional</h2>
            </div>
            <p class="text-neutral-400">Semua layanan berjalan normal</p>
          </div>
        </section>

        <!-- Services Status -->
        <section class="mb-16">
          <h2 class="text-2xl font-bold mb-8">Status Layanan</h2>
          <div class="space-y-4">
            <div 
              v-for="service in services" 
              :key="service.name"
              class="flex items-center justify-between p-4 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
            >
              <div class="flex items-center gap-4">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <h3 class="font-semibold">{{ service.name }}</h3>
                  <p class="text-sm text-neutral-400">{{ service.uptime }} uptime (30 hari)</p>
                </div>
              </div>
              <span class="text-sm text-green-400 font-medium">Operasional</span>
            </div>
          </div>
        </section>

        <!-- Incidents -->
        <section>
          <h2 class="text-2xl font-bold mb-8">Insiden Terbaru</h2>
          <div class="space-y-4">
            <div 
              v-for="incident in incidents" 
              :key="incident.date"
              class="border border-neutral-800 rounded-lg p-6"
            >
              <div class="flex items-start justify-between mb-3">
                <div>
                  <h3 class="font-semibold">{{ incident.title }}</h3>
                  <p class="text-sm text-neutral-400 mt-1">{{ incident.date }}</p>
                </div>
                <span class="text-xs bg-green-500/10 text-green-400 px-3 py-1 rounded-full">{{ incident.status }}</span>
              </div>
              <p class="text-neutral-300 text-sm">{{ incident.description }}</p>
            </div>
          </div>
        </section>
      </div>
    </UContainer>
  </UMain>
</template>
