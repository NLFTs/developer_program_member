<script setup lang="ts">
useSeoMeta({
  title: 'Starter Kit - Program Developer NLFTs',
  ogTitle: 'Starter Kit - Program Developer NLFTs',
  description: 'Template siap pakai dan starter kit untuk mempercepat pengembangan Anda dengan alat dan framework NLFTs.',
  ogDescription: 'Template siap pakai dan starter kit untuk mempercepat pengembangan Anda dengan alat dan framework NLFTs.'
})

const starterKits = [
  {
    name: 'Starter Nuxt SaaS',
    description: 'Template aplikasi SaaS lengkap dengan autentikasi, pembayaran, dan dashboard.',
    tech: ['Nuxt 3', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop',
    github: 'https://github.com/nlfts/nuxt-saas-starter',
    demo: 'https://nuxt-saas-starter.nlfts.dev'
  },
  {
    name: 'Perpustakaan Komponen Vue',
    description: 'Perpustakaan komponen modern dengan dokumentasi Storybook dan setup testing.',
    tech: ['Vue 3', 'Vite', 'Storybook', 'Vitest'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop',
    github: 'https://github.com/nlfts/vue-component-lib',
    demo: 'https://vue-components.nlfts.dev'
  },
  {
    name: 'Starter Backend API',
    description: 'API RESTful dengan autentikasi, database, dan konfigurasi deployment.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop',
    github: 'https://github.com/nlfts/api-starter',
    demo: 'https://api-starter.nlfts.dev'
  },
  {
    name: 'Template E-commerce',
    description: 'Solusi e-commerce lengkap dengan keranjang, checkout, dan panel admin.',
    tech: ['Nuxt 3', 'Stripe', 'Prisma', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
    github: 'https://github.com/nlfts/ecommerce-template',
    demo: 'https://ecommerce.nlfts.dev'
  },
  {
    name: 'Starter Blog & CMS',
    description: 'Sistem manajemen konten dengan dukungan markdown dan optimasi SEO.',
    tech: ['Nuxt 3', 'Nuxt Content', 'MDC', 'Algolia'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d3?w=400&h=200&fit=crop',
    github: 'https://github.com/nlfts/blog-cms-starter',
    demo: 'https://blog-cms.nlfts.dev'
  },
  {
    name: 'Template Dashboard',
    description: 'Dashboard admin dengan grafik, tabel, dan fitur manajemen pengguna.',
    tech: ['Vue 3', 'Chart.js', 'Pinia', 'Vite'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
    github: 'https://github.com/nlfts/dashboard-template',
    demo: 'https://dashboard.nlfts.dev'
  }
]
</script>

<template>
  <UMain class="bg-black text-white py-16">
    <UContainer>
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <section class="text-center mb-16">
          <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Starter Kit
          </h1>
          <p class="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Template siap pakai dan starter kit untuk mempercepat proyek berikutnya Anda dengan alat modern dan best practices.
          </p>
        </section>

        <!-- Starter Kits Grid -->
        <section class="mb-16">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="kit in starterKits" 
              :key="kit.name"
              class="group border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-all duration-300"
            >
              <!-- Image -->
              <div class="aspect-video overflow-hidden">
                <img 
                  :src="kit.image" 
                  :alt="kit.name"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <!-- Content -->
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-3">{{ kit.name }}</h3>
                <p class="text-neutral-400 text-sm mb-4 leading-relaxed">
                  {{ kit.description }}
                </p>

                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-2 mb-6">
                  <span 
                    v-for="tech in kit.tech" 
                    :key="tech"
                    class="text-xs bg-neutral-900 text-neutral-300 px-2 py-1 rounded"
                  >
                    {{ tech }}
                  </span>
                </div>

                <!-- Links -->
                <div class="flex gap-3">
                  <UButton 
                    label="Demo" 
                    color="white" 
                    size="sm" 
                    :to="kit.demo"
                    target="_blank"
                    external
                  />
                  <UButton 
                    label="GitHub" 
                    color="neutral" 
                    size="sm" 
                    :to="kit.github"
                    target="_blank"
                    external
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section class="text-center bg-neutral-900 rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4">Tidak Menemukan yang Anda Cari?</h2>
          <p class="text-neutral-400 mb-6">
            Hubungi kami untuk template atau starter kit kustom yang disesuaikan dengan kebutuhan Anda.
          </p>
          <UButton label="Hubungi Kami" color="white" size="lg" to="/contact" />
        </section>
      </div>
    </UContainer>
  </UMain>
</template>
