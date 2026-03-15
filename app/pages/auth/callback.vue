<script setup lang="ts">
definePageMeta({
  layout: false
})

onMounted(() => {
  // Check if there's a session or error in the URL hash/query
  // Supabase will automatically handle the session, we just need to close the popup
  setTimeout(() => {
    window.close()
  }, 2000)
})
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-black text-white">
    <div class="text-center">
      <UIcon name="i-lucide-check-circle-2" class="w-12 h-12 mb-4 text-primary mx-auto" />
      <p class="text-lg font-medium">Successfully connected!</p>
      <p class="text-sm text-neutral-400">Closing window...</p>
    </div>
  </div>
</template>
