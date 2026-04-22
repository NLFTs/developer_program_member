<script setup lang="ts">
useSeoMeta({
  title: 'DevLovers Community - NLFTs Developer Program',
  ogTitle: 'DevLovers Community - NLFTs Developer Program',
  description: 'Join the DevLovers community - a passionate group of developers building the future with NLFTs tools and frameworks.',
  ogDescription: 'Join the DevLovers community - a passionate group of developers building the future with NLFTs tools and frameworks.'
})
</script>

<template>
  <UMain class="bg-black text-white py-16">
    <UContainer>
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <section class="text-center mb-16">
          <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            DevLovers Community
          </h1>
          <p class="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            A passionate community of developers who love building amazing things with modern tools and frameworks.
          </p>
        </section>

        <!-- Community Stats -->
        <section class="mb-16">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-3xl font-bold text-white mb-2">2,500+</div>
              <div class="text-sm text-neutral-400">Active Members</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-white mb-2">150+</div>
              <div class="text-sm text-neutral-400">Projects Built</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-white mb-2">50+</div>
              <div class="text-sm text-neutral-400">Countries</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-white mb-2">24/7</div>
              <div class="text-sm text-neutral-400">Support</div>
            </div>
          </div>
        </section>

        <!-- What We Do -->
        <section class="mb-16">
          <h2 class="text-2xl font-bold mb-8">What We Do</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4">Weekly Meetups</h3>
              <p class="text-neutral-400">
                Join our weekly virtual meetups where we discuss the latest in web development, share projects, and learn from each other.
              </p>
            </div>
            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4">Code Reviews</h3>
              <p class="text-neutral-400">
                Get feedback on your code from experienced developers and help others improve their skills through collaborative reviews.
              </p>
            </div>
            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4">Open Source Projects</h3>
              <p class="text-neutral-400">
                Contribute to community-driven open source projects and build tools that benefit the entire developer ecosystem.
              </p>
            </div>
            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4">Learning Resources</h3>
              <p class="text-neutral-400">
                Access curated learning materials, tutorials, and workshops designed to help you grow as a developer.
              </p>
            </div>
          </div>
        </section>

        <!-- Join Community -->
        <section class="text-center bg-neutral-900 rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4">Ready to Join?</h2>
          <p class="text-neutral-400 mb-6">
            Connect with like-minded developers and start building amazing things together.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <UButton label="Join Discord" color="white" size="lg" external to="https://discord.gg/nlfts" />
            <UButton label="Follow on X" color="neutral" size="lg" external to="https://x.com/nlfts" />
            <UButton label="GitHub" color="neutral" size="lg" external to="https://github.com/nlfts" />
          </div>
        </section>
      </div>
    </UContainer>
  </UMain>
</template>