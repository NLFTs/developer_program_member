<script setup lang="ts">
useSeoMeta({
  title: 'Modules - NLFTs Developer Program',
  ogTitle: 'NLFTs Modules - Developer Tools & Components',
  description: 'Explore our collection of powerful modules and components designed to accelerate your development workflow.',
  ogDescription: 'Explore our collection of powerful modules and components designed to accelerate your development workflow.'
})

const modules = [
  {
    name: 'Authentication Module',
    description: 'Complete authentication solution with OAuth, JWT, and session management.',
    category: 'Security',
    version: '2.1.0',
    downloads: '15.2k',
    stars: 342,
    features: ['OAuth Integration', 'JWT Tokens', 'Session Management', 'Role-based Access'],
    npm: '@nlfts/auth',
    github: 'https://github.com/nlfts/auth-module'
  },
  {
    name: 'UI Components',
    description: 'Modern, accessible UI components built with Vue 3 and TypeScript.',
    category: 'UI/UX',
    version: '1.8.3',
    downloads: '28.7k',
    stars: 567,
    features: ['Accessible', 'Customizable', 'TypeScript', 'Dark Mode'],
    npm: '@nlfts/ui',
    github: 'https://github.com/nlfts/ui-components'
  },
  {
    name: 'Database ORM',
    description: 'Type-safe database ORM with migrations and query builder.',
    category: 'Database',
    version: '3.0.1',
    downloads: '9.8k',
    stars: 234,
    features: ['Type Safety', 'Migrations', 'Query Builder', 'Multiple DBs'],
    npm: '@nlfts/orm',
    github: 'https://github.com/nlfts/database-orm'
  },
  {
    name: 'API Client',
    description: 'Powerful HTTP client with automatic retries and caching.',
    category: 'Network',
    version: '1.5.2',
    downloads: '12.4k',
    stars: 189,
    features: ['Auto Retry', 'Caching', 'Interceptors', 'TypeScript'],
    npm: '@nlfts/api',
    github: 'https://github.com/nlfts/api-client'
  },
  {
    name: 'Form Validation',
    description: 'Comprehensive form validation with custom rules and async validation.',
    category: 'Forms',
    version: '2.3.0',
    downloads: '18.9k',
    stars: 423,
    features: ['Custom Rules', 'Async Validation', 'i18n Support', 'Vue Integration'],
    npm: '@nlfts/validation',
    github: 'https://github.com/nlfts/form-validation'
  },
  {
    name: 'State Management',
    description: 'Lightweight state management solution with DevTools support.',
    category: 'State',
    version: '1.2.4',
    downloads: '7.3k',
    stars: 156,
    features: ['DevTools', 'TypeScript', 'Plugins', 'SSR Support'],
    npm: '@nlfts/store',
    github: 'https://github.com/nlfts/state-management'
  }
]

const categories = ['All', 'Security', 'UI/UX', 'Database', 'Network', 'Forms', 'State']
const selectedCategory = ref('All')

const filteredModules = computed(() => {
  if (selectedCategory.value === 'All') return modules
  return modules.filter(module => module.category === selectedCategory.value)
})
</script>

<template>
  <UMain class="bg-black text-white py-16">
    <UContainer>
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <section class="text-center mb-16">
          <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            NLFTs Modules
          </h1>
          <p class="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Powerful, reusable modules designed to accelerate your development workflow and build better applications faster.
          </p>
        </section>

        <!-- Category Filter -->
        <section class="mb-12">
          <div class="flex flex-wrap justify-center gap-2">
            <button
              v-for="category in categories"
              :key="category"
              :class="[
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              ]"
              @click="selectedCategory = category"
            >
              {{ category }}
            </button>
          </div>
        </section>

        <!-- Modules Grid -->
        <section class="mb-16">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="module in filteredModules"
              :key="module.name"
              class="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-all duration-300 group"
            >
              <!-- Header -->
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h3 class="text-xl font-semibold mb-2">
                    {{ module.name }}
                  </h3>
                  <span class="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full">
                    {{ module.category }}
                  </span>
                </div>
                <div class="text-right text-sm text-neutral-400">
                  <div>v{{ module.version }}</div>
                </div>
              </div>

              <!-- Description -->
              <p class="text-neutral-400 text-sm mb-4 leading-relaxed">
                {{ module.description }}
              </p>

              <!-- Features -->
              <div class="mb-6">
                <div class="flex flex-wrap gap-1">
                  <span
                    v-for="feature in module.features.slice(0, 3)"
                    :key="feature"
                    class="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded"
                  >
                    {{ feature }}
                  </span>
                  <span
                    v-if="module.features.length > 3"
                    class="text-xs text-neutral-500 px-2 py-1"
                  >
                    +{{ module.features.length - 3 }} more
                  </span>
                </div>
              </div>

              <!-- Stats -->
              <div class="flex items-center gap-4 mb-6 text-sm text-neutral-400">
                <div class="flex items-center gap-1">
                  <UIcon
                    name="i-lucide-download"
                    class="w-4 h-4"
                  />
                  {{ module.downloads }}
                </div>
                <div class="flex items-center gap-1">
                  <UIcon
                    name="i-lucide-star"
                    class="w-4 h-4"
                  />
                  {{ module.stars }}
                </div>
              </div>

              <!-- Actions -->
              <div class="flex gap-2">
                <UButton
                  :label="module.npm"
                  color="white"
                  size="sm"
                  class="flex-1 text-xs"
                />
                <UButton
                  label="GitHub"
                  color="neutral"
                  size="sm"
                  :to="module.github"
                  external
                />
              </div>
            </div>
          </div>
        </section>

        <!-- Getting Started -->
        <section class="text-center bg-neutral-900 rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p class="text-neutral-400 mb-6">
            Install any module with npm or yarn and start building amazing applications.
          </p>
          <div class="bg-neutral-800 rounded-lg p-4 mb-6 text-left max-w-md mx-auto">
            <code class="text-green-400 text-sm">npm install @nlfts/ui</code>
          </div>
          <UButton
            label="View Documentation"
            color="white"
            size="lg"
            to="/docs"
          />
        </section>
      </div>
    </UContainer>
  </UMain>
</template>
