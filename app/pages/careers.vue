<script setup lang="ts">
useSeoMeta({
  title: 'Careers - NLFTs Developer Program',
  ogTitle: 'Join Our Team - NLFTs Developer Program',
  description: 'Join the NLFTs team and help build the future of developer tools and frameworks. Explore career opportunities in our growing organization.',
  ogDescription: 'Join the NLFTs team and help build the future of developer tools and frameworks. Explore career opportunities in our growing organization.'
})
</script>

<template>
  <UMain class="bg-black text-white py-16">
    <UContainer>
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <section class="text-center mb-16">
          <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Join Our Team
          </h1>
          <p class="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Help us build the future of developer tools and frameworks. We're looking for passionate developers who want to make an impact.
          </p>
        </section>

        <!-- Current Openings -->
        <section class="mb-16">
          <h2 class="text-2xl font-bold mb-8">Current Openings</h2>
          <div class="space-y-6">
            <div class="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="text-xl font-semibold mb-2">Senior Frontend Developer</h3>
                  <p class="text-neutral-400">Remote • Full-time</p>
                </div>
                <span class="text-sm bg-green-500/10 text-green-400 px-3 py-1 rounded-full">Open</span>
              </div>
              <p class="text-neutral-300 mb-4">
                Lead the development of our core framework components and developer tools. Experience with Vue.js, Nuxt.js, and TypeScript required.
              </p>
              <UButton label="Apply Now" color="white" size="sm" />
            </div>

            <div class="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="text-xl font-semibold mb-2">Developer Relations Engineer</h3>
                  <p class="text-neutral-400">Remote • Full-time</p>
                </div>
                <span class="text-sm bg-green-500/10 text-green-400 px-3 py-1 rounded-full">Open</span>
              </div>
              <p class="text-neutral-300 mb-4">
                Build relationships with our developer community, create technical content, and represent NLFTs at conferences and events.
              </p>
              <UButton label="Apply Now" color="white" size="sm" />
            </div>

            <div class="border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="text-xl font-semibold mb-2">Technical Writer</h3>
                  <p class="text-neutral-400">Remote • Part-time</p>
                </div>
                <span class="text-sm bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full">Soon</span>
              </div>
              <p class="text-neutral-300 mb-4">
                Create comprehensive documentation, tutorials, and guides for our developer tools and frameworks.
              </p>
              <UButton label="Coming Soon" color="neutral" size="sm" disabled />
            </div>
          </div>
        </section>

        <!-- Why Join Us -->
        <section class="mb-16">
          <h2 class="text-2xl font-bold mb-8">Why Join NLFTs?</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Remote-First Culture</h3>
              <p class="text-neutral-400">Work from anywhere in the world with flexible hours and a focus on results, not location.</p>
            </div>
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Open Source Impact</h3>
              <p class="text-neutral-400">Contribute to tools used by thousands of developers worldwide and make a lasting impact.</p>
            </div>
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Learning & Growth</h3>
              <p class="text-neutral-400">Continuous learning opportunities, conference attendance, and skill development support.</p>
            </div>
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Competitive Benefits</h3>
              <p class="text-neutral-400">Competitive salary, health benefits, and equity participation in our growing company.</p>
            </div>
          </div>
        </section>

        <!-- Contact -->
        <section class="text-center">
          <h2 class="text-2xl font-bold mb-4">Don't See a Perfect Fit?</h2>
          <p class="text-neutral-400 mb-6">
            We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
          </p>
          <UButton label="Send Resume" color="white" size="lg" to="/contact" />
        </section>
      </div>
    </UContainer>
  </UMain>
</template>