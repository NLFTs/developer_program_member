<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy - NLFTs Developer Program',
  ogTitle: 'Privacy Policy - NLFTs Developer Program',
  description: 'Privacy policy for NLFTs Developer Program. Learn how we collect, use, and protect your personal information.',
  ogDescription: 'Privacy policy for NLFTs Developer Program. Learn how we collect, use, and protect your personal information.'
})
</script>

<template>
  <UMain class="bg-black text-white py-16">
    <UContainer>
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <section class="mb-16">
          <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p class="text-xl text-neutral-400 max-w-2xl leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <p class="text-sm text-neutral-500 mt-4">Effective Date: December 1, 2024</p>
        </section>

        <!-- Privacy Content -->
        <section class="prose prose-invert max-w-none space-y-8">
          <div class="border border-neutral-800 rounded-lg p-8">
            <h2 class="text-2xl font-bold mb-6">1. Information We Collect</h2>
            
            <h3 class="text-lg font-semibold mb-3">Personal Information</h3>
            <p class="text-neutral-400 mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul class="text-neutral-400 mb-6 space-y-2">
              <li>• Name and email address when you create an account</li>
              <li>• Profile information and preferences</li>
              <li>• Communications with our support team</li>
              <li>• Payment information for premium services</li>
            </ul>

            <h3 class="text-lg font-semibold mb-3">Usage Information</h3>
            <p class="text-neutral-400 mb-4">
              We automatically collect certain information about your use of our services:
            </p>
            <ul class="text-neutral-400 mb-6 space-y-2">
              <li>• Pages visited and features used</li>
              <li>• Time spent on our platform</li>
              <li>• Device and browser information</li>
              <li>• IP address and location data</li>
            </ul>
          </div>

          <div class="border border-neutral-800 rounded-lg p-8">
            <h2 class="text-2xl font-bold mb-6">2. How We Use Your Information</h2>
            <p class="text-neutral-400 mb-4">
              We use the information we collect to:
            </p>
            <ul class="text-neutral-400 mb-6 space-y-2">
              <li>• Provide and improve our services</li>
              <li>• Process transactions and send confirmations</li>
              <li>• Send important updates and notifications</li>
              <li>• Provide customer support</li>
              <li>• Analyze usage patterns and optimize performance</li>
              <li>• Prevent fraud and ensure security</li>
            </ul>
          </div>

          <div class="border border-neutral-800 rounded-lg p-8">
            <h2 class="text-2xl font-bold mb-6">3. Information Sharing</h2>
            <p class="text-neutral-400 mb-4">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul class="text-neutral-400 mb-6 space-y-2">
              <li>• With your consent</li>
              <li>• With service providers who help us operate our platform</li>
              <li>• To comply with legal obligations</li>
              <li>• To protect our rights and prevent fraud</li>
              <li>• In connection with a business transfer</li>
            </ul>
          </div>

          <div class="border border-neutral-800 rounded-lg p-8">
            <h2 class="text-2xl font-bold mb-6">4. Data Security</h2>
            <p class="text-neutral-400 mb-4">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul class="text-neutral-400 mb-6 space-y-2">
              <li>• Encryption of data in transit and at rest</li>
              <li>• Regular security audits and updates</li>
              <li>• Access controls and authentication</li>
              <li>• Secure data centers and infrastructure</li>
            </ul>
          </div>

          <div class="border border-neutral-800 rounded-lg p-8">
            <h2 class="text-2xl font-bold mb-6">5. Your Rights</h2>
            <p class="text-neutral-400 mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul class="text-neutral-400 mb-6 space-y-2">
              <li>• Access and review your personal data</li>
              <li>• Correct inaccurate information</li>
              <li>• Delete your account and data</li>
              <li>• Export your data</li>
              <li>• Opt out of marketing communications</li>
            </ul>
          </div>

          <div class="border border-neutral-800 rounded-lg p-8">
            <h2 class="text-2xl font-bold mb-6">6. Cookies and Tracking</h2>
            <p class="text-neutral-400 mb-4">
              We use cookies and similar technologies to enhance your experience. You can control cookie settings through your browser preferences.
            </p>
          </div>

          <div class="border border-neutral-800 rounded-lg p-8">
            <h2 class="text-2xl font-bold mb-6">7. Updates to This Policy</h2>
            <p class="text-neutral-400 mb-4">
              We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the effective date.
            </p>
          </div>
        </section>

        <!-- Contact -->
        <section class="text-center mt-16 bg-neutral-900 rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4">Questions About Privacy?</h2>
          <p class="text-neutral-400 mb-6">
            If you have any questions about this privacy policy or our data practices, please contact us.
          </p>
          <UButton label="Contact Privacy Team" color="white" size="lg" to="/contact" />
        </section>
      </div>
    </UContainer>
  </UMain>
</template>