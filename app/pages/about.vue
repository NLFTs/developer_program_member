<script setup lang="ts">
useSeoMeta({
  title: 'Tentang NLFTs - Program Developer',
  ogTitle: 'Tentang NLFTs - Program Developer',
  description: 'Pelajari tentang misi NLFTs untuk memberdayakan developer di seluruh dunia dengan alat inovatif, framework, dan solusi berbasis komunitas.',
  ogDescription: 'Pelajari tentang misi NLFTs untuk memberdayakan developer di seluruh dunia dengan alat inovatif, framework, dan solusi berbasis komunitas.'
})

const stats = [
  { label: 'Developer Aktif', value: '10,000+', note: '(Contoh)' },
  { label: 'Proyek Open Source', value: '50+', note: '(Contoh)' },
  { label: 'Negara yang Dijangkau', value: '75+', note: '(Contoh)' },
  { label: 'GitHub Stars', value: '25,000+', note: '(Contoh)' }
]

const team = [
  {
    name: 'Alex Chen',
    role: 'Pendiri & CEO',
    bio: 'Mantan insinyur senior di perusahaan teknologi besar, bersemangat tentang pengalaman developer.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    note: '(Contoh)'
  },
  {
    name: 'Sarah Kim',
    role: 'CTO',
    bio: 'Developer full-stack dengan keahlian dalam teknologi web modern dan arsitektur.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    note: '(Contoh)'
  },
  {
    name: 'Marcus Johnson',
    role: 'Kepala Komunitas',
    bio: 'Advokat developer yang fokus membangun komunitas developer yang inklusif dan mendukung.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    note: '(Contoh)'
  }
]

const values = [
  {
    title: 'Open Source Pertama',
    description: 'Kami percaya pada kekuatan open source untuk mendorong inovasi dan menciptakan alat yang lebih baik untuk semua orang.',
    icon: 'i-lucide-heart'
  },
  {
    title: 'Pengalaman Developer',
    description: 'Setiap alat yang kami bangun dirancang dengan kebahagiaan dan produktivitas developer dalam pikiran.',
    icon: 'i-lucide-smile'
  },
  {
    title: 'Berbasis Komunitas',
    description: 'Komunitas kami membentuk roadmap kami dan membantu kami membangun alat yang benar-benar dibutuhkan developer.',
    icon: 'i-lucide-users'
  },
  {
    title: 'Kualitas & Performa',
    description: 'Kami mempertahankan standar tinggi untuk kualitas kode, performa, dan keandalan dalam semua yang kami luncurkan.',
    icon: 'i-lucide-zap'
  }
]
</script>

