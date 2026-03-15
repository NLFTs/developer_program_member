<script setup lang="ts">
const { data: page } = await useAsyncData('products', () => queryCollection('products').first())

const title = page.value?.title || 'Templates'
const description = page.value?.description || 'Refined starters for modern applications.'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

const selectedCategories = ref<string[]>([])
const searchQuery = ref('')

const filteredItems = computed(() => {
  if (!page.value) return []
  return page.value.items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = selectedCategories.value.length === 0 || selectedCategories.value.includes(item.category)
    return matchesSearch && matchesCategory
  })
})

function toggleCategory(cat: string) {
  const index = selectedCategories.value.indexOf(cat)
  if (index === -1) {
    selectedCategories.value.push(cat)
  } else {
    selectedCategories.value.splice(index, 1)
  }
}

function clearFilters() {
  selectedCategories.value = []
  searchQuery.value = ''
}
</script>

<template>
  <UMain v-if="page" class="bg-black text-white py-16">
    <UContainer>
      <!-- Refined Header -->
      <section class="max-w-3xl mb-20">
        <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          {{ page.title }}
        </h1>
        <p class="text-neutral-500 text-lg leading-relaxed max-w-xl">
          {{ page.description }}
        </p>
      </section>

      <!-- Minimalist Filter & Grid -->
      <div class="grid lg:grid-cols-[200px_1fr] gap-12">
        <!-- Compact Sidebar -->
        <aside class="space-y-10">
          <div>
            <h3 class="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 mb-6 font-mono">
              Filters
            </h3>
            <div class="space-y-3">
              <button 
                v-for="cat in page.categories" 
                :key="cat"
                @click="toggleCategory(cat)"
                class="block text-sm transition-colors text-left w-full"
                :class="selectedCategories.includes(cat) ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'"
              >
                {{ cat }}
              </button>
            </div>
            
            <button 
              v-if="selectedCategories.length > 0 || searchQuery"
              @click="clearFilters" 
              class="mt-8 text-[10px] uppercase tracking-wider text-primary-500 hover:text-primary-400"
            >
              Reset All
            </button>
          </div>
        </aside>

        <!-- Tight Grid -->
        <div class="flex-1">
          <!-- Search -->
          <div class="mb-12">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search templates..." 
              class="w-full bg-transparent border-b border-neutral-900 pb-4 text-sm focus:outline-none focus:border-neutral-700 transition-colors placeholder:text-neutral-700"
            />
          </div>

          <div class="grid md:grid-cols-2 gap-x-12 gap-y-16">
            <div 
              v-for="item in filteredItems" 
              :key="item.slug"
              class="group block"
            >
              <!-- Image Container -->
              <div class="aspect-[16/10] overflow-hidden bg-neutral-900 rounded-sm mb-6 border border-neutral-900 group-hover:border-neutral-800 transition-colors">
                <img 
                  v-if="item.thumbnail" 
                  :src="item.thumbnail" 
                  :alt="item.name"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0"
                />
                <div v-else class="w-full h-full flex items-center justify-center text-neutral-800">
                  <UIcon name="i-lucide-package" class="w-12 h-12" />
                </div>
              </div>

              <!-- Content -->
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">{{ item.category }}</span>
                  <span v-if="item.priceType === 'paid'" class="text-[10px] font-mono text-white">{{ item.price }}</span>
                </div>
                
                <h3 class="text-lg font-semibold tracking-tight">{{ item.name }}</h3>
                <p class="text-sm text-neutral-500 leading-relaxed line-clamp-2">
                  {{ item.description }}
                </p>

                <!-- Actions -->
                <div class="flex items-center gap-4 pt-4">
                  <NuxtLink 
                    :to="item.priceType === 'paid' ? '/pricing' : `/product/${item.slug}`"
                    class="text-xs font-semibold py-2 px-4 bg-white text-black rounded-sm hover:bg-neutral-200 transition-colors"
                  >
                    {{ item.priceType === 'paid' ? 'Buy Now' : 'Get Started' }}
                  </NuxtLink>
                  <a 
                    :href="item.liveDemo" 
                    target="_blank"
                    class="text-xs text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    Demo
                    <UIcon name="i-lucide-arrow-up-right" class="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </UMain>
</template>

<style scoped>
.prose-invert {
  --tw-prose-body: #a1a1aa;
}
</style>
