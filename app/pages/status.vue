<script setup lang="ts">
useSeoMeta({
  title: 'System Status - NLFTs Developer Program',
  ogTitle: 'System Status - NLFTs Developer Program',
  description: 'Real-time status of NLFTs services and infrastructure. Check current uptime and service availability.',
  ogDescription: 'Real-time status of NLFTs services and infrastructure. Check current uptime and service availability.'
})

// Mock status data - in real app this would come from monitoring service
const services = [
  { name: 'Website', status: 'operational', uptime: '99.9%' },
  { name: 'API', status: 'operational', uptime: '99.8%' },
  { name: 'Documentation', status: 'operational', uptime: '99.9%' },
  { name: 'CDN', status: 'operational', uptime: '99.7%' },
  { name: 'Database', status: 'operational', uptime: '99.9%' },
  { name: 'Authentication', status: 'operational', uptime: '99.8%' }
]

const incidents = [
  {
    date: '2024-12-15',
    title: 'Brief API slowdown resolved',
    status: 'resolved',
    description: 'API response times were elevated for 15 minutes due to increased traffic. Issue resolved by scaling infrastructure.'
  },
  {
    date: '2024-12-10',
    title: 'Scheduled maintenance completed',
    status: 'resolved',
    description: 'Planned database maintenance completed successfully with no service interruption.'
  }
]
</script>

<template>
  <UMain class="bg-black text-white py-16">
    <UContainer>
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <section class="mb-16">
          <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            System Status
          </h1>
          <p class="text-xl text-neutral-400 max-w-2xl leading-relaxed">
            Real-time status of all NLFTs services and infrastructure components.
          </p>
        </section>

        <!-- Overall Status -->
        <section class="mb-12">
          <div class="bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center">
            <div class="flex items-center justify-center gap-3 mb-2">
              <div class="w-3 h-3 bg-green-500 rounded-full" />
              <h2 class="text-xl font-semibold text-green-400">
                All Systems Operational
              </h2>
            </div>
            <p class="text-neutral-400">
              All services are running normally
            </p>
          </div>
        </section>

        <!-- Services Status -->
        <section class="mb-16">
          <h2 class="text-2xl font-bold mb-8">
            Service Status
          </h2>
          <div class="space-y-4">
            <div
              v-for="service in services"
              :key="service.name"
              class="flex items-center justify-between p-4 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
            >
              <div class="flex items-center gap-4">
                <div class="w-3 h-3 bg-green-500 rounded-full" />
                <div>
                  <h3 class="font-semibold">
                    {{ service.name }}
                  </h3>
                  <p class="text-sm text-neutral-400">
                    {{ service.uptime }} uptime (30 days)
                  </p>
                </div>
              </div>
              <span class="text-sm text-green-400 font-medium">Operational</span>
            </div>
          </div>
        </section>

        <!-- Recent Incidents -->
        <section class="mb-16">
          <h2 class="text-2xl font-bold mb-8">
            Recent Incidents
          </h2>
          <div class="space-y-6">
            <div
              v-for="incident in incidents"
              :key="incident.date"
              class="border border-neutral-800 rounded-lg p-6"
            >
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h3 class="font-semibold mb-2">
                    {{ incident.title }}
                  </h3>
                  <p class="text-sm text-neutral-400">
                    {{ incident.date }}
                  </p>
                </div>
                <span class="text-sm bg-green-500/10 text-green-400 px-3 py-1 rounded-full">
                  {{ incident.status }}
                </span>
              </div>
              <p class="text-neutral-300">
                {{ incident.description }}
              </p>
            </div>
          </div>
        </section>

        <!-- Uptime Stats -->
        <section class="mb-16">
          <h2 class="text-2xl font-bold mb-8">
            Uptime Statistics
          </h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center p-6 border border-neutral-800 rounded-lg">
              <div class="text-3xl font-bold text-green-400 mb-2">
                99.9%
              </div>
              <div class="text-sm text-neutral-400">
                Last 30 days
              </div>
            </div>
            <div class="text-center p-6 border border-neutral-800 rounded-lg">
              <div class="text-3xl font-bold text-green-400 mb-2">
                99.8%
              </div>
              <div class="text-sm text-neutral-400">
                Last 90 days
              </div>
            </div>
            <div class="text-center p-6 border border-neutral-800 rounded-lg">
              <div class="text-3xl font-bold text-green-400 mb-2">
                99.7%
              </div>
              <div class="text-sm text-neutral-400">
                Last 12 months
              </div>
            </div>
          </div>
        </section>

        <!-- Subscribe to Updates -->
        <section class="text-center bg-neutral-900 rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4">
            Stay Updated
          </h2>
          <p class="text-neutral-400 mb-6">
            Subscribe to status updates and get notified about incidents and maintenance.
          </p>
          <UButton
            label="Subscribe to Updates"
            color="white"
            size="lg"
            to="/contact"
          />
        </section>
      </div>
    </UContainer>
  </UMain>
</template>