<template>
  <UMain class="bg-black text-white py-16">
    <UContainer>
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <section class="text-center mb-16">
          <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Tentang NLFTs
          </h1>
          <p class="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Kami memiliki misi untuk memberdayakan developer di seluruh dunia dengan alat inovatif, framework, dan solusi berbasis komunitas yang membuat membangun software lebih menyenangkan dan efisien.
          </p>
        </section>

        <!-- Stats -->
        <section class="mb-16">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div v-for="stat in stats" :key="stat.label">
              <div class="text-3xl font-bold text-white mb-2">{{ stat.value }}</div>
              <div class="text-sm text-neutral-400">{{ stat.label }}</div>
              <div class="text-xs text-neutral-500 mt-1">{{ stat.note }}</div>
            </div>
          </div>
        </section>

        <!-- Mission -->
        <section class="mb-16">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold mb-6">Misi Kami</h2>
              <p class="text-neutral-300 mb-4 leading-relaxed">
                Di NLFTs, kami percaya bahwa software yang hebat dimulai dengan alat developer yang hebat. Misi kami adalah menciptakan ekosistem alat modern, efisien, dan menyenangkan yang membantu developer membangun aplikasi yang lebih baik lebih cepat.
              </p>
              <p class="text-neutral-300 mb-4 leading-relaxed">
                Kami tidak hanya membangun alat – kami membangun komunitas. Tempat di mana developer dapat belajar, berbagi, dan berkembang bersama sambil mendorong batas-batas dari apa yang mungkin dalam pengembangan web.
              </p>
              <p class="text-neutral-300 leading-relaxed">
                Dari framework open-source kami hingga program developer kami, semua yang kami lakukan dirancang untuk membuat pengalaman developer lebih produktif dan menyenangkan.
              </p>
            </div>
            <div class="bg-neutral-900 rounded-lg p-8">
              <h3 class="text-xl font-semibold mb-4">Apa yang Kami Lakukan</h3>
              <ul class="space-y-3 text-neutral-300">
                <li class="flex items-center gap-3">
                  <UIcon name="i-lucide-check" class="w-5 h-5 text-green-400" />
                  Membangun alat developer open-source
                </li>
                <li class="flex items-center gap-3">
                  <UIcon name="i-lucide-check" class="w-5 h-5 text-green-400" />
                  Memupuk komunitas developer
                </li>
                <li class="flex items-center gap-3">
                  <UIcon name="i-lucide-check" class="w-5 h-5 text-green-400" />
                  Menyediakan sumber daya pendidikan
                </li>
                <li class="flex items-center gap-3">
                  <UIcon name="i-lucide-check" class="w-5 h-5 text-green-400" />
                  Mendukung teknologi yang berkembang
                </li>
                <li class="flex items-center gap-3">
                  <UIcon name="i-lucide-check" class="w-5 h-5 text-green-400" />
                  Menghubungkan developer secara global
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Values -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-center mb-12">Nilai-Nilai Kami</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div v-for="value in values" :key="value.title" class="border border-neutral-800 rounded-lg p-6">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <UIcon :name="value.icon" class="w-5 h-5 text-blue-400" />
                </div>
                <h3 class="text-lg font-semibold">{{ value.title }}</h3>
              </div>
              <p class="text-neutral-400 leading-relaxed">{{ value.description }}</p>
            </div>
          </div>
        </section>

        <!-- Team -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-center mb-12">Bertemu Tim Kami</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div v-for="member in team" :key="member.name" class="text-center">
              <img 
                :src="member.avatar" 
                :alt="member.name"
                class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                loading="lazy"
              />
              <h3 class="text-lg font-semibold mb-1">{{ member.name }}</h3>
              <p class="text-blue-400 text-sm mb-3">{{ member.role }}</p>
              <p class="text-neutral-400 text-sm leading-relaxed">{{ member.bio }}</p>
              <p class="text-xs text-neutral-500 mt-2">{{ member.note }}</p>
            </div>
          </div>
        </section>

        <!-- History -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-center mb-12">Perjalanan Kami</h2>
          <div class="space-y-8">
            <div class="flex gap-6">
              <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                <span class="text-blue-400 font-bold">2022</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">Awal Mula</h3>
                <p class="text-neutral-400">
                  NLFTs didirikan dengan ide sederhana: membuat alat developer yang benar-benar ingin digunakan developer. Kami memulai dengan tim kecil dan mimpi besar.
                </p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                <span class="text-blue-400 font-bold">2023</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">Pertumbuhan Komunitas</h3>
                <p class="text-neutral-400">
                  Proyek open-source pertama kami mendapat perhatian, dan kami meluncurkan program developer untuk mendukung komunitas kontributor kami yang terus berkembang.
                </p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                <span class="text-blue-400 font-bold">2024</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">Dampak Global</h3>
                <p class="text-neutral-400">
                  Saat ini, alat NLFTs digunakan oleh ribuan developer di seluruh dunia, dan komunitas kami terus berkembang dan berinovasi bersama.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section class="text-center bg-neutral-900 rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4">Bergabunglah dengan Misi Kami</h2>
          <p class="text-neutral-400 mb-6">
            Siap menjadi bagian dari sesuatu yang lebih besar? Bergabunglah dengan komunitas kami dan bantu membentuk masa depan alat developer.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <UButton label="Bergabung dengan Komunitas" color="white" size="lg" to="/devlovers" />
            <UButton label="Berkontribusi" color="neutral" size="lg" external to="https://github.com/nlfts" />
          </div>
        </section>
      </div>
    </UContainer>
  </UMain>
</template>
