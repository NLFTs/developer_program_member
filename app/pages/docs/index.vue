<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

// Fetch all navigation to be more inclusive (docs and product-guides)
const { data: docsNav } = await useAsyncData('docs-nav-hub', () => queryCollectionNavigation('docs'))
const { data: productNav } = await useAsyncData('product-nav-hub', () => queryCollectionNavigation('productGuides'))

const categories = computed(() => {
  const allNav: any[] = []
  
  // Extract children from /docs
  const docsRoot = docsNav.value?.find(item => item.path === '/docs')
  if (docsRoot?.children) {
    allNav.push(...docsRoot.children)
  } else if (docsNav.value) {
    // If no /docs root, use the whole tree
    allNav.push(...docsNav.value)
  }

  // Add product guides as a category if they exist
  if (productNav.value && productNav.value.length > 0) {
    allNav.push({
      title: 'Product Guides',
      path: '/product-guides',
      children: productNav.value
    })
  }
  
  return allNav.map(item => ({
    title: translateTitle(item.title),
    path: item.path,
    icon: getIconForCategory(item.title),
    color: getColorForCategory(item.title),
    items: item.children?.map((child: any) => ({
      label: child.title,
      to: child.path
    })) || []
  }))
})

function getColorForCategory(title: string) {
  const colors: Record<string, string> = {
    'laravel': '#ff2d20',
    'nuxt': '#00dc82',
    'nuxt.js': '#00dc82',
    'next.js': '#ffffff',
    'nextjs': '#ffffff',
    'html': '#e34f26',
    'css': '#1572b6',
    'js': '#f7df1e',
    'javascript': '#f7df1e',
    'ts': '#3178c6',
    'typescript': '#3178c6',
    'mongodb': '#47a248',
    'java': '#ed8b00',
    'product guides': '#3b82f6'
  }
  const key = title.toLowerCase()
  if (key.includes('laravel')) return '#ff2d20'
  if (key.includes('nuxt')) return '#00dc82'
  if (key.includes('next')) return '#ffffff'
  if (key.includes('html')) return '#e34f26'
  if (key.includes('css')) return '#1572b6'
  if (key.includes('js') || key.includes('javascript')) return '#f7df1e'
  if (key.includes('ts') || key.includes('typescript')) return '#3178c6'
  if (key.includes('mongo')) return '#47a248'
  if (key.includes('java')) return '#ed8b00'
  
  return colors[key] || '#3b82f6'
}

function translateTitle(title: string) {
  const translations: Record<string, string> = {
    'getting-started': 'Memulai',
    'Getting Started': 'Memulai',
    'laravel': 'Laravel',
    'html': 'HTML',
    'css': 'CSS',
    'js': 'JavaScript',
    'javascript': 'JavaScript',
    'ts': 'TypeScript',
    'typescript': 'TypeScript',
    'next.js': 'Next.js',
    'nuxt.js': 'Nuxt.js',
    'nuxt': 'Nuxt.js',
    'mongodb': 'MongoDB',
    'java': 'Java',
    'product guides': 'Panduan Produk',
    'introduction': 'Pendahuluan',
    'setup': 'Persiapan',
    'components': 'Komponen',
    'protocols': 'Protokol',
    'license': 'Lisensi',
    'advanced': 'Lanjutan'
  }
  return translations[title.toLowerCase()] || title
}

function getIconForCategory(title: string) {
  const icons: Record<string, string> = {
    'getting-started': 'i-lucide-rocket',
    'memulai': 'i-lucide-rocket',
    'laravel': 'i-simple-icons-laravel',
    'html': 'i-simple-icons-html5',
    'css': 'i-simple-icons-css3',
    'js': 'i-simple-icons-javascript',
    'javascript': 'i-simple-icons-javascript',
    'ts': 'i-simple-icons-typescript',
    'typescript': 'i-simple-icons-typescript',
    'next.js': 'i-simple-icons-nextdotjs',
    'nextjs': 'i-simple-icons-nextdotjs',
    'nuxt.js': 'i-simple-icons-nuxtdotjs',
    'nuxt': 'i-simple-icons-nuxtdotjs',
    'mongodb': 'i-simple-icons-mongodb',
    'java': 'i-simple-icons-openjdk',
    'product guides': 'i-lucide-package'
  }
  
  const key = title.toLowerCase()
  // Specific match or fallback
  if (key.includes('nuxt')) return 'i-simple-icons-nuxtdotjs'
  if (key.includes('next')) return 'i-simple-icons-nextdotjs'
  if (key.includes('html')) return 'i-simple-icons-html5'
  if (key.includes('css')) return 'i-simple-icons-css3'
  if (key.includes('js') || key.includes('javascript')) return 'i-simple-icons-javascript'
  if (key.includes('ts') || key.includes('typescript')) return 'i-simple-icons-typescript'
  if (key.includes('laravel')) return 'i-simple-icons-laravel'
  if (key.includes('java')) return 'i-simple-icons-openjdk'
  if (key.includes('mongo')) return 'i-simple-icons-mongodb'
  
  return icons[key] || 'i-lucide-book'
}

