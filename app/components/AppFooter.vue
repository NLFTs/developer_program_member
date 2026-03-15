<script setup lang="ts">
const columns = [{
  label: 'Resources',
  children: [{
    label: 'FAQ',
    to: '/faq'
  }, {
    label: 'Docs',
    to: '/docs/nuxt/getting-started'
  }, {
    label: 'DevLovers',
    to: '/devlovers'
  }, {
    label: 'Grantara',
    to: '/grantara'
  }]
}, {
  label: 'Features',
  children: [{
    label: 'Community',
    to: '/community'
  }, {
    label: 'Module',
    to: '/module'
  }, {
    label: 'Components',
    to: '/components'
  }, {
    label: 'Analytics',
    to: '/analytics'
  }]
}, {
  label: 'Company',
  children: [{
    label: 'NLFTs Company',
    to: '/about'
  }, {
    label: 'Agency',
    to: '/agency'
  }, {
    label: 'Sponsors',
    to: '/sponsors'
  }, {
    label: 'Blog',
    to: '/blog'
  }]
}]

const toast = useToast()

const email = ref('')
const loading = ref(false)

function onSubmit() {
  loading.value = true

  toast.add({
    title: 'Subscribed!',
    description: 'You\'ve been subscribed to our newsletter.'
  })
}
</script>

<template>
  <USeparator
    icon="i-simple-icons-nuxtdotjs"
    class="h-px"
  />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns">
          <template #right>
            <form @submit.prevent="onSubmit">
              <UFormField
                name="email"
                label="Subscribe to our newsletter"
                size="lg"
              >
                <UInput
                  v-model="email"
                  type="email"
                  class="w-full"
                  placeholder="Enter your email"
                >
                  <template #trailing>
                    <UButton
                      type="submit"
                      size="xs"
                      color="neutral"
                      label="Subscribe"
                    />
                  </template>
                </UInput>
              </UFormField>
            </form>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-muted text-sm">
        NLFTs All Rights Reserved • Copyright © {{ new Date().getFullYear() }}
      </p>
    </template>

    <template #right>
      <UButton
        to="https://discord.gg/nlfts"
        target="_blank"
        icon="i-simple-icons-discord"
        aria-label="NLFTs on Discord"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="https://github.com/nlfts"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="NLFTs on GitHub"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
