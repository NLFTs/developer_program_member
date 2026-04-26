<script setup lang="ts">
useSeoMeta({
  title: 'About NLFTs - Developer Program',
  ogTitle: 'About NLFTs - Developer Program',
  description: 'Learn about NLFTs mission to empower developers worldwide with innovative tools, frameworks, and community-driven solutions.',
  ogDescription: 'Learn about NLFTs mission to empower developers worldwide with innovative tools, frameworks, and community-driven solutions.'
})

const stats = [
  { label: 'Developer Aktif', value: '52+', note: 'Bandung' },
  { label: 'Developer Aktif', value: '12+', note: 'Yogyakarta' },
  { label: 'Proyek', value: '5', note: 'Sedang di kembangkan' },
  { label: 'Proyek Open Source', value: '11+', note: 'Dalam Perencanaan' }
]

const team = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    bio: 'Former senior engineer at major tech companies, passionate about developer experience.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    note: '(Example)'
  },
  {
    name: 'Sarah Kim',
    role: 'CTO',
    bio: 'Full-stack developer with expertise in modern web technologies and architecture.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    note: '(Example)'
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of Community',
    bio: 'Developer advocate focused on building inclusive and supportive developer communities.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    note: '(Example)'
  }
]

const values = [
  {
    title: 'Open Source First',
    description: 'We believe in the power of open source to drive innovation and create better tools for everyone.',
    icon: 'i-lucide-heart'
  },
  {
    title: 'Developer Experience',
    description: 'Every tool we build is designed with developer happiness and productivity in mind.',
    icon: 'i-lucide-smile'
  },
  {
    title: 'Community Driven',
    description: 'Our community shapes our roadmap and helps us build tools that developers actually need.',
    icon: 'i-lucide-users'
  },
  {
    title: 'Quality & Performance',
    description: 'We maintain high standards for code quality, performance, and reliability in everything we ship.',
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
            Tentang NLFTs Ltd.
          </h1>
          <p class="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Berawal dari visi sederhana : menghadirkan platform lokal Indonesia yang tidak bergantung pada teknologi luar. Kami percaya, langkah kecil yang konsisten bisa membentuk ekosistem digital yang lebih kuat dan berkelanjutan.
          </p>
        </section>

        <!-- Stats -->
        <section class="mb-16">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div
              v-for="stat in stats"
              :key="stat.label"
            >
              <div class="text-3xl font-bold text-white mb-2">
                {{ stat.value }}
              </div>
              <div class="text-sm text-neutral-400">
                {{ stat.label }}
              </div>
              <div class="text-xs text-neutral-500 mt-1">
                {{ stat.note }}
              </div>
            </div>
          </div>
        </section>

        <!-- Mission -->
        <section class="mb-16">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold mb-6">
                Our Mission
              </h2>
              <p class="text-neutral-300 mb-4 leading-relaxed">
                NLFTs merupakan startup teknologi mandiri Indonesia yang berfokus pada pembangunan ekosistem digital yang berdiri sendiri, tanpa ketergantungan pada teknologi luar.
              </p>
              <p class="text-neutral-300 mb-4 leading-relaxed">
                Kami bukan sekadar membangun tools, tetapi juga membangun komunitas. Sebuah ruang di mana para developer dapat belajar, berbagi, dan bertumbuh bersama sambil mendorong batasan kemungkinan dalam pengembangan web.
              </p>
              <p class="text-neutral-300 leading-relaxed">
                Mulai dari kerangka kerja terbuka hingga program pengembang kami, semua yang kami lakukan dirancang untuk membuat pengalaman pengembang menjadi lebih produktif dan menyenangkan.
              </p>
            </div>
            <div class="bg-neutral-900 rounded-lg p-8">
              <h3 class="text-xl font-semibold mb-4">
                What We Do
              </h3>
              <ul class="space-y-3 text-neutral-300">
                <li class="flex items-center gap-3">
                  <UIcon
                    name="i-lucide-check"
                    class="w-5 h-5 text-green-400"
                  />
                  Mengembangkan alat sumber terbuka untuk developer
                </li>
                <li class="flex items-center gap-3">
                  <UIcon
                    name="i-lucide-check"
                    class="w-5 h-5 text-green-400"
                  />
                  Membangun dan mendukung komunitas developer
                </li>
                <li class="flex items-center gap-3">
                  <UIcon
                    name="i-lucide-check"
                    class="w-5 h-5 text-green-400"
                  />
                  Menyediakan sumber belajar yang mudah diakses
                </li>
                <li class="flex items-center gap-3">
                  <UIcon
                    name="i-lucide-check"
                    class="w-5 h-5 text-green-400"
                  />
                  Mendukung dan mengeksplorasi teknologi baru
                </li>
                <li class="flex items-center gap-3">
                  <UIcon
                    name="i-lucide-check"
                    class="w-5 h-5 text-green-400"
                  />
                  Menghubungkan para developer di Indonesia
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section class="text-center bg-neutral-900 rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4">
            Siap Menjadi Bagian dari Kami?
          </h2>
          <p class="text-neutral-400 mb-6">
            Gabunglah dengan komunitas kami dan bantu membentuk masa depan teknologi Indonesia.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <UButton
              label="Bergabung dengan Komunitas"
              color="white"
              size="lg"
              to="/devlovers"
            />
            <UButton
              label="berkontribusi"
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
