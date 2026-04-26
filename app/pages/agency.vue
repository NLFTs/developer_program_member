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
  'Software & SaaS',
  'Academy & Bootcamp',
  'Community Management',
  'Core Framework',
  'UI/UX Design',
  'Developer Relations'
]
</script>

<template>
  <UMain
    v-if="page"
    class="bg-black text-white py-16"
  >
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
                >
              </div>

              <!-- Main Info -->
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <h4 class="text-xl font-bold tracking-tight">
                    {{ agency.name }}
                  </h4>
                  <span class="text-[10px] font-mono text-neutral-700 uppercase tracking-widest border border-neutral-900 px-2 py-0.5 rounded-sm">Terverifikasi</span>
                </div>
                <p class="text-neutral-500 text-sm leading-relaxed max-w-lg">
                  {{ agency.description }}
                </p>
                <div class="flex flex-wrap gap-2 pt-2">
                  <span
                    v-for="exp in agency.expertise"
                    :key="exp"
                    class="text-[9px] font-mono text-neutral-500 uppercase tracking-tighter"
                  >
                    / {{ exp }}
                  </span>
                </div>
              </div>

              <!-- Meta & Action -->
              <div class="flex flex-col md:items-end justify-between h-full space-y-4">
                <div class="text-xs text-neutral-600 flex items-center gap-1.5 font-mono uppercase tracking-widest">
                  <UIcon
                    name="i-lucide-map-pin"
                    class="w-3 h-3"
                  />
                  {{ agency.location }}
                </div>
                <UButton
                  label="Ajukan Pertanyaan"
                  variant="ghost"
                  class="text-xs font-semibold py-2 px-6 rounded-sm border border-neutral-800 text-white hover:bg-white hover:text-black transition-all"
                  to="/contact"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </UMain>
</template>

<style scoped>
</style>
