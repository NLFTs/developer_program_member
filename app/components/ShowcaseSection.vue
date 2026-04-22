<script setup lang="ts">
interface ShowcaseItem {
  name: string
  slug: string
  thumbnail: string
  category: string
}

defineProps<{
  showcasesItems: ShowcaseItem[]
}>()

const scrollContainer = ref<HTMLElement | null>(null)

const scrollPrev = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -400, behavior: 'smooth' })
  }
}

const scrollNext = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 400, behavior: 'smooth' })
  }
}

onMounted(() => {
  const prevBtn = document.querySelector('.showcase-prev') as HTMLButtonElement
  const nextBtn = document.querySelector('.showcase-next') as HTMLButtonElement
  
  if (prevBtn) prevBtn.addEventListener('click', scrollPrev)
  if (nextBtn) nextBtn.addEventListener('click', scrollNext)
})
</script>

<template>
  <section class="showcase-section py-20 lg:py-32 bg-[#020205] relative overflow-hidden" id="showcase">
    <UContainer>
      <div class="flex flex-col items-center text-center mb-16 gap-6">
        <p class="text-xs font-bold tracking-[0.3em] uppercase text-emerald-500">Showcase</p>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter max-w-3xl">
          Real-world Web Applications built with NLFTs
        </h2>
        <UButton
          label="View all websites"
          color="neutral"
          variant="solid"
          size="lg"
          class="rounded-lg px-8 py-3 bg-white text-black font-bold hover:bg-neutral-200 transition-colors"
        />
      </div>

      <div class="showcase-slider-wrapper relative group/slider -mx-4 sm:mx-0">
        <!-- Center-focused native slider -->
        <div ref="scrollContainer" class="showcase-scroll-container flex overflow-x-auto scrollbar-hide gap-0 sm:gap-10 pb-12 px-0 sm:px-[20%]" data-lenis-prevent>
          <NuxtLink 
            v-for="item in showcasesItems" 
            :key="item.name"
            :to="'/product/' + item.slug"
            class="flex-none w-full sm:w-[60vw] lg:w-[50vw]"
          >
            <div class="showcase-card group cursor-pointer">
              <div class="relative aspect-[16/9] overflow-hidden rounded-none sm:rounded-3xl border-y sm:border border-white/10 bg-neutral-900 shadow-2xl transition-all duration-700 group-hover:border-white/20 sm:group-hover:-translate-y-4">
                <img 
                  :src="item.thumbnail" 
                  :alt="item.name"
                  class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 scale-75 group-hover:scale-100">
                  <div class="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                    <UIcon name="i-lucide-arrow-up-right" class="w-8 h-8 text-white" />
                  </div>
                </div>

                <!-- Card Info Overlay (Always visible on mobile) -->
                <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10">
                  <div class="flex flex-col gap-0 sm:gap-1">
                    <span class="text-[10px] sm:text-xs font-bold text-emerald-500 uppercase tracking-widest">{{ item.category }}</span>
                    <h3 class="text-xl sm:text-3xl font-black text-white tracking-tighter">{{ item.name }}</h3>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Enhanced Navigation Buttons -->
        <button class="showcase-prev hidden xl:flex absolute left-8 top-1/2 -translate-y-12 w-14 h-14 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl items-center justify-center text-white hover:bg-white hover:text-black transition-all z-20 cursor-pointer active:scale-90 shadow-2xl">
          <UIcon name="i-lucide-chevron-left" class="w-8 h-8" />
        </button>
        <button class="showcase-next hidden xl:flex absolute right-8 top-1/2 -translate-y-12 w-14 h-14 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl items-center justify-center text-white hover:bg-white hover:text-black transition-all z-20 cursor-pointer active:scale-90 shadow-2xl">
          <UIcon name="i-lucide-chevron-right" class="w-8 h-8" />
        </button>
      </div>
    </UContainer>

    <!-- Background Decoration -->
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
  </section>
</template>

<style scoped>
/* Showcase Manual Slider Styles */
.showcase-scroll-container {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
}
.showcase-scroll-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}
</style>