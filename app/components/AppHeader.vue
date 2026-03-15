<script setup lang="ts">
const route = useRoute()
const { user, loginWithPopup, logout } = useGithubAuth()

const items = computed(() => [
  { 
    label: 'Product', 
    to: '/product' 
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
      <div v-if="user" class="flex items-center gap-4">
        <UDropdownMenu
          :items="[{ label: 'Logout', icon: 'i-lucide-log-out', onSelect: logout }]"
        >
          <UAvatar
            :src="user.user_metadata.avatar_url"
            :alt="user.user_metadata.full_name"
            size="sm"
            class="cursor-pointer border border-white/10"
          />
        </UDropdownMenu>
      </div>
      <UButton
        v-else
        label="login"
        color="primary"
        size="md"
        class="rounded-full px-6 font-semibold"
        trailing-icon="i-lucide-user"
        @click="loginWithPopup"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />

      <USeparator class="my-6" />

      <div v-if="user" class="flex items-center gap-4 mb-3">
        <UAvatar
          :src="user.user_metadata.avatar_url"
          size="md"
        />
        <div class="flex-1">
          <p class="text-sm font-medium">{{ user.user_metadata.full_name }}</p>
          <p class="text-xs text-neutral-400">{{ user.email }}</p>
        </div>
        <UButton
          icon="i-lucide-log-out"
          color="neutral"
          variant="ghost"
          @click="logout"
        />
      </div>
      <UButton
        v-else
        label="login"
        color="primary"
        block
        class="mb-3"
        @click="loginWithPopup"
      />
    </template>
  </UHeader>
</template>
