<script setup lang="ts">
const route = useRoute()

const items = [
  { label: 'Product', to: '/product' },
  { label: 'Events', to: '/events', hasMega: true },
  { label: 'Resources', to: '/docs/nuxt/getting-started', hasMega: true },
  { label: 'Blog', to: '/blog' }
]

const megaMenuData = {
  Events: {
    upcoming: [
      { date: '22 APR', title: 'NLFTs Workshop Jakarta', desc: 'SCBD, Jakarta Selatan' },
      { date: '23 APR', title: 'Open Source Forum', desc: 'Online Webinar' },
      { date: '24 APR', title: 'Dev Meetup Bandung', desc: 'Dago, Bandung' },
      { date: '30 APR', title: 'Community Talk Surabaya', desc: 'Ciputra World, Surabaya' }
    ],
    featured: [
      { 
        image: 'https://media.istockphoto.com/id/2205848062/photo/gedung-sate-satay-building-an-iconic-place-in-bandung-city-indonesia.webp?a=1&b=1&s=612x612&w=0&k=20&c=dei-qIgEcSMgzTo2Hk77VLaa2-h_MbiDaEL0cspJV_o=', 
        title: 'NLFTs in Bandung', 
        date: 'MAY 26-27 2026', 
        location: 'BANDUNG ID' 
      },
      { 
        image: 'https://images.unsplash.com/photo-1707378174003-418d6262d355?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVndSUyMGpvZ2phfGVufDB8fDB8fHww', 
        title: 'NLFTs In Jogja', 
        date: 'JUN 18-19 2026', 
        location: 'YOGYAKARTA ID' 
      }
    ]
  },
  Resources: {
    company: [
      { label: 'Blog', to: '/blog', icon: 'i-lucide-newspaper' },
      { label: 'Careers', to: '/careers', icon: 'i-lucide-briefcase' },
      { label: 'DevLovers', to: '/devlovers', icon: 'i-lucide-heart' },
      { label: 'Legal', to: '/legal', icon: 'i-lucide-scale' },
      { label: 'Enterprise', to: '/enterprise', icon: 'i-lucide-building' }
    ],
    partners: [
      'DevLovers Community',
      'OpenFoundry',
      'CloudVortex',
      'ModuleX Partners',
      'Sigma Design',
      'Redberry Apps'
    ],
    featured: {
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      date: 'April 14, 2026',
      title: 'How I Built an AI-Powered CRM with NLFTs in a Weekend',
      desc: 'How a senior freelance developer built a full NLFTs MVP in under 48 hours using our new AI modules.'
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
let timeout: any = null

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
const openSearch = () => { open.value = true }

const { gsap, setup } = useGsap()

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
  <UHeader class="border-b border-white/5 bg-background/90 relative z-[200]">
    <!-- Ambient Blue Glow Line (Downward Shine) -->
    <div class="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent z-50 origin-center navbar-glow">
      <!-- Intense center beam -->
      <div class="absolute inset-0 bg-blue-300 blur-[1px] opacity-100" />
      
      <!-- Downward light cast (The 'Bus' effect) -->
      <div class="absolute top-[1px] left-1/2 -translate-x-1/2 w-[90%] h-[30px] bg-gradient-to-b from-blue-500/40 via-blue-500/10 to-transparent blur-md pointer-events-none" />
      <div class="absolute top-[1px] left-1/2 -translate-x-1/2 w-[70%] h-[60px] bg-gradient-to-b from-blue-400/20 to-transparent blur-2xl pointer-events-none" />
    </div>

    <template #left>
      <NuxtLink to="/" class="flex items-center gap-4 group">
        <AppLogo class="w-auto h-7 sm:h-8 shrink-0 transition-transform group-hover:scale-105" />
      </NuxtLink>
    </template>

    <!-- Custom Desktop Nav with Mega Menu Trigger -->
    <div class="hidden lg:flex items-center gap-8 ml-8">
      <div 
        v-for="item in items" 
        :key="item.label"
        class="relative py-4"
        @mouseenter="handleMouseEnter(item.label, item.hasMega)"
        @mouseleave="handleMouseLeave"
      >
        <NuxtLink 
          :to="item.to"
          class="text-sm font-bold transition-all flex items-center gap-1.5"
          :class="[
            route.path.startsWith(item.to) ? 'text-white' : 'text-white/50 hover:text-white',
            activeMegaMenu === item.label ? 'text-white translate-y-[-1px]' : ''
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
          <UIcon name="i-lucide-search" class="w-4 h-4" />
          <span>Search</span>
          <span class="opacity-30 border border-white/20 rounded px-1.5 ml-1 font-mono">⌘K</span>
        </button>

        <UButton
          to="/grantara"
          color="white"
          variant="solid"
          size="sm"
          class="hidden sm:flex rounded-full font-bold px-5"
          label="Join Program"
        />

        <UHeaderMobileButton class="lg:hidden" />
      </div>
    </template>
  </UHeader>
</template>
