<script setup lang="ts">
interface Contributor {
  id: number
  login: string
  avatar_url: string
  html_url: string
  isEmpty: boolean
}

defineProps<{
  contributors: Contributor[]
}>()
</script>

<template>
  <section
    id="contributors"
    class="contributors-section py-20 lg:py-32 border-t border-white/5 overflow-hidden relative"
  >
    <UContainer>
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <!-- Avatar Grid -->
        <div class="grid grid-cols-4 sm:grid-cols-6 gap-3 lg:gap-4 order-2 lg:order-1 reveal-grid">
          <a
            v-for="member in contributors"
            :key="member.id"
            :href="member.isEmpty ? undefined : member.html_url"
            target="_blank"
            class="contributor-avatar relative aspect-square group overflow-hidden rounded-xl bg-neutral-900 border border-white/10 transition-all duration-300 hover:scale-110 hover:z-20 hover:border-white/30 cursor-crosshair"
            :class="{ 'opacity-40 cursor-default': member.isEmpty }"
          >
            <template v-if="!member.isEmpty">
              <img
                :src="member.avatar_url"
                :alt="member.login"
                class="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none select-none"
                loading="lazy"
                draggable="false"
                @contextmenu.prevent
              >
              <!-- Privacy Overlay - Blocks right click and drag -->
              <div
                class="absolute inset-0 z-20"
                @contextmenu.prevent
              />

              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />

              <!-- Tooltip with username -->
              <div class="absolute bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black/80 backdrop-blur-sm text-[10px] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30">
                {{ member.login }}
              </div>
            </template>
            <div
              v-else
              class="w-full h-full flex items-center justify-center"
            >
              <div class="w-2 h-2 rounded-full bg-white/10" />
            </div>
          </a>
        </div>

        <!-- Right Content -->
        <div class="flex flex-col items-start gap-8 order-1 lg:order-2 reveal-content">
          <div class="space-y-4">
            <h2 class="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1] tracking-tighter">
              Built by developers around the world
            </h2>
            <p class="text-lg sm:text-xl text-neutral-400 max-w-lg leading-relaxed">
              Hundreds of contributors making NLFTs better every day. Join us and build the future of open modules.
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-8">
            <UButton
              label="Members"
              icon="i-lucide-arrow-right"
              trailing
              size="xl"
              color="neutral"
              class="rounded-full px-8 py-4 font-bold transition-transform hover:scale-105"
            />

            <div class="flex items-center gap-6">
              <a
                href="https://discord.gg/nlfts"
                class="text-neutral-500 hover:text-white transition-all hover:scale-110 active:scale-90"
                aria-label="Discord"
              >
                <UIcon
                  name="i-simple-icons-discord"
                  class="w-8 h-8"
                />
              </a>
              <a
                href="https://x.com/nlfts"
                class="text-neutral-500 hover:text-white transition-all hover:scale-110 active:scale-90"
                aria-label="X"
              >
                <UIcon
                  name="i-simple-icons-x"
                  class="w-7 h-7"
                />
              </a>
              <a
                href="#"
                class="text-neutral-500 hover:text-white transition-all hover:scale-110 active:scale-90"
                aria-label="Share"
              >
                <UIcon
                  name="i-lucide-share-2"
                  class="w-8 h-8"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </UContainer>

    <!-- Decorative background glow -->
    <div class="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-40 lg:opacity-60" />
  </section>
</template>

<style scoped>
/* Contributors Section Animation States */
@media (min-width: 1024px) {
  .reveal-content > * {
    opacity: 0;
    transform: translateY(30px);
  }

  .contributor-avatar {
    opacity: 0;
    transform: scale(0.6) translateY(20px);
    will-change: transform, opacity;
  }
}
</style>
