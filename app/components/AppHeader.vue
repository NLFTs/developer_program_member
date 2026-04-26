<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
const { y } = useWindowScroll()
const route = useRoute()
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const currentDocsNavigation = computed(() => {
  const currentFramework = route.path.split('/')[2]
  if (!currentFramework || !navigation?.value) return []
  return navigation.value.find(item => item.path === `/docs/${currentFramework}`)?.children || []
})

const frameworks = [
  { label: 'Nuxt', to: '/docs/nuxt/getting-started', icon: 'i-simple-icons-nuxtdotjs' },
  { label: 'Laravel', to: '/docs/laravel/getting-started', icon: 'i-simple-icons-laravel' },
  { label: 'Next.js', to: '/docs/nextjs/getting-started', icon: 'i-simple-icons-nextdotjs' },
  { label: 'HTML/CSS/JS', to: '/docs/html/getting-started', icon: 'i-lucide-code' }
]

// Use new auth composable (no database)
const { user, isLoggedIn, logout } = useAuth()

const isUserMenuOpen = ref(false)
const userMenuRef = ref(null)
const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu } = useMobileMenu()

onClickOutside(userMenuRef, () => {
  isUserMenuOpen.value = false
})

const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value
}

const handleLogout = () => {
  isUserMenuOpen.value = false
  logout()
}

const items = [
  { label: 'Produk', to: '/product' },
  { label: 'Acara', to: '/events', hasMega: true },
  { label: 'Sumber Daya', to: '/docs/getting-started', hasMega: true },
  { label: 'Blog', to: '/blog' }
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
      },
      {
        image: 'https://images.unsplash.com/photo-1707378174003-418d6262d355?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVndSUyMGpvZ2phfGVufDB8fDB8fHww',
        title: 'NLFTs Di Jogja',
        date: '18-19 JUNI 2026',
        location: 'YOGYAKARTA ID'
      }
    ]
  },
  'Sumber Daya': {
    categories: [
      {
        title: 'Memulai',
        to: '/docs/getting-started',
        icon: 'i-lucide-rocket',
        desc: 'Mulai perjalanan development Anda',
        items: [
          { label: 'Pendahuluan', to: '/docs/getting-started' },
          { label: 'Protokol', to: '/docs/getting-started/protokol' },
          { label: 'Lisensi', to: '/docs/getting-started/lisensi' }
        ]
      },
      {
        title: 'HTML',
        to: '/docs/html',
        icon: 'i-lucide-code',
        desc: 'Pelajari HTML dari dasar hingga mahir',
        items: [
          { label: 'Memulai', to: '/docs/html/getting-started' },
          { label: 'Pustaka', to: '/docs/html/pustaka' }
        ]
      },
      {
        title: 'CSS',
        to: '/docs/css',
        icon: 'i-lucide-palette',
        desc: 'Styling dan design dengan CSS',
        items: [
          { label: 'Dasar-dasar', to: '/docs/css/fundamentals' },
          { label: 'Lanjutan', to: '/docs/css/advanced' }
        ]
      },
      {
        title: 'JavaScript',
        to: '/docs/js',
        icon: 'i-lucide-zap',
        desc: 'Programming dengan JavaScript',
        items: [
          { label: 'Dasar-dasar', to: '/docs/js/basics' },
          { label: 'ES6+', to: '/docs/js/es6' }
        ]
      },
      {
        title: 'TypeScript',
        to: '/docs/ts',
        icon: 'i-lucide-shield',
        desc: 'Development JavaScript yang aman dengan tipe',
        items: [
          { label: 'Pendahuluan', to: '/docs/ts/introduction' },
          { label: 'Tipe Lanjutan', to: '/docs/ts/advanced' }
        ]
      },
      {
        title: 'Nuxt.js',
        to: '/docs/nuxt',
        icon: 'i-lucide-layers',
        desc: 'Framework Vue.js full-stack',
        items: [
          { label: 'Persiapan', to: '/docs/nuxt/setup' },
          { label: 'Komponen', to: '/docs/nuxt/components' }
        ]
      },
      {
        title: 'Laravel',
        to: '/docs/laravel',
        icon: 'i-lucide-server',
        desc: 'Framework PHP untuk artisan web'
      },
      {
        title: 'Next.js',
        to: '/docs/nextjs',
        icon: 'i-lucide-triangle',
        desc: 'Framework React untuk produksi'
      },
      {
        title: 'MongoDB',
        to: '/docs/mongodb',
        icon: 'i-lucide-database',
        desc: 'Database NoSQL untuk aplikasi modern'
      },
      {
        title: 'Java',
        to: '/docs/java',
        icon: 'i-lucide-coffee',
        desc: 'Bahasa pemrograman enterprise'
      }
    ],
    company: [
      { label: 'Blog', to: '/blog', icon: 'i-lucide-newspaper' },
      { label: 'Agensi', to: '/agency', icon: 'i-lucide-briefcase' },
      { label: 'DevLovers', to: '/devlovers', icon: 'i-lucide-heart' },
      { label: 'Legal', to: '/legal', icon: 'i-lucide-scale' },
      { label: 'Enterprise', to: '/enterprise', icon: 'i-lucide-building' },
      { label: 'Docs', to: '/docs', icon: 'i-lucide-book-open-text' }
    ],
    partners: [
      'Komunitas DevLovers',
      'OpenFoundry',
      'CloudVortex',
      'Mitra ModuleX',
      'Sigma Design',
      'Redberry Apps'
    ],
    featured: {
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      date: '14 April 2026',
      title: 'Bagaimana Saya Membangun CRM Berbasis AI dengan NLFTs dalam Akhir Pekan',
      desc: 'Bagaimana seorang pengembang freelance senior membangun MVP NLFTs lengkap dalam waktu kurang dari 48 jam menggunakan modul AI baru kami.'
    },
    socials: [
      { icon: 'i-simple-icons-github', href: 'https://github.com/nlfts' },
      { icon: 'i-simple-icons-x', href: 'https://x.com/nlfts' },
      { icon: 'i-simple-icons-discord', href: 'https://discord.gg/nlfts' },
      { icon: 'i-simple-icons-linkedin', href: '#' }
    ]
  }
}

