<script setup lang="ts">
const { data: page } = await useAsyncData('faq', () => queryCollection('faq').first())

const title = page.value?.title || 'Pertanyaan yang Sering Diajukan'
const description = page.value?.description || 'Semua yang perlu Anda ketahui tentang program.'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

defineOgImageComponent('Saas')
</script>

<template>
  <UMain v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      class="pb-8"
    />

    <UContainer class="pb-24">
      <div class="max-w-3xl mx-auto">
        <UAccordion
          :items="page.items"
          multiple
          :default-value="['0']"
          :ui="{
            root: 'space-y-4',
            item: 'faq-item border border-default rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:bg-white/[0.02]',
            trigger: 'faq-trigger text-lg font-semibold py-5 px-6 hover:no-underline text-highlighted group transition-transform duration-300 hover:translate-x-1',
            body: 'text-muted px-6 pb-6 text-base leading-relaxed'
          }"
        >
          <template #body="{ item }">
            <div class="whitespace-pre-wrap">
              {{ item.content }}
            </div>
          </template>
        </UAccordion>
      </div>

      <UPageSection
        title="Masih punya pertanyaan lainnya?"
        description="Jika Anda tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi kami."
        class="mt-32 border-t border-default pt-24"
      >
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
          <UButton
            label="Hubungi Kami"
            to="https://discord.gg/your-invite"
            target="_blank"
            icon="i-simple-icons-discord"
            size="xl"
            color="primary"
            class="rounded-full px-10 py-4 font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
          />
          <UButton
            label="Baca Dokumentasi"
            to="/docs"
            variant="ghost"
            icon="i-lucide-book-open"
            size="xl"
            class="rounded-full px-10 py-4 hover:bg-white/10 transition-colors"
          />
        </div>
      </UPageSection>
    </UContainer>
  </UMain>
</template>
