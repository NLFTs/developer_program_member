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
  }
])
</script>

<template>
  <div class="border-b border-default bg-background/75 backdrop-blur shadow-sm sticky top-[--header-height] z-40">
    <UContainer>
      <div class="flex items-center gap-4 h-12">
        <NuxtLink
          v-for="framework in frameworks"
          :key="framework.label"
          :to="framework.to"
          class="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
          :class="[
            framework.active 
              ? 'bg-primary/10 text-primary' 
              : 'text-muted hover:text-default hover:bg-neutral/5'
          ]"
        >
          <UIcon :name="framework.icon" class="w-4 h-4" />
          {{ framework.label }}
        </NuxtLink>
      </div>
    </UContainer>
  </div>
</template>
