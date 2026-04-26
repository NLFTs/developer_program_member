<script setup lang="ts">
const columns = [{
  label: 'Produk',
  children: [{
    label: 'Modul',
    to: '/product/modules'
  }, {
    label: 'Cloud',
    to: '/product/cloud'
  }, {
    label: 'Penyebaran',
    to: '/product/deployment'
  }, {
    label: 'Analitik',
    to: '/product/analytics'
  }]
}, {
  label: 'Sumber Daya',
  children: [{
    label: 'Dokumentasi',
    to: '/docs/nuxt/getting-started'
  }, {
    label: 'Kit Pemula',
    to: '/starter-kits'
  }, {
    label: 'Pusat Developer',
    to: '/devlovers'
  }, {
    label: 'Acara',
    to: '/events'
  }]
}, {
  label: 'Perusahaan',
  children: [{
    label: 'Tentang NLFTs Ltd',
    to: '/about'
  }, {
    label: 'Agensi',
    to: '/agency'
  }, {
    label: 'Sponsor',
    to: '/sponsors'
  }, {
    label: 'Blog',
    to: '/blog'
  }]
}]
</script>

<template>
  <footer
    id="footer"
    class="bg-black border-t border-white/5 pt-24 pb-12 relative overflow-hidden"
  >
    <UContainer>
      <div class="grid lg:grid-cols-2 gap-20 lg:gap-32 mb-20 relative z-10">
        <!-- Brand Section -->
        <div class="flex flex-col items-start gap-8">
          <AppLogo /> 

          <p class="text-neutral-400 text-lg sm:text-xl font-medium leading-relaxed max-w-sm">
            Profesional dalam menyediakan solusi teknologi modern untuk kebutuhan bisnis Anda.
          </p>

          <div class="flex items-center gap-6">
            <a
              href="https://github.com/nlfts"
              target="_blank"
              class="text-neutral-500 hover:text-white transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <UIcon
                name="i-simple-icons-github"
                class="w-6 h-6"
              />
            </a>
            <a
              href="https://x.com/nlfts"
              target="_blank"
              class="text-neutral-500 hover:text-white transition-all hover:scale-110"
              aria-label="X"
            >
              <UIcon
                name="i-simple-icons-x"
                class="w-6 h-6"
              />
            </a>
            <a
              href="https://discord.gg/nlfts"
              target="_blank"
              class="text-neutral-500 hover:text-white transition-all hover:scale-110"
              aria-label="Discord"
            >
              <UIcon
                name="i-simple-icons-discord"
                class="w-7 h-7"
              />
            </a>
          </div>

          <div class="flex flex-wrap items-center gap-6 text-[10px] sm:text-xs font-bold text-neutral-600 uppercase tracking-[0.2em] pt-4">
            <span>© {{ new Date().getFullYear() }} NLFTs Ltd</span>
            <NuxtLink
              to="/legal"
              class="hover:text-white transition-colors"
            >Legal</NuxtLink>
            <NuxtLink
              to="/status"
              class="hover:text-white transition-colors"
            >Status</NuxtLink>
            <NuxtLink
              to="/privacy"
              class="hover:text-white transition-colors"
            >Privasi</NuxtLink>
          </div>
        </div>

        <!-- Links Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-4">
          <div
            v-for="column in columns"
            :key="column.label"
            class="flex flex-col gap-6"
          >
            <h4 class="text-white font-bold text-sm uppercase tracking-widest">
              {{ column.label }}
            </h4>
            <ul class="flex flex-col gap-4">
              <li
                v-for="child in column.children"
                :key="child.label"
              >
                <NuxtLink
                  :to="child.to"
                  class="text-neutral-500 hover:text-white transition-colors text-[15px] font-medium"
                >
                  {{ child.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </UContainer>

    <!-- Giant Brand Text Background (Clean & Unblocked) -->
    <div class="relative w-full pointer-events-none select-none">
      <div
        class="text-[clamp(120px,32vw,600px)] font-bold text-sky-400 opacity-30 leading-[0.7] tracking-tight w-full text-center whitespace-nowrap pt-20 drop-shadow-[0_0_80px_rgba(56,189,248,0.2)]"
        style="font-family: 'Outfit', sans-serif;"
      >
        NLFTs
      </div>
    </div>

    <!-- Sub-bottom decorative glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
  </footer>
</template>

<style scoped>
#footer {
  background: #000;
}
</style>
