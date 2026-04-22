<script setup lang="ts">
const { data: page } = await useAsyncData('agency', () => queryCollection('agency').first())

const title = page.value?.title || 'Agensi'
const description = page.value?.description || 'Mitra strategis untuk pengembangan kelas dunia.'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

const expertises = [
  'Perangkat Lunak & SaaS',
  'Akademi & Bootcamp',
  'Manajemen Komunitas',
  'Framework Inti',
  'Desain UI/UX',
  'Developer Relations'
]
</script>

<template>
  <UMain v-if="page" class="bg-black text-white py-16">
    <div class="w-full border-b border-neutral-900/60">
      <UContainer>
        <!-- Refined Header -->
        <section class="max-w-3xl mb-24 pb-12">
          <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {{ page.title }}
          </h1>
          <p class="text-neutral-500 text-lg leading-relaxed max-w-xl">
            {{ page.description }}
          </p>
        </section>
      </UContainer>
    </div>

    <!-- Minimalist Directory Layout -->
    <UContainer class="mt-12">
      <div class="grid lg:grid-cols-[200px_1fr] gap-12">
        <!-- Sidebar -->
        <aside class="space-y-10">
          <div>
            <h3 class="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 mb-6 font-mono">
              Keahlian
            </h3>
            <ul class="space-y-3">
              <li 
                v-for="expertise in expertises" 
                :key="expertise"
                class="text-sm text-neutral-500 hover:text-neutral-300 cursor-default transition-colors"
              >
                {{ expertise }}
              </li>
            </ul>
          </div>
        </aside>

        <!-- Directory Grid -->
        <div class="space-y-12">
          <div 
            v-for="agency in page.agencies" 
            :key="agency.name"
            class="group border-b border-neutral-900 pb-12 hover:border-neutral-800 transition-colors"
          >
            <div class="grid md:grid-cols-[120px_1fr_200px] gap-8 items-start">
              <!-- Brand Mark -->
              <div class="aspect-square bg-neutral-900 overflow-hidden flex items-center justify-center rounded-sm">
                <img 
                  :src="agency.icon" 
                  :alt="agency.name"
                  class="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>

              <!-- Main Info -->
              <div class="space-y-3">
                <h2 class="text-lg font-semibold group-hover:text-white transition-colors">{{ agency.name }}</h2>
                <p class="text-sm text-neutral-400 leading-relaxed">{{ agency.description }}</p>
                <div class="flex flex-wrap gap-2 pt-2">
                  <span 
                    v-for="exp in agency.expertise" 
                    :key="exp"
                    class="text-xs bg-neutral-900 text-neutral-400 px-2 py-1 rounded"
                  >
                    {{ exp }}
                  </span>
                </div>
              </div>

              <!-- Location -->
              <div class="text-right">
                <p class="text-xs font-mono text-neutral-500 uppercase tracking-wider">{{ agency.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>

    <!-- CTA -->
    <UContainer class="mt-24">
      <div class="text-center bg-neutral-900 rounded-lg p-12">
        <h2 class="text-2xl font-bold mb-4">Ingin Menjadi Partner?</h2>
        <p class="text-neutral-400 mb-6 max-w-2xl mx-auto">
          Jika Anda adalah agensi atau studio dengan keahlian dalam ekosistem kami, kami ingin mendengar dari Anda.
        </p>
        <UButton 
          :label="page.cta?.label || 'Hubungi Kami'" 
          :to="page.cta?.to || '/contact'"
          color="white"
          size="lg"
        />
      </div>
    </UContainer>
  </UMain>
</template>
