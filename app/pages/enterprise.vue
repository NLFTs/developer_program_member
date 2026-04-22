<script setup lang="ts">
useSeoMeta({
  title: 'Enterprise Solutions - NLFTs Developer Program',
  ogTitle: 'Enterprise Solutions - NLFTs Developer Program',
  description: 'Scale your enterprise development with NLFTs professional tools, support, and consulting services.',
  ogDescription: 'Scale your enterprise development with NLFTs professional tools, support, and consulting services.'
})
</script>

<template>
  <UMain class="bg-black text-white py-16">
    <UContainer>
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <section class="text-center mb-16">
          <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Enterprise Solutions
          </h1>
          <p class="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Scale your development with enterprise-grade tools, dedicated support, and professional consulting services.
          </p>
        </section>

        <!-- Features -->
        <section class="mb-16">
          <h2 class="text-2xl font-bold mb-8">Enterprise Features</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4">Priority Support</h3>
              <p class="text-neutral-400 mb-4">
                Get dedicated support with guaranteed response times and direct access to our engineering team.
              </p>
              <ul class="text-sm text-neutral-300 space-y-2">
                <li>• 24/7 technical support</li>
                <li>• Dedicated account manager</li>
                <li>• Priority bug fixes</li>
              </ul>
            </div>

            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4">Custom Development</h3>
              <p class="text-neutral-400 mb-4">
                Tailored solutions built specifically for your enterprise needs and requirements.
              </p>
              <ul class="text-sm text-neutral-300 space-y-2">
                <li>• Custom modules and plugins</li>
                <li>• Integration services</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4">Training & Consulting</h3>
              <p class="text-neutral-400 mb-4">
                Expert guidance to help your team adopt and master NLFTs tools effectively.
              </p>
              <ul class="text-sm text-neutral-300 space-y-2">
                <li>• On-site training sessions</li>
                <li>• Architecture consulting</li>
                <li>• Best practices workshops</li>
              </ul>
            </div>

            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-4">Security & Compliance</h3>
              <p class="text-neutral-400 mb-4">
                Enterprise-grade security features and compliance support for regulated industries.
              </p>
              <ul class="text-sm text-neutral-300 space-y-2">
                <li>• SOC 2 compliance</li>
                <li>• Security audits</li>
                <li>• GDPR compliance tools</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Pricing -->
        <section class="mb-16">
          <h2 class="text-2xl font-bold mb-8">Enterprise Pricing</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-2">Starter</h3>
              <div class="text-3xl font-bold mb-4">$2,500<span class="text-lg text-neutral-400">/month</span></div>
              <ul class="text-sm text-neutral-300 space-y-2 mb-6">
                <li>• Up to 10 developers</li>
                <li>• Email support</li>
                <li>• Basic training</li>
                <li>• Standard SLA</li>
              </ul>
              <UButton label="Contact Sales" color="neutral" class="w-full" />
            </div>

            <div class="border border-blue-500 rounded-lg p-6 relative">
              <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Popular
              </div>
              <h3 class="text-lg font-semibold mb-2">Professional</h3>
              <div class="text-3xl font-bold mb-4">$7,500<span class="text-lg text-neutral-400">/month</span></div>
              <ul class="text-sm text-neutral-300 space-y-2 mb-6">
                <li>• Up to 50 developers</li>
                <li>• Priority support</li>
                <li>• Advanced training</li>
                <li>• Custom integrations</li>
              </ul>
              <UButton label="Contact Sales" color="white" class="w-full" />
            </div>

            <div class="border border-neutral-800 rounded-lg p-6">
              <h3 class="text-lg font-semibold mb-2">Enterprise</h3>
              <div class="text-3xl font-bold mb-4">Custom</div>
              <ul class="text-sm text-neutral-300 space-y-2 mb-6">
                <li>• Unlimited developers</li>
                <li>• 24/7 dedicated support</li>
                <li>• On-site training</li>
                <li>• Custom development</li>
              </ul>
              <UButton label="Contact Sales" color="neutral" class="w-full" />
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section class="text-center bg-neutral-900 rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4">Ready to Scale?</h2>
          <p class="text-neutral-400 mb-6">
            Let's discuss how NLFTs can help accelerate your enterprise development.
          </p>
          <UButton label="Schedule a Demo" color="white" size="lg" to="/contact" />
        </section>
      </div>
    </UContainer>
  </UMain>
</template>