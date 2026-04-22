<script setup lang="ts">
useSeoMeta({
  title: 'Legal - NLFTs Developer Program',
  ogTitle: 'Legal Information - NLFTs Developer Program',
  description: 'Legal information, terms of service, and policies for NLFTs Developer Program and related services.',
  ogDescription: 'Legal information, terms of service, and policies for NLFTs Developer Program and related services.'
})
</script>

<template>
  <UMain class="bg-black text-white py-16">
    <UContainer>
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <section class="mb-16">
          <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Legal Information
          </h1>
          <p class="text-xl text-neutral-400 max-w-2xl leading-relaxed">
            Important legal information, terms of service, and policies governing the use of NLFTs services.
          </p>
        </section>

        <!-- Legal Documents -->
        <section class="space-y-12">
          <!-- Terms of Service -->
          <div class="border border-neutral-800 rounded-lg p-8">
            <h2 class="text-2xl font-bold mb-6">Terms of Service</h2>
            <div class="prose prose-invert max-w-none">
              <p class="text-neutral-300 mb-4">
                By using NLFTs services, you agree to be bound by these terms of service. Please read them carefully.
              </p>
              
              <h3 class="text-lg font-semibold mb-3">1. Acceptance of Terms</h3>
              <p class="text-neutral-400 mb-4">
                By accessing and using NLFTs services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h3 class="text-lg font-semibold mb-3">2. Use License</h3>
              <p class="text-neutral-400 mb-4">
                Permission is granted to temporarily download one copy of NLFTs materials for personal, non-commercial transitory viewing only.
              </p>

              <h3 class="text-lg font-semibold mb-3">3. Disclaimer</h3>
              <p class="text-neutral-400 mb-4">
                The materials on NLFTs are provided on an 'as is' basis. NLFTs makes no warranties, expressed or implied.
              </p>

              <div class="mt-6">
                <p class="text-sm text-neutral-500">Last updated: December 2024</p>
              </div>
            </div>
          </div>

          <!-- Privacy Policy -->
          <div class="border border-neutral-800 rounded-lg p-8">
            <h2 class="text-2xl font-bold mb-6">Privacy Policy</h2>
            <div class="prose prose-invert max-w-none">
              <p class="text-neutral-300 mb-4">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              
              <h3 class="text-lg font-semibold mb-3">Information We Collect</h3>
              <p class="text-neutral-400 mb-4">
                We collect information you provide directly to us, such as when you create an account, use our services, or contact us.
              </p>

              <h3 class="text-lg font-semibold mb-3">How We Use Information</h3>
              <p class="text-neutral-400 mb-4">
                We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
              </p>

              <h3 class="text-lg font-semibold mb-3">Information Sharing</h3>
              <p class="text-neutral-400 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.
              </p>

              <div class="mt-6">
                <p class="text-sm text-neutral-500">Last updated: December 2024</p>
              </div>
            </div>
          </div>

          <!-- Cookie Policy -->
          <div class="border border-neutral-800 rounded-lg p-8">
            <h2 class="text-2xl font-bold mb-6">Cookie Policy</h2>
            <div class="prose prose-invert max-w-none">
              <p class="text-neutral-300 mb-4">
                We use cookies and similar technologies to enhance your experience on our website.
              </p>
              
              <h3 class="text-lg font-semibold mb-3">What Are Cookies</h3>
              <p class="text-neutral-400 mb-4">
                Cookies are small text files that are stored on your device when you visit our website.
              </p>

              <h3 class="text-lg font-semibold mb-3">How We Use Cookies</h3>
              <p class="text-neutral-400 mb-4">
                We use cookies to remember your preferences, analyze site traffic, and provide personalized content.
              </p>

              <div class="mt-6">
                <p class="text-sm text-neutral-500">Last updated: December 2024</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact -->
        <section class="text-center mt-16">
          <h2 class="text-2xl font-bold mb-4">Questions About Our Legal Policies?</h2>
          <p class="text-neutral-400 mb-6">
            If you have any questions about these legal documents, please contact us.
          </p>
          <UButton label="Contact Legal Team" color="white" size="lg" to="/contact" />
        </section>
      </div>
    </UContainer>
  </UMain>
</template>