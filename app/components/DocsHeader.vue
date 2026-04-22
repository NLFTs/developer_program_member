<script setup lang="ts">
const route = useRoute()

const frameworks = computed(() => [
  {
    label: 'Nuxt',
    to: '/docs/nuxt/getting-started',
    icon: 'i-simple-icons-nuxtdotjs',
    active: route.path.startsWith('/docs/nuxt')
  },
  {
    label: 'Laravel',
    to: '/docs/laravel/getting-started',
    icon: 'i-simple-icons-laravel',
    active: route.path.startsWith('/docs/laravel')
  },
  {
    label: 'HTML',
    to: '/docs/html/getting-started',
    icon: 'i-simple-icons-html5',
    active: route.path.startsWith('/docs/html')
  },
  {
    label: 'CSS',
    to: '/docs/css/getting-started',
    icon: 'i-simple-icons-css3',
    active: route.path.startsWith('/docs/css')
  },
  {
    label: 'JavaScript',
    to: '/docs/js/getting-started',
    icon: 'i-simple-icons-javascript',
    active: route.path.startsWith('/docs/js')
  },
  {
    label: 'TypeScript',
    to: '/docs/ts/getting-started',
    icon: 'i-simple-icons-typescript',
    active: route.path.startsWith('/docs/ts')
  },
  {
    label: 'Next.js',
    to: '/docs/next.js/getting-started',
    icon: 'i-simple-icons-nextdotjs',
    active: route.path.startsWith('/docs/next.js')
  },
  {
    label: 'MongoDB',
    to: '/docs/mongodb/getting-started',
    icon: 'i-simple-icons-mongodb',
    active: route.path.startsWith('/docs/mongodb')
  },
  {
    label: 'Java',
    to: '/docs/java/getting-started',
    icon: 'i-lucide-coffee',
    active: route.path.startsWith('/docs/java')
  }
])
</script>

<template>
  <div class="border-b border-white/5 bg-background/75 backdrop-blur-md shadow-sm sticky top-[--header-height] z-40">
    <UContainer>
      <div class="flex items-center gap-2 py-2 overflow-x-auto no-scrollbar flex-nowrap whitespace-nowrap">
        <NuxtLink
          v-for="framework in frameworks"
          :key="framework.label"
          :to="framework.to"
          class="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all flex-shrink-0 border border-transparent"
          :class="[
            framework.active
              ? 'bg-primary/10 text-primary border-primary/20'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          ]"
        >
          <UIcon
            :name="framework.icon"
            class="w-3.5 h-3.5"
          />
          {{ framework.label }}
        </NuxtLink>
      </div>
    </UContainer>
  </div>
</template>
