<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const { isOpen, close } = useMobileMenu()
const route = useRoute()
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
const { gsap } = useGsap()

const currentDocsNavigation = computed(() => {
  const currentFramework = route.path.split('/')[2]
  if (!currentFramework || !navigation?.value) return []
  return navigation.value.find(item => item.path === `/docs/${currentFramework}`)?.children || []
})

const items = [
  { label: 'Produk', to: '/product' },
  { label: 'Acara', to: '/events', hasMega: true },
  { label: 'Sumber Daya', to: '/docs/getting-started', hasMega: true },
  { label: 'Blog', to: '/blog' }
]

const frameworks = [
  { label: 'Nuxt', to: '/docs/nuxt/getting-started', icon: 'i-simple-icons-nuxtdotjs' },
  { label: 'Laravel', to: '/docs/laravel/getting-started', icon: 'i-simple-icons-laravel' },
  { label: 'Next.js', to: '/docs/nextjs/getting-started', icon: 'i-simple-icons-nextdotjs' },
  { label: 'HTML/CSS/JS', to: '/docs/html/getting-started', icon: 'i-lucide-code' }
]

const megaMenuData = {
  Acara: {
    upcoming: [
      { date: '22 APR', title: 'NLFTs Workshop Jakarta', desc: 'SCBD, Jakarta Selatan' },
      { date: '23 APR', title: 'Open Source Forum', desc: 'Webinar Online' },
      { date: '24 APR', title: 'Dev Meetup Bandung', desc: 'Dago, Bandung' },
      { date: '30 APR', title: 'Community Talk Surabaya', desc: 'Ciputra World, Surabaya' }
    ],
    featured: [
      {
        image: 'https://media.istockphoto.com/id/2205848062/photo/gedung-sate-satay-building-an-iconic-place-in-bandung-city-indonesia.webp?a=1&b=1&s=612x612&w=0&k=20&c=dei-qIgEcSMgzTo2Hk77VLaa2-h_MbiDaEL0cspJV_o=',
        title: 'NLFTs di Bandung',
        date: '26-27 MEI 2026',
        location: 'BANDUNG ID'
      }
    ]
  },
  'Sumber Daya': {
    categories: [
      { title: 'Memulai', to: '/docs/getting-started', icon: 'i-lucide-rocket' },
      { title: 'HTML', to: '/docs/html', icon: 'i-lucide-code' },
      { title: 'CSS', to: '/docs/css', icon: 'i-lucide-palette' },
      { title: 'JavaScript', to: '/docs/js', icon: 'i-lucide-zap' },
      { title: 'TypeScript', to: '/docs/ts', icon: 'i-lucide-shield' },
      { title: 'Nuxt.js', to: '/docs/nuxt', icon: 'i-lucide-layers' }
    ],
    company: [
      { label: 'Blog', to: '/blog', icon: 'i-lucide-newspaper' },
      { label: 'Agensi', to: '/agency', icon: 'i-lucide-briefcase' },
      { label: 'DevLovers', to: '/devlovers', icon: 'i-lucide-heart' },
      { label: 'Legal', to: '/legal', icon: 'i-lucide-scale' }
    ]
  }
}

const expandedItems = ref<Set<string>>(new Set())
const toggleSubmenu = (label: string) => {
  if (expandedItems.value.has(label)) {
    expandedItems.value.delete(label)
  } else {
    expandedItems.value.add(label)
  }
}

// GSAP Transition Hooks
const onEnter = (el: Element, done: () => void) => {
  const panel = el.querySelector('.menu-panel')
  const items = el.querySelectorAll('.nav-item')
  const backdrop = el.querySelector('.menu-backdrop')
  const footer = el.querySelector('.menu-footer')

  gsap.set([panel, items, backdrop, footer], { clearProps: 'all' })
  
  const tl = gsap.timeline({ onComplete: done })
  
  tl.from(backdrop, { 
    opacity: 0, 
    duration: 0.4, 
    ease: 'none' 
  })
  .from(panel, { 
    xPercent: 100, 
    duration: 0.8, 
    ease: 'expo.out' 
  }, '-=0.2')
  .from(items, { 
    y: 40, 
    opacity: 0, 
    stagger: 0.04, 
    duration: 0.6, 
    ease: 'power3.out' 
  }, '-=0.5')
  .from(footer, {
    opacity: 0,
    y: 20,
    duration: 0.5
  }, '-=0.3')
}

