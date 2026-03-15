<script setup lang="ts">
definePageMeta({
  layout: false
})

const { login } = useGithubAuth()

onMounted(() => {
  login()
})
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-black text-white">
    <div class="text-center">
      <UIcon name="i-simple-icons-github" class="w-12 h-12 mb-4 animate-pulse mx-auto" />
      <p class="text-lg font-medium">Redirecting to GitHub...</p>
    </div>
  </div>
</template>
