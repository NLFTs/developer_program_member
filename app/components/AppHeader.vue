<script setup lang="ts">
const route = useRoute()

const items = computed(() => [
  { 
    label: 'Product', 
    to: '/product' 
  },
  {
    label: 'Use Cases',
    children: [
      { label: 'Professional', to: '/use-cases/professional', icon: 'i-lucide-users', description: 'Enterprise-grade solutions' },
      { label: 'Frontend', to: '/use-cases/frontend', icon: 'i-lucide-code-2', description: 'Beautiful user interfaces' },
      { label: 'Fullstack', to: '/use-cases/fullstack', icon: 'i-lucide-layers', description: 'Complete web applications' }
    ]
  },
  { 
    label: 'Pricing', 
    to: '/pricing' 
  },
  { 
    label: 'Blog', 
    to: '/blog' 
  },
  {
    label: 'Resources',
    children: [
      { label: 'Docs', to: '/docs', icon: 'i-lucide-book-open' },
      { label: 'FAQ', to: '/faq', icon: 'i-lucide-help-circle' },
      { label: 'DevLovers', to: '/devlovers', icon: 'i-lucide-heart' },
      { label: 'Grantara', to: '/grantara', icon: 'i-lucide-award' }
    ]
  }
])
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/" class="flex items-center gap-4">
        <AppLogo class="w-auto h-8 shrink-0" />
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
      class="hidden lg:flex"
    />

    <template #right>
      <UButton
        label="login"
        color="primary"
        size="md"
        class="rounded-full px-6 font-semibold"
        trailing-icon="i-lucide-user"
        to="/login"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />

      <USeparator class="my-6" />

      <UButton
        label="login"
        color="primary"
        to="/login"
        block
        class="mb-3"
      />
    </template>
  </UHeader>
</template>
