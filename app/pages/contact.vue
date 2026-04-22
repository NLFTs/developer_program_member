<script setup lang="ts">
useSeoMeta({
  title: 'Contact Us - NLFTs Developer Program',
  ogTitle: 'Contact Us - NLFTs Developer Program',
  description: 'Get in touch with the NLFTs team. We\'re here to help with questions, support, and partnership opportunities.',
  ogDescription: 'Get in touch with the NLFTs team. We\'re here to help with questions, support, and partnership opportunities.'
})

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  type: 'general'
})

const contactTypes = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'support', label: 'Technical Support' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'enterprise', label: 'Enterprise Sales' },
  { value: 'press', label: 'Press & Media' }
]

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1000))
  isSubmitting.value = false
  
  // Reset form
  Object.keys(form).forEach(key => {
    if (key !== 'type') form[key] = ''
  })
  
  // Show success message (in real app, handle actual submission)
  alert('Thank you for your message! We\'ll get back to you soon.')
}
</script>

<template>
  <UMain class="bg-black text-white py-16">
    <UContainer>
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <section class="text-center mb-16">
          <h1 class="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Contact Us
          </h1>
          <p class="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Have questions or want to get in touch? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </section>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <h2 class="text-2xl font-bold mb-6">Send us a message</h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium mb-2">Name</label>
                  <input 
                    v-model="form.name"
                    type="text" 
                    required
                    class="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Email</label>
                  <input 
                    v-model="form.email"
                    type="email" 
                    required
                    class="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium mb-2">Inquiry Type</label>
                <select 
                  v-model="form.type"
                  class="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option v-for="type in contactTypes" :key="type.value" :value="type.value">
                    {{ type.label }}
                  </option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium mb-2">Subject</label>
                <input 
                  v-model="form.subject"
                  type="text" 
                  required
                  class="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label class="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  v-model="form.message"
                  rows="6" 
                  required
                  class="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <UButton 
                type="submit"
                :loading="isSubmitting"
                :disabled="isSubmitting"
                color="white" 
                size="lg" 
                class="w-full"
                label="Send Message"
              />
            </form>
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h2 class="text-2xl font-bold mb-6">Get in touch</h2>
              <p class="text-neutral-400 mb-8">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>
            </div>

            <!-- Contact Methods -->
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                  <UIcon name="i-lucide-mail" class="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 class="font-semibold mb-1">Email</h3>
                  <p class="text-neutral-400">hello@nlfts.dev</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                  <UIcon name="i-lucide-message-circle" class="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 class="font-semibold mb-1">Discord</h3>
                  <p class="text-neutral-400">Join our community server</p>
                  <a href="https://discord.gg/nlfts" class="text-blue-400 hover:text-blue-300 text-sm">discord.gg/nlfts</a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                  <UIcon name="i-lucide-twitter" class="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 class="font-semibold mb-1">Twitter</h3>
                  <p class="text-neutral-400">Follow us for updates</p>
                  <a href="https://x.com/nlfts" class="text-blue-400 hover:text-blue-300 text-sm">@nlfts</a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                  <UIcon name="i-lucide-github" class="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 class="font-semibold mb-1">GitHub</h3>
                  <p class="text-neutral-400">Contribute to our projects</p>
                  <a href="https://github.com/nlfts" class="text-blue-400 hover:text-blue-300 text-sm">github.com/nlfts</a>
                </div>
              </div>
            </div>

            <!-- Response Time -->
            <div class="bg-neutral-900 rounded-lg p-6">
              <h3 class="font-semibold mb-2">Response Time</h3>
              <p class="text-neutral-400 text-sm">
                We typically respond to all inquiries within 24 hours during business days. For urgent technical support, please join our Discord server for faster assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </UMain>
</template>