<script setup lang="ts">
const isVisible = ref(true)

function dismiss() {
  isVisible.value = false
  if (import.meta.client) {
    sessionStorage.setItem('banner-dismissed', 'true')
  }
}

onMounted(() => {
  if (sessionStorage.getItem('banner-dismissed') === 'true') {
    isVisible.value = false
  }
})
</script>

<template>
  <Transition name="banner">
    <div
      v-if="isVisible"
      class="relative z-50 w-full bg-[#0d0d0d] text-white flex items-center justify-between px-4 py-2.5 gap-4"
    >
      <!-- Left brand -->
      <div class="flex items-center gap-3 min-w-0 shrink-0">
        <span class="text-sm font-bold tracking-tight">
          <span class="text-red-500">NLFTs.</span><span class="font-light">Dev</span>
        </span>
      </div>

      <!-- Center content -->
      <div class="flex-1 flex items-center justify-center gap-2 text-sm min-w-0 text-center">
        <span class="font-semibold text-white">Developer Program Member sekarang tersedia.</span>
        <span class="text-neutral-400 hidden sm:inline">Bergabunglah dan akses semua modul eksklusif.</span>
      </div>

      <!-- CTA button -->
      <div class="shrink-0 flex items-center gap-3">
        <NuxtLink
          to="/events"
          class="flex items-center gap-1.5 bg-red-600 hover:bg-red-500 transition-colors text-white text-xs font-semibold px-3 py-1.5 rounded-md whitespace-nowrap"
        >
          Gabung Sekarang
          <UIcon name="i-lucide-arrow-right" class="w-3 h-3" />
        </NuxtLink>

        <!-- Close button -->
        <button
          class="text-neutral-400 hover:text-white transition-colors p-1 rounded"
          aria-label="Tutup banner"
          @click="dismiss"
        >
          <UIcon name="i-lucide-x" class="w-4 h-4" />
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.banner-enter-active,
.banner-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.banner-enter-from,
.banner-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.banner-enter-to,
.banner-leave-from {
  max-height: 60px;
  opacity: 1;
}
</style>