useSeoMeta({
  title: 'Pusat Dokumentasi - NLFTs',
  description: 'Dokumentasi lengkap dan panduan pengembang untuk ekosistem NLFTs.'
})

const { gsap, setup } = useGsap()

setup(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
  
  // Reset initial states for word reveal
  gsap.set('.word', { 
    y: '120%', 
    rotateX: -90, 
    opacity: 0,
    filter: 'blur(10px)'
  })

  tl.from('.dkv-header-label', { opacity: 0, scale: 0.8, duration: 1 })
    .to('.word', { 
      y: 0, 
      rotateX: 0, 
      opacity: 1, 
      filter: 'blur(0px)',
      duration: 1.5, 
      stagger: {
        each: 0.1,
        from: 'start'
      }
    }, '-=0.5')
    .from('.dkv-desc', { opacity: 0, x: -30, duration: 1.2 }, '-=1')
    .from('.dkv-divider', { scaleX: 0, opacity: 0, duration: 2, ease: 'expo.inOut' }, '-=1.5')
    .from('.dkv-nav-item', { 
      opacity: 0, 
      y: 30, 
      stagger: 0.1, 
      duration: 1 
    }, '-=1')
})
</script>

<template>
  <div class="docs-hub-final min-h-screen text-[#efeff1] selection:bg-blue-500/30 relative perspective-1000">
    <!-- Reusing the main site's subtle background style -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.03),transparent_70%)]" />
    </div>

    <UContainer class="relative z-10 pt-28 pb-32">
      <!-- DKV Hierarchy with Correct Visual Communication (Centered & Balanced) -->
      <header class="mb-24 flex flex-col items-center text-center">
        <div class="dkv-header-label flex items-center gap-3 text-blue-500 font-bold tracking-[0.2em] uppercase text-[10px] mb-6">
          <span class="w-10 h-px bg-blue-500" />
          Arsip Dokumentasi
          <span class="w-10 h-px bg-blue-500" />
        </div>
        
        <div class="max-w-4xl flex flex-col items-center">
          <h1 class="dkv-title text-[clamp(2.5rem,6vw,3.5rem)] font-bold tracking-tight leading-[1.3] mb-6 text-white perspective-1000">
            <div class="line overflow-hidden py-1">
              <span class="word inline-block mr-[0.2em]">Pelajari,</span>
              <span class="word inline-block mr-[0.2em]">Bangun,</span>
              <span class="word inline-block">dan</span>
            </div>
            <div class="line overflow-hidden py-1">
              <span class="word inline-block mr-[0.2em] text-white/40 italic font-light">Berkontribusi</span>
              <span class="word inline-block mr-[0.2em] text-white/40 italic font-light">Bersama</span>
              <span class="word inline-block text-white/40 italic font-light">Kami.</span>
            </div>
          </h1>
          
          <p class="dkv-desc max-w-xl text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Panduan teknis sistematis untuk mendukung perjalanan Anda dalam membangun ekosistem NLFTs bersama komunitas global kami.
          </p>
        </div>
      </header>

      <!-- Premium Divider Line (Stronger) -->
      <div class="dkv-divider h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent mb-20 origin-center" />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
        <div
          v-for="(cat, index) in categories"
          :key="cat.title"
          class="dkv-nav-item group"
          :style="{ '--hover-glow': cat.color }"
        >
          <!-- Elegant Typographic Divider (Stronger) -->
          <div 
            class="mb-8 border-b border-white/20 pb-5 transition-all duration-500 group-hover:border-[var(--hover-glow)]/40"
          >
            <div class="flex items-center justify-between mb-2">
              <span class="text-[10px] font-mono text-zinc-600">/ 0{{ index + 1 }}</span>
              <UIcon 
                :name="cat.icon" 
                class="w-5 h-5 text-zinc-800 transition-all duration-500 group-hover:text-[var(--hover-glow)] group-hover:drop-shadow-[0_0_8px_var(--hover-glow)]" 
              />
            </div>
            <h2 class="text-xl font-bold text-white group-hover:text-[var(--hover-glow)] transition-colors duration-500">
              {{ cat.title }}
            </h2>
          </div>

          <!-- Semantic List -->
          <nav class="space-y-4">
            <NuxtLink
              v-for="item in cat.items"
              :key="item.label"
              :to="item.to"
              class="group/link flex items-center justify-between py-1 border-b border-white/[0.03] hover:border-[var(--hover-glow)]/30 transition-all duration-300"
            >
              <span class="text-base font-light text-zinc-400 group-hover/link:text-white transition-all duration-300 group-hover/link:translate-x-1">
                {{ item.label }}
              </span>
              <UIcon 
                name="i-lucide-arrow-right" 
                class="w-3.5 h-3.5 text-zinc-900 opacity-0 group-hover/link:opacity-100 group-hover/link:text-[var(--hover-glow)] transition-all" 
              />
            </NuxtLink>
            <div v-if="!cat.items.length" class="text-xs text-zinc-700 italic tracking-widest">
              Data Belum Tersedia
            </div>
          </nav>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.docs-hub-final {
  -webkit-font-smoothing: antialiased;
}

h1 {
  font-family: var(--font-display);
}

.dkv-nav-item {
  will-change: transform, opacity;
}
</style>
