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
            <p class="text-neutral-400 text-sm line-clamp-2">
              {{ event.description }}
            </p>
            <div class="flex items-center gap-2 text-xs text-neutral-500">
              <UIcon name="i-lucide-map-pin" class="w-4 h-4 text-sky-500" />
              {{ event.location }}
            </div>
          </div>

          <template #footer>
            <UButton
              :to="event.link"
              block
              color="sky"
              variant="soft"
              label="Learn More"
              trailing-icon="i-lucide-arrow-right"
              class="group-hover:bg-sky-500 group-hover:text-white transition-all"
            />
          </template>
        </UCard>
      </div>
    </UContainer>

    <UPageSection
      :title="page.faq.title"
      :description="page.faq.description"
      class="border-t border-white/5"
    >
      <UAccordion
        :items="page.faq.items"
        class="max-w-3xl mx-auto"
        variant="ghost"
        :ui="{
          trigger: 'text-lg font-semibold text-white/90 hover:text-sky-400 py-4',
          body: 'text-neutral-400 pb-6'
        }"
      />
    </UPageSection>
  </div>
</template>
