<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('index').first())
const { data: productsPage } = await useAsyncData('products', () => queryCollection('products').first())

const showcasesItems = computed(() => productsPage.value?.items || [])

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  titleTemplate: '',
  title: 'Anggota Program Developer NLFTs - Beranda',
  ogTitle: 'Program Developer NLFTs',
  description: 'Program eksklusif untuk para developer yang ingin berkontribusi, berkolaborasi, dan membangun produk berkelas dunia bersama komunitas terbaik NLFTs.',
  ogDescription: 'Program eksklusif untuk para developer yang ingin berkontribusi, berkolaborasi, dan membangun produk berkelas dunia bersama komunitas terbaik NLFTs.',
  twitterCard: 'summary_large_image',
})

defineOgImageComponent('NuxtSeo', {
  title: 'Program Developer NLFTs',
  description: 'Program eksklusif untuk para developer yang ingin berkontribusi, berkolaborasi, dan membangun produk berkelas dunia.',
  theme: '#000000',
  colorMode: 'dark'
})

const { gsap, setup } = useGsap()

const communityStats = [
  { label: 'GitHub Stars', value: '75+' },
  { label: 'Download NPM Mingguan', value: '34+' },
  { label: 'Pemimpin Komunitas', value: '98' }
]

const communityTestimonials = [
  {
    quote: "Setiap kali saya menduga telah mencapai batas kemampuan ku. ternyata salah :)",
    author: 'haitsam haidar',
    handle: '@kksam-ctruk'
  },
  {
    quote: "wow, wow, wow, wow, wow, wow, Tux adalah..... Nuxt .... Wow 🤤🤯",
    author: 'Nairha Saqina',
    handle: '@nairhacan'
  },
  {
    quote: "Para mentor dalam program ini membantu kami menyusun modul agar dapat berkembang. Saya senang melihat lebih banyak pengembang bergabung dalam lingkaran anggota.",
    author: 'vira',
    handle: '@rhavira_'
  },
]
</script>

<template>
  <div v-if="page">
    <!-- Hero Section -->
    <UPageHero
      :title="page.hero?.title"
      :description="page.hero?.description"
      :links="page.hero?.links"
      class="border-b border-white/5"
    />

    <!-- Features Sections -->
    <template v-for="(section, index) in page.sections" :key="index">
      <UPageSection
        :title="section.title"
        :description="section.description"
        :orientation="section.orientation"
        :reverse="section.reverse"
      >
        <UPageGrid v-if="section.features">
          <UPageCard
            v-for="feature in section.features"
            :key="feature.name"
            :title="feature.name"
            :description="feature.description"
            :icon="feature.icon"
          />
        </UPageGrid>
      </UPageSection>
    </template>

    <!-- Features Grid -->
    <UPageSection
      :title="page.features?.title"
      :description="page.features?.description"
    >
      <UPageGrid>
        <UPageCard
          v-for="feature in page.features?.items"
          :key="feature.title"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
        />
      </UPageGrid>
    </UPageSection>

    <!-- Testimonials -->
    <UPageSection
      :title="page.testimonials?.title"
      :description="page.testimonials?.description"
      :headline="page.testimonials?.headline"
    >
      <UPageGrid>
        <UPageCard
          v-for="testimonial in page.testimonials?.items"
          :key="testimonial.quote"
        >
          <template #default>
            <blockquote class="text-base text-gray-600 dark:text-gray-300 mb-4">
              "{{ testimonial.quote }}"
            </blockquote>
            <div class="flex items-center gap-3">
              <img
                :src="testimonial.user.avatar.src"
                :alt="testimonial.user.name"
                class="w-10 h-10 rounded-full"
              />
              <div>
                <p class="font-semibold text-sm">{{ testimonial.user.name }}</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">{{ testimonial.user.description }}</p>
              </div>
            </div>
          </template>
        </UPageCard>
      </UPageGrid>
    </UPageSection>

    <!-- CTA Section -->
    <UPageSection
      :title="page.cta?.title"
      :description="page.cta?.description"
      class="text-center"
    >
      <div class="flex flex-wrap justify-center gap-4">
        <UButton
          v-for="link in page.cta?.links"
          :key="link.label"
          :label="link.label"
          :to="link.to"
          :target="link.target"
          :icon="link.icon"
          :variant="link.variant"
          size="lg"
        />
      </div>
    </UPageSection>
  </div>
</template>