const onLeave = (el: Element, done: () => void) => {
  const panel = el.querySelector('.menu-panel')
  const backdrop = el.querySelector('.menu-backdrop')
  
  const tl = gsap.timeline({ onComplete: done })
  
  tl.to(panel, { 
    xPercent: 100, 
    duration: 0.5, 
    ease: 'expo.in' 
  })
  .to(backdrop, { 
    opacity: 0, 
    duration: 0.3 
  }, '-=0.2')
}

// Lock scroll and stop Lenis
const { $lenis } = useNuxtApp() as any

watch(isOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
    if ($lenis) $lenis.stop()
  } else {
    document.body.style.overflow = 'auto'
    if ($lenis) $lenis.start()
  }
})
</script>

<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition
        :css="false"
        @enter="onEnter"
        @leave="onLeave"
      >
        <div 
          v-if="isOpen" 
          class="fixed inset-0 z-[1000000] lg:hidden flex flex-col custom-mobile-menu"
        >
          <!-- Backdrop -->
          <div 
            class="menu-backdrop absolute inset-0 bg-black/90 backdrop-blur-2xl"
            @click="close"
          />

          <!-- Main Panel -->
          <div class="menu-panel relative flex-1 ml-auto w-[85%] max-w-sm bg-[#080808] border-l border-white/5 flex flex-col overflow-hidden shadow-2xl">
            <!-- Header -->
            <div class="flex items-center justify-between p-6 border-b border-white/5">
              <AppLogo class="h-6 w-auto" />
              <button 
                class="p-2 -mr-2 text-white/50 hover:text-white transition-colors"
                @click="close"
              >
                <UIcon name="i-lucide-x" class="w-6 h-6" />
              </button>
            </div>

            <!-- Scrollable Content -->
            <div 
              class="flex-1 overflow-y-auto px-6 py-8 custom-scrollbar"
              data-lenis-prevent
            >
              <nav class="space-y-6">
                <!-- Main Links -->
                <div class="space-y-1">
                  <div v-for="item in items" :key="item.label" class="nav-item">
                    <!-- Regular Link -->
                    <NuxtLink
                      v-if="!item.hasMega"
                      :to="item.to"
                      class="flex items-center py-3 text-2xl font-bold text-white/90 hover:text-white transition-colors"
                      @click="close"
                    >
                      {{ item.label }}
                    </NuxtLink>

                    <!-- Accordion for Mega Menus -->
                    <template v-else>
                      <button
                        class="w-full flex items-center justify-between py-3 text-2xl font-bold text-white/90 hover:text-white transition-colors"
                        @click="toggleSubmenu(item.label)"
                      >
                        <span>{{ item.label }}</span>
                        <UIcon 
                          name="i-lucide-chevron-down" 
                          class="w-5 h-5 transition-transform duration-300" 
                          :class="expandedItems.has(item.label) ? 'rotate-180' : ''"
                        />
                      </button>

                      <!-- Expanded Content -->
                      <div 
                        v-if="expandedItems.has(item.label)" 
                        class="mt-2 mb-4 pl-4 space-y-4 border-l border-white/10"
                      >
                        <!-- Specific content for Events -->
                        <template v-if="item.label === 'Acara'">
                          <div v-for="event in megaMenuData.Acara.upcoming" :key="event.title" class="space-y-1">
                            <p class="text-[10px] font-black text-blue-500 tracking-widest uppercase">{{ event.date }}</p>
                            <p class="text-sm font-bold text-white/80">{{ event.title }}</p>
                          </div>
                        </template>

                        <!-- Specific content for Resources -->
                        <template v-if="item.label === 'Sumber Daya'">
                          <div class="grid grid-cols-1 gap-4">
                            <NuxtLink 
                              v-for="cat in megaMenuData['Sumber Daya'].categories" 
                              :key="cat.title"
                              :to="cat.to"
                              class="flex items-center gap-3 group"
                              @click="close"
                            >
                              <UIcon :name="cat.icon" class="w-4 h-4 text-white/40" />
                              <span class="text-sm font-bold text-white/60 group-hover:text-white transition-colors">{{ cat.title }}</span>
                            </NuxtLink>
                          </div>
                          <div class="pt-4 border-t border-white/5 space-y-3">
                            <NuxtLink 
                              v-for="comp in megaMenuData['Sumber Daya'].company" 
                              :key="comp.label"
                              :to="comp.to"
                              class="block text-xs font-medium text-white/40 hover:text-white"
                              @click="close"
                            >
                              {{ comp.label }}
                            </NuxtLink>
                          </div>
                        </template>
                      </div>
                    </template>
                  </div>
                </div>

                <!-- Section Divider -->
                <div class="h-px bg-white/5 nav-item"></div>

                <!-- Current Docs Sections (Dynamic) -->
                <div v-if="currentDocsNavigation.length > 0" class="space-y-4 nav-item">
                  <p class="text-[10px] uppercase tracking-[0.3em] font-black text-blue-500">Navigasi Dokumentasi</p>
                  <div class="space-y-2">
                    <NuxtLink
                      v-for="doc in currentDocsNavigation"
                      :key="doc.path"
                      :to="doc.path"
                      class="flex items-center gap-3 p-3 bg-white/[0.03] rounded-xl border border-white/5 text-white/70 hover:text-white hover:bg-white/5 transition-all"
                      @click="close"
                    >
                      <UIcon name="i-lucide-file-text" class="w-4 h-4 text-blue-400" />
                      <span class="font-bold text-xs">{{ doc.title }}</span>
                    </NuxtLink>
                  </div>
                </div>

                <!-- Framework Quick Links -->
                <div class="space-y-4 nav-item">
                  <p class="text-[10px] uppercase tracking-[0.3em] font-black text-white/20">Kerangka Kerja</p>
                  <div class="grid grid-cols-2 gap-2">
                    <NuxtLink
                      v-for="fw in frameworks"
                      :key="fw.label"
                      :to="fw.to"
                      class="flex items-center gap-3 p-3 bg-white/[0.03] rounded-xl border border-white/5 text-white/60 hover:text-white transition-all"
                      @click="close"
                    >
                      <UIcon :name="fw.icon" class="w-5 h-5" />
                      <span class="text-[10px] font-black uppercase tracking-widest">{{ fw.label }}</span>
                    </NuxtLink>
                  </div>
                </div>
              </nav>
            </div>

            <!-- Footer -->
            <div class="menu-footer p-6 border-t border-white/5 bg-black/40">
              <div class="flex items-center justify-between mb-6">
                <div class="flex gap-4">
                  <a href="#" class="text-white/30 hover:text-white transition-colors">
                    <UIcon name="i-simple-icons-github" class="w-5 h-5" />
                  </a>
                  <a href="#" class="text-white/30 hover:text-white transition-colors">
                    <UIcon name="i-simple-icons-x" class="w-5 h-5" />
                  </a>
                  <a href="#" class="text-white/30 hover:text-white transition-colors">
                    <UIcon name="i-simple-icons-discord" class="w-5 h-5" />
                  </a>
                </div>
              </div>
              <UButton
                to="/login"
                block
                color="white"
                variant="solid"
                class="rounded-xl font-bold py-3"
                @click="close"
              >
                Masuk
              </UButton>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 0px;
}

.custom-mobile-menu {
  font-family: 'Space Grotesk', sans-serif;
}

/* Glassmorphism utility for sections */
.nav-item {
  position: relative;
}

/* Custom easing for transitions */
.menu-panel {
  box-shadow: -20px 0 80px rgba(0, 0, 0, 0.8);
}

/* Ensure icons have consistent sizing */
:deep(.i-lucide-chevron-down) {
  opacity: 0.5;
}
</style>
