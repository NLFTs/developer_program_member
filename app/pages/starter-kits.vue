<script setup lang="ts">
useSeoMeta({
  title: 'Starter Kits - NLFTs Developer Program',
  ogTitle: 'Starter Kits - NLFTs Developer Program',
  description: 'Ready-to-use starter kits and templates to jumpstart your development with NLFTs tools and frameworks.',
  ogDescription: 'Ready-to-use starter kits and templates to jumpstart your development with NLFTs tools and frameworks.'
})

const starterKits = [
  {
    name: 'Nuxt SaaS Starter',
    description: 'Complete SaaS application template with authentication, payments, and dashboard.',
    tech: ['Nuxt 3', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop',
    github: 'https://github.com/nlfts/nuxt-saas-starter',
    demo: 'https://nuxt-saas-starter.nlfts.dev'
  },
  {
    name: 'Vue Component Library',
    description: 'Modern component library with Storybook documentation and testing setup.',
    tech: ['Vue 3', 'Vite', 'Storybook', 'Vitest'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop',
    github: 'https://github.com/nlfts/vue-component-lib',
    demo: 'https://vue-components.nlfts.dev'
  },
  {
    name: 'API Backend Starter',
    description: 'RESTful API with authentication, database, and deployment configuration.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop',
    github: 'https://github.com/nlfts/api-starter',
    demo: 'https://api-starter.nlfts.dev'
  },
  {
    name: 'E-commerce Template',
    description: 'Full-featured e-commerce solution with cart, checkout, and admin panel.',
    tech: ['Nuxt 3', 'Stripe', 'Prisma', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
    github: 'https://github.com/nlfts/ecommerce-template',
    demo: 'https://ecommerce.nlfts.dev'
  },
  {
    name: 'Blog & CMS Starter',
    description: 'Content management system with markdown support and SEO optimization.',
    tech: ['Nuxt 3', 'Nuxt Content', 'MDC', 'Algolia'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d3?w=400&h=200&fit=crop',
    github: 'https://github.com/nlfts/blog-cms-starter',
    demo: 'https://blog-cms.nlfts.dev'
  },
  {
    name: 'Dashboard Template',
    description: 'Admin dashboard with charts, tables, and user management features.',
    tech: ['Vue 3', 'Chart.js', 'Pinia', 'Vite'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
    github: 'https://github.com/nlfts/dashboard-template',
    demo: 'https://dashboard.nlfts.dev'
  }
]
</script>

<template>
  <UMain class="bg-black text-white py-16">
    <UContainer>
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <section class="text-center mb-16">
          <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Starter Kits
          </h1>
          <p class="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Ready-to-use templates and starter kits to jumpstart your next project with modern tools and best practices.
          </p>
        </section>

        <!-- Starter Kits Grid -->
        <section class="mb-16">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="kit in starterKits" 
              :key="kit.name"
              class="group border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-all duration-300"
            >
              <!-- Image -->
              <div class="aspect-video overflow-hidden">
                <img 
                  :src="kit.image" 
                  :alt="kit.name"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <!-- Content -->
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-3">{{ kit.name }}</h3>
                <p class="text-neutral-400 text-sm mb-4 leading-relaxed">
                  {{ kit.description }}
                </p>

                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-2 mb-6">
                  <span 
                    v-for="tech in kit.tech" 
                    :key="tech"
                    class="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded-full"
                  >
                    {{ tech }}
                  </span>
                </div>

                <!-- Actions -->
                <div class="flex gap-3">
                  <UButton 
                    label="GitHub" 
                    color="neutral" 
                    size="sm" 
                    :to="kit.github"
                    external
                    class="flex-1"
                  />
                  <UButton 
                    label="Demo" 
                    color="white" 
                    size="sm" 
                    :to="kit.demo"
                    external
                    class="flex-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Getting Started -->
        <section class="mb-16">
          <h2 class="text-2xl font-bold mb-8 text-center">How to Use Starter Kits</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span class="text-blue-400 font-bold text-xl">1</span>
              </div>
              <h3 class="font-semibold mb-2">Clone Repository</h3>
              <p class="text-neutral-400 text-sm">
                Clone the starter kit repository to your local machine using Git.
              </p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span class="text-blue-400 font-bold text-xl">2</span>
              </div>
              <h3 class="font-semibold mb-2">Install Dependencies</h3>
              <p class="text-neutral-400 text-sm">
                Run npm install or yarn install to install all required dependencies.
              </p>
            </div>
            <div class="text-center">
              <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span class="text-blue-400 font-bold text-xl">3</span>
              </div>
              <h3 class="font-semibold mb-2">Start Building</h3>
              <p class="text-neutral-400 text-sm">
                Customize the template and start building your amazing project.
              </p>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section class="text-center bg-neutral-900 rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4">Need a Custom Starter Kit?</h2>
          <p class="text-neutral-400 mb-6">
            Can't find what you're looking for? We can create a custom starter kit tailored to your specific needs.
          </p>
          <UButton label="Request Custom Kit" color="white" size="lg" to="/contact" />
        </section>
      </div>
    </UContainer>
  </UMain>
</template>