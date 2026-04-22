<script setup lang="ts">
useSeoMeta({
  title: 'About NLFTs - Developer Program',
  ogTitle: 'About NLFTs - Developer Program',
  description: 'Learn about NLFTs mission to empower developers worldwide with innovative tools, frameworks, and community-driven solutions.',
  ogDescription: 'Learn about NLFTs mission to empower developers worldwide with innovative tools, frameworks, and community-driven solutions.'
})

const stats = [
  { label: 'Active Developers', value: '10,000+', note: '(Example)' },
  { label: 'Open Source Projects', value: '50+', note: '(Example)' },
  { label: 'Countries Reached', value: '75+', note: '(Example)' },
  { label: 'GitHub Stars', value: '25,000+', note: '(Example)' }
]

const team = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    bio: 'Former senior engineer at major tech companies, passionate about developer experience.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    note: '(Example)'
  },
  {
    name: 'Sarah Kim',
    role: 'CTO',
    bio: 'Full-stack developer with expertise in modern web technologies and architecture.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    note: '(Example)'
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of Community',
    bio: 'Developer advocate focused on building inclusive and supportive developer communities.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    note: '(Example)'
  }
]

const values = [
  {
    title: 'Open Source First',
    description: 'We believe in the power of open source to drive innovation and create better tools for everyone.',
    icon: 'i-lucide-heart'
  },
  {
    title: 'Developer Experience',
    description: 'Every tool we build is designed with developer happiness and productivity in mind.',
    icon: 'i-lucide-smile'
  },
  {
    title: 'Community Driven',
    description: 'Our community shapes our roadmap and helps us build tools that developers actually need.',
    icon: 'i-lucide-users'
  },
  {
    title: 'Quality & Performance',
    description: 'We maintain high standards for code quality, performance, and reliability in everything we ship.',
    icon: 'i-lucide-zap'
  }
]
</script>

<template>
  <UMain class="bg-black text-white py-16">
    <UContainer>
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <section class="text-center mb-16">
          <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            About NLFTs
          </h1>
          <p class="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            We're on a mission to empower developers worldwide with innovative tools, frameworks, and community-driven solutions that make building software more enjoyable and efficient.
          </p>
        </section>

        <!-- Stats -->
        <section class="mb-16">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div
              v-for="stat in stats"
              :key="stat.label"
            >
              <div class="text-3xl font-bold text-white mb-2">
                {{ stat.value }}
              </div>
              <div class="text-sm text-neutral-400">
                {{ stat.label }}
              </div>
              <div class="text-xs text-neutral-500 mt-1">
                {{ stat.note }}
              </div>
            </div>
          </div>
        </section>

        <!-- Mission -->
        <section class="mb-16">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold mb-6">
                Our Mission
              </h2>
              <p class="text-neutral-300 mb-4 leading-relaxed">
                At NLFTs, we believe that great software starts with great developer tools. Our mission is to create an ecosystem of modern, efficient, and delightful tools that help developers build better applications faster.
              </p>
              <p class="text-neutral-300 mb-4 leading-relaxed">
                We're not just building tools – we're building a community. A place where developers can learn, share, and grow together while pushing the boundaries of what's possible in web development.
              </p>
              <p class="text-neutral-300 leading-relaxed">
                From our open-source frameworks to our developer program, everything we do is designed to make the developer experience more productive and enjoyable.
              </p>
            </div>
            <div class="bg-neutral-900 rounded-lg p-8">
              <h3 class="text-xl font-semibold mb-4">
                What We Do
              </h3>
              <ul class="space-y-3 text-neutral-300">
                <li class="flex items-center gap-3">
                  <UIcon
                    name="i-lucide-check"
                    class="w-5 h-5 text-green-400"
                  />
                  Build open-source developer tools
                </li>
                <li class="flex items-center gap-3">
                  <UIcon
                    name="i-lucide-check"
                    class="w-5 h-5 text-green-400"
                  />
                  Foster developer communities
                </li>
                <li class="flex items-center gap-3">
                  <UIcon
                    name="i-lucide-check"
                    class="w-5 h-5 text-green-400"
                  />
                  Provide educational resources
                </li>
                <li class="flex items-center gap-3">
                  <UIcon
                    name="i-lucide-check"
                    class="w-5 h-5 text-green-400"
                  />
                  Support emerging technologies
                </li>
                <li class="flex items-center gap-3">
                  <UIcon
                    name="i-lucide-check"
                    class="w-5 h-5 text-green-400"
                  />
                  Connect developers globally
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Values -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div
              v-for="value in values"
              :key="value.title"
              class="border border-neutral-800 rounded-lg p-6"
            >
              <div class="flex items-center gap-4 mb-4">
                <div class="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <UIcon
                    :name="value.icon"
                    class="w-5 h-5 text-blue-400"
                  />
                </div>
                <h3 class="text-lg font-semibold">
                  {{ value.title }}
                </h3>
              </div>
              <p class="text-neutral-400 leading-relaxed">
                {{ value.description }}
              </p>
            </div>
          </div>
        </section>

        <!-- Team -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div
              v-for="member in team"
              :key="member.name"
              class="text-center"
            >
              <img
                :src="member.avatar"
                :alt="member.name"
                class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                loading="lazy"
              >
              <h3 class="text-lg font-semibold mb-1">
                {{ member.name }}
              </h3>
              <p class="text-blue-400 text-sm mb-3">
                {{ member.role }}
              </p>
              <p class="text-neutral-400 text-sm leading-relaxed">
                {{ member.bio }}
              </p>
              <p class="text-xs text-neutral-500 mt-2">
                {{ member.note }}
              </p>
            </div>
          </div>
        </section>

        <!-- History -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-center mb-12">
            Our Journey
          </h2>
          <div class="space-y-8">
            <div class="flex gap-6">
              <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                <span class="text-blue-400 font-bold">2022</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">
                  The Beginning
                </h3>
                <p class="text-neutral-400">
                  NLFTs was founded with a simple idea: make developer tools that developers actually want to use. We started with a small team and big dreams.
                </p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                <span class="text-blue-400 font-bold">2023</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">
                  Community Growth
                </h3>
                <p class="text-neutral-400">
                  Our first open-source projects gained traction, and we launched the developer program to support our growing community of contributors.
                </p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                <span class="text-blue-400 font-bold">2024</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">
                  Global Impact
                </h3>
                <p class="text-neutral-400">
                  Today, NLFTs tools are used by thousands of developers worldwide, and our community continues to grow and innovate together.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section class="text-center bg-neutral-900 rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4">
            Join Our Mission
          </h2>
          <p class="text-neutral-400 mb-6">
            Ready to be part of something bigger? Join our community and help shape the future of developer tools.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <UButton
              label="Join Community"
              color="white"
              size="lg"
              to="/devlovers"
            />
            <UButton
              label="Contribute"
              color="neutral"
              size="lg"
              external
              to="https://github.com/nlfts"
            />
          </div>
        </section>
      </div>
    </UContainer>
  </UMain>
</template>
