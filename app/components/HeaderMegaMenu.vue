<script setup lang="ts">
const props = defineProps<{
  active: boolean
  label: string
  data: any
}>()

const { gsap } = useGsap()

watch(() => props.active, (isActive) => {
  if (isActive) {
    gsap.fromTo('.mega-menu-content', 
      { opacity: 0, y: 15, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power3.out' }
    )
    gsap.fromTo('.mega-column', 
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, delay: 0.1 }
    )
  }
})
</script>

<template>
  <div 
    v-show="active"
    class="mega-menu-content absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[1200px] bg-black/85 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.9)] z-[100] origin-top"
  >
    <!-- Layout for EVENTS -->
    <div v-if="label === 'Events'" class="p-8 grid grid-cols-[1.2fr_2fr] gap-12">
      <div class="mega-column space-y-8 border-r border-white/5 pr-12">
        <div>
          <h3 class="text-xs font-bold uppercase tracking-widest text-primary-500 mb-6 font-mono">Upcoming Events</h3>
          <div class="space-y-6">
            <NuxtLink v-for="item in data.upcoming" :key="item.title" to="/events" class="flex items-start gap-4 group/item">
              <div class="w-11 h-11 bg-white/5 border border-white/10 rounded-lg flex flex-col items-center justify-center shrink-0 group-hover/item:border-primary-500/50 transition-colors">
                <span class="text-[9px] uppercase font-bold text-neutral-500">{{ item.date.split(' ')[1] }}</span>
                <span class="text-base font-bold leading-none text-white">{{ item.date.split(' ')[0] }}</span>
              </div>
              <div class="space-y-1">
                <h4 class="text-sm font-bold text-white group-hover/item:text-primary-400 transition-colors">{{ item.title }}</h4>
                <p class="text-[11px] text-neutral-500">{{ item.desc }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
        <NuxtLink to="/events" class="inline-flex items-center gap-2 text-xs font-bold text-white/50 hover:text-white transition-colors group">
          View all events <UIcon name="i-lucide-arrow-right" class="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </NuxtLink>
      </div>

      <div class="mega-column grid grid-cols-2 gap-6">
        <NuxtLink v-for="card in data.featured" :key="card.title" to="/events" class="group/card relative aspect-[3/4] overflow-hidden rounded-xl border border-white/5">
          <img :src="card.image" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105 grayscale group-hover/card:grayscale-0">
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div class="absolute inset-x-0 bottom-0 p-6 space-y-2">
            <h4 class="text-base font-bold text-white leading-tight">{{ card.title }}</h4>
            <div class="flex items-center justify-between text-[9px] font-bold text-white/40 uppercase tracking-widest">
              <span>{{ card.date }}</span><span>{{ card.location }}</span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- Layout for RESOURCES -->
    <div v-else-if="label === 'Resources'" class="flex flex-col">
      <div class="p-10 grid grid-cols-[2.5fr_180px_1fr] gap-12">
        <!-- Col 1: Documentation Categories with Submenus -->
        <div class="mega-column space-y-8">
          <h3 class="text-xs font-bold uppercase tracking-widest text-primary-500 font-mono">Documentation</h3>
          <div class="grid grid-cols-3 gap-x-8 gap-y-6">
            <div v-for="category in data.categories" :key="category.title" class="space-y-3">
              <NuxtLink :to="category.to" class="flex items-start gap-3 group/category">
                <div class="w-7 h-7 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover/category:border-primary-500/50 transition-colors">
                  <UIcon :name="category.icon" class="w-3.5 h-3.5 text-neutral-400 group-hover/category:text-primary-400 transition-colors" />
                </div>
                <div class="space-y-1">
                  <h4 class="text-sm font-bold text-white group-hover/category:text-primary-400 transition-colors">{{ category.title }}</h4>
                  <p class="text-xs text-neutral-500 leading-relaxed">{{ category.desc }}</p>
                </div>
              </NuxtLink>
              
              <!-- Submenu items if available -->
              <div v-if="category.items" class="ml-10 space-y-1.5">
                <NuxtLink 
                  v-for="item in category.items" 
                  :key="item.label" 
                  :to="item.to" 
                  class="block text-xs font-medium text-white/50 hover:text-white transition-colors pl-2 border-l border-white/10 hover:border-primary-500/50"
                >
                  {{ item.label }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Col 2: Company Links -->
        <div class="mega-column space-y-8 border-r border-white/5 pr-12">
          <h3 class="text-xs font-bold uppercase tracking-widest text-primary-500 font-mono">Company</h3>
          <div class="space-y-5">
            <NuxtLink v-for="link in data.company" :key="link.label" :to="link.to" class="flex items-center gap-3 text-white/70 hover:text-white transition-colors group/link">
              <UIcon :name="link.icon" class="w-4 h-4 text-neutral-600 group-hover/link:text-primary-500 transition-colors" />
              <span class="text-sm font-medium">{{ link.label }}</span>
            </NuxtLink>
          </div>
          
          <div class="pt-4 space-y-4">
            <h4 class="text-xs font-bold uppercase tracking-widest text-primary-500 font-mono">Partners</h4>
            <div class="space-y-3">
              <NuxtLink v-for="partner in data.partners.slice(0, 4)" :key="partner" to="#" class="block text-xs font-medium text-white/60 hover:text-white transition-colors">
                {{ partner }}
              </NuxtLink>
              <NuxtLink to="#" class="inline-flex items-center gap-1 text-xs font-bold text-primary-500">
                View all <UIcon name="i-lucide-arrow-right" class="w-3 h-3" />
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Col 3: Featured Article -->
        <div class="mega-column space-y-6">
          <h3 class="text-xs font-bold uppercase tracking-widest text-primary-500 font-mono">Featured Article</h3>
          <NuxtLink to="/blog" class="group/article space-y-4 bg-white/[0.02] border border-white/5 p-5 rounded-xl hover:bg-white/[0.05] transition-colors">
            <img :src="data.featured.image" class="w-full aspect-video object-cover rounded-lg grayscale group-hover/article:grayscale-0 transition-all duration-500 shadow-2xl">
            <div class="space-y-2">
              <span class="text-[10px] font-bold text-neutral-500">{{ data.featured.date }}</span>
              <h4 class="text-sm font-bold text-white group-hover/article:text-primary-400 transition-colors leading-snug">
                {{ data.featured.title }}
              </h4>
              <p class="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                {{ data.featured.desc }}
              </p>
              <div class="text-[10px] font-bold text-primary-500 flex items-center gap-1 pt-2">
                Read more <UIcon name="i-lucide-arrow-right" class="w-2.5 h-2.5" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="bg-white/5 p-4 px-10 flex items-center justify-between border-t border-white/5">
        <div class="flex items-center gap-6">
          <a v-for="social in data.socials" :key="social.icon" :href="social.href" class="text-white/40 hover:text-white transition-colors">
            <UIcon :name="social.icon" class="w-5 h-5" />
          </a>
        </div>
        <div class="text-xs text-white/40">
          Explore our comprehensive documentation
        </div>
      </div>
    </div>
  </div>
</template>
