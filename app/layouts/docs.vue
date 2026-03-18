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
            <UPageAside class="border-r border-neutral-200/40 dark:border-neutral-800/60">
              <template #top>
                <UContentSearchButton :collapsed="false" />
              </template>

              <div class="flex justify-center">
                <div class="w-full max-w-[280px]">
                  <UContentNavigation
                    :navigation="filteredNavigation"
                    highlight
                  />
                </div>
              </div>
            </UPageAside>
          </template>

          <slot />
        </UPage>
      </UContainer>
    </UMain>

    <AppFooter />
  </div>
</template>