const activeMegaMenu = ref<string | null>(null)
let timeout: ReturnType<typeof setTimeout> | null = null

const handleMouseEnter = (label: string, hasMega?: boolean) => {
  if (timeout) clearTimeout(timeout)
  if (hasMega) {
    activeMegaMenu.value = label
  } else {
    activeMegaMenu.value = null
  }
}

const handleMouseLeave = () => {
  timeout = setTimeout(() => {
    activeMegaMenu.value = null
  }, 300)
}

const { open } = useContentSearch()
const openSearch = () => {
  open.value = true
}

const { gsap, setup } = useGsap()
// Submenu expansion logic for mobile is now handled in AppMobileMenu component

setup(() => {
  gsap.from('.navbar-glow', {
    scaleX: 0,
    duration: 1.8,
    delay: 0.5,
    ease: 'expo.inOut'
  })
})
</script>

<template>
  <UHeader
    :class="[
      'border-b transition-all duration-500 sticky top-0 z-[200] min-h-[64px]',
      y > 50 ? 'bg-black/80 backdrop-blur-3xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]' : 'bg-background/90 border-white/5'
    ]"
  >
    <!-- Ambient Blue Glow Line (Downward Shine) -->
    <div
      class="absolute -bottom-px left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent z-50 origin-center navbar-glow"
    >
      <!-- Main glowing line -->
      <div class="absolute inset-0 bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
      
      <!-- Intense center beam -->
      <div class="absolute inset-0 bg-white blur-[1px] opacity-100" />

      <!-- Primary Downward light cast (Wide) -->
      <div
        class="absolute top-[1px] left-1/2 -translate-x-1/2 w-[95%] h-[50px] bg-gradient-to-b from-blue-500/80 via-blue-500/20 to-transparent blur-xl pointer-events-none transition-all duration-700"
      />
      
      <!-- Secondary Downward light cast (Focused) -->
      <div
        class="absolute top-[1px] left-1/2 -translate-x-1/2 w-[80%] h-[100px] bg-gradient-to-b from-blue-400/40 via-blue-500/10 to-transparent blur-3xl pointer-events-none"
      />

      <!-- Extra intense center glow -->
      <div class="absolute top-[1px] left-1/2 -translate-x-1/2 w-[40%] h-[30px] bg-blue-500/50 blur-lg pointer-events-none" />
    </div>

    <template #left>
      <NuxtLink
        to="/"
        class="flex items-center gap-4 group"
      >
        <AppLogo class="w-auto h-7 sm:h-8 shrink-0 transition-transform group-hover:scale-105" />
      </NuxtLink>
    </template>

    <!-- [DESKTOP] Nav Section -->
    <div class="hidden lg:flex items-center gap-6 ml-8">
      <div
        v-for="item in items"
        :key="item.label"
        class="relative py-2 group"
        @mouseenter="handleMouseEnter(item.label, item.hasMega)"
        @mouseleave="handleMouseLeave"
      >
        <NuxtLink
          :to="item.to"
          class="text-sm font-bold transition-all flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-white/5"
          :class="[
            route.path.startsWith(item.to) ? 'text-white' : 'text-white/50 hover:text-white',
            activeMegaMenu === item.label ? 'text-white bg-white/5' : ''
          ]"
        >
          {{ item.label }}
          <UIcon
            v-if="item.hasMega"
            name="i-lucide-chevron-down"
            class="w-3.5 h-3.5 transition-transform duration-300"
            :class="activeMegaMenu === item.label ? 'rotate-180' : ''"
          />
        </NuxtLink>

        <!-- Render Mega Menu if exists for this item -->
        <HeaderMegaMenu
          v-if="item.hasMega"
          :active="activeMegaMenu === item.label"
          :label="item.label"
          :data="megaMenuData[item.label as keyof typeof megaMenuData]"
          @mouseenter="handleMouseEnter(item.label, true)"
          @mouseleave="handleMouseLeave"
        />
      </div>
    </div>

    <template #right>
      <div class="flex items-center gap-2">
        <button
          class="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs font-bold text-white/60 transition-all hover:bg-white/5 hover:border-white/30 hover:text-white mr-2"
          type="button"
          @click="openSearch"
        >
          <UIcon
            name="i-lucide-search"
            class="w-4 h-4"
          />
          <span>Cari</span>
          <span class="opacity-30 border border-white/20 rounded px-1.5 ml-1 font-mono">⌘K</span>
        </button>

        <!-- Custom Auth Section (Simplified - No Profile Link) -->
        <ClientOnly>
          <template v-if="isLoggedIn && user">
            <div
              ref="userMenuRef"
              class="relative"
            >
              <button
                class="flex items-center group outline-none focus:outline-none"
                @click="toggleUserMenu"
              >
                <UAvatar
                  :src="user.avatar"
                  :alt="user.name || user.username"
                  size="sm"
                  class="ring-2 transition-all cursor-pointer ring-white/10 group-hover:ring-blue-500/50"
                />
              </button>

              <!-- Custom Premium Dropdown Menu -->
              <div
                v-if="isUserMenuOpen"
                class="user-dropdown-menu absolute right-0 mt-3 w-64 bg-[#080808]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-[300]"
              >
                <!-- Account info -->
                <div class="px-5 py-4 border-b border-white/5 bg-white/5">
                  <p class="text-[10px] uppercase tracking-[0.2em] font-bold mb-1 text-white/30">
                    Terautentikasi
                  </p>
                  <div class="flex items-center gap-1.5">
                    <p class="text-sm font-bold text-white truncate max-w-[200px]">
                      {{ user.name || user.username }}
                    </p>
                  </div>
                  <p class="text-xs text-white/40 mt-1">
                    @{{ user.username }}
                  </p>
                </div>

                <!-- Links -->
                <div class="py-2">
                  <NuxtLink
                    to="/docs/getting-started"
                    class="flex items-center gap-3 px-5 py-3 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                    @click="isUserMenuOpen = false"
                  >
                    <UIcon
                      name="i-lucide-book"
                      class="w-4 h-4"
                    />
                    Dokumentasi
                  </NuxtLink>
                  <NuxtLink
                    to="/community"
                    class="flex items-center gap-3 px-5 py-3 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                    @click="isUserMenuOpen = false"
                  >
                    <UIcon
                      name="i-lucide-users"
                      class="w-4 h-4"
                    />
                    Komunitas
                  </NuxtLink>
                </div>

                <!-- Logout -->
                <div class="p-2 border-t border-white/5">
                  <button
                    class="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-500/10 rounded-xl transition-all font-bold"
                    @click="handleLogout"
                  >
                    <UIcon
                      name="i-lucide-log-out"
                      class="w-4 h-4"
                    />
                    Keluar
                  </button>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <UButton
              to="/login"
              color="white"
              variant="solid"
              size="sm"
              class="hidden sm:flex rounded-full font-bold px-5"
              label="Masuk"
            />
          </template>
        </ClientOnly>

        <button
          class="custom-hamburger p-2 text-zinc-400 hover:text-white transition-colors lg:hidden ml-2"
          @click="toggleMobileMenu"
        >
          <Icon
            v-if="!isMobileMenuOpen"
            name="heroicons:bars-3-bottom-right"
            class="w-7 h-7"
          />
          <Icon
            v-else
            name="heroicons:x-mark"
            class="w-7 h-7"
          />
        </button>
      </div>
    </template>

    <!-- Mobile Menu is now handled globally in app.vue via AppMobileMenu component -->
  </UHeader>
</template>

<style scoped>
/* Hide the redundant UPage mobile menu button and other auto-generated buttons */
:global(.u-page-mobile-menu-button),
:global([aria-label="Open Menu"]),
:global(.lg\:hidden:not(.custom-hamburger):not(.custom-mobile-menu)),
:global(button[aria-label="Open Menu"]) {
  display: none !important;
  opacity: 0 !important;
  visibility: hidden !important;
  pointer-events: none !important;
  width: 0 !important;
  height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Ensure our custom hamburger is only visible on mobile and positioned correctly */
@media (max-width: 1023px) {
  .custom-hamburger {
    display: flex !important;
    visibility: visible !important;
    pointer-events: auto !important;
    z-index: 50;
  }
}

@media (min-width: 1024px) {
  .custom-hamburger {
    display: none !important;
    visibility: hidden !important;
    pointer-events: none !important;
  }
}
</style>
