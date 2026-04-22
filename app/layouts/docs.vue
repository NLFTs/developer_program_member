<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const route = useRoute()
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const filteredNavigation = computed(() => {
  const currentFramework = route.path.split('/')[2] // 'nuxt' or 'laravel'
  if (!currentFramework || !navigation?.value) return []

  return navigation.value.find(item => item.path === `/docs/${currentFramework}`)?.children || []
})
</script>

<template>
  <div>
    <AppHeader />
    <DocsHeader />

    <UMain>
      <UContainer>
        <UPage>
          <template #left>
            <UPageAside class="hidden lg:block border-r border-white/5 pr-4">
              <template #top>
                <div class="mb-6">
                  <UContentSearchButton
                    :collapsed="false"
                    class="w-full"
                  />
                </div>
              </template>

              <UContentNavigation
                :navigation="filteredNavigation"
                highlight
                class="text-sm"
              />
            </UPageAside>
          </template>

          <div class="py-6 sm:py-8 lg:py-10">
            <slot />
          </div>
        </UPage>
      </UContainer>
    </UMain>

    <AppFooter />
  </div>
</template>
