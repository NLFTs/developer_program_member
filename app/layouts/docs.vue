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
            <UPageAside>
              <template #top>
                <UContentSearchButton :collapsed="false" />
              </template>

              <UContentNavigation
                :navigation="filteredNavigation"
                highlight
              />
            </UPageAside>
          </template>

          <slot />
        </UPage>
      </UContainer>
    </UMain>

    <AppFooter />
  </div>
</template>
