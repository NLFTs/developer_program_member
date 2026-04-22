<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: post } = await useAsyncData(`guide-${slug}`, () => queryCollection('productGuides').path(`/product-guides/${slug}`).first())

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Guide not found' })
}

useSeoMeta({
  title: post.value.title,
  ogTitle: post.value.title,
  description: post.value.description,
  ogDescription: post.value.description
})
</script>

<template>
  <UContainer class="py-24 max-w-4xl">
    <UButton
      label="Kembali ke Showcase"
      icon="i-lucide-arrow-left"
      variant="ghost"
      to="/product"
      class="mb-12 text-muted hover:text-white -ml-2.5"
    />

    <article class="prose prose-invert prose-primary max-w-none">
      <ContentRenderer
        v-if="post"
        :value="post"
      />
    </article>

    <div class="mt-20 pt-10 border-t border-white/10">
      <div class="p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 text-center">
        <h3 class="text-2xl font-bold text-white mb-4">
          Butuh bantuan lebih lanjut?
        </h3>
        <p class="text-muted mb-8 max-w-md mx-auto">
          Tim developer kami siap membantu Anda mengimplementasikan template ini ke aplikasi Anda.
        </p>
        <UButton
          label="Hubungi Kami"
          to="/agency"
          color="primary"
          size="lg"
          class="rounded-xl px-8"
        />
      </div>
    </div>
  </UContainer>
</template>

<style scoped>
.text-muted {
  color: #a1a1aa;
}

:deep(.prose) {
  --tw-prose-invert-body: #a1a1aa;
  --tw-prose-invert-headings: #ffffff;
  --tw-prose-invert-links: var(--ui-primary);
  --tw-prose-invert-code: #ffffff;
}

:deep(.prose h1) {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 2rem;
}

:deep(.prose h2) {
  font-size: 1.875rem;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

:deep(.prose p) {
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

:deep(.prose pre) {
  background-color: #000 !important;
  border: 1px solid #262626;
  border-radius: 1rem;
  padding: 1.5rem;
}
</style>
