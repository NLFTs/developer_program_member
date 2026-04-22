<script setup lang="ts">
const { data: page } = await useAsyncData('events', () => queryCollection('events').first())

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

defineOgImageComponent('Saas')
</script>

<template>
  <div v-if="page" class="bg-black min-h-screen text-white">
    <UPageHero
      :title="page.hero.title"
      :description="page.hero.description"
      class="border-b border-white/5"
    />

    <UContainer class="py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UCard
          v-for="(event, index) in page.events"
          :key="index"
          class="bg-neutral-900/50 border-neutral-800 hover:border-sky-500/50 transition-all group overflow-hidden"
        >
          <template #header>
            <div class="relative aspect-video -m-4 overflow-hidden">
              <img 
                :src="event.image" 
                :alt="event.title" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              >
              <div class="absolute top-4 left-4">
                <UBadge color="sky" variant="solid" size="sm" class="font-bold">
                  {{ event.date }}
                </UBadge>
              </div>
            </div>
          </template>

          <div class="space-y-4">
            <h3 class="text-xl font-bold tracking-tight text-white group-hover:text-sky-400 transition-colors">
              {{ event.title }}
            </h3>
            <p class="text-neutral-400 text-sm">
              {{ event.description }}
            </p>
            <div class="flex items-center gap-2 text-sm text-neutral-500">
              <UIcon name="i-lucide-map-pin" class="w-4 h-4" />
              {{ event.location }}
            </div>
            <UButton 
              label="Pelajari Lebih Lanjut" 
              :to="event.link"
              color="sky"
              size="sm"
              class="w-full"
            />
          </div>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>
