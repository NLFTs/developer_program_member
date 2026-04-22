<script setup lang="ts">
interface Partner {
  name: string
  logo: string
  url: string
}

defineProps<{
  partners: Partner[]
}>()
</script>

<template>
  <section
    id="partners"
    class="partners-section py-16 lg:py-24 bg-black relative overflow-hidden"
  >
    <UContainer>
      <div class="flex flex-col items-center text-center mb-12 gap-4">
        <p class="text-xs font-bold tracking-[0.3em] uppercase text-neutral-500">
          Trusted by
        </p>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
          Leading organizations worldwide
        </h2>
      </div>

      <!-- Logo Grid -->
      <div class="partners-grid">
        <a
          v-for="partner in partners"
          :key="partner.name"
          :href="partner.url"
          target="_blank"
          rel="noopener noreferrer"
          class="partner-logo-container group"
        >
          <div class="partner-logo-wrapper">
            <img
              :src="partner.logo"
              :alt="partner.name"
              class="partner-logo-image"
              loading="lazy"
            >
          </div>
        </a>
      </div>

      <!-- Subtle call to action -->
      <div class="flex justify-center mt-12">
        <p class="text-sm text-neutral-500">
          Join our growing ecosystem of partners
        </p>
      </div>
    </UContainer>

    <!-- Minimal background decoration -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.01] blur-[100px] rounded-full pointer-events-none" />
  </section>
</template>

<style scoped>
/* Partners Section Styles - Modern Logo Grid */
.partners-section {
  position: relative;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  align-items: center;
  justify-items: center;
}

@media (min-width: 640px) {
  .partners-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .partners-grid {
    grid-template-columns: repeat(6, 1fr);
    gap: 2rem;
  }
}

.partner-logo-container {
  position: relative;
  width: 100%;
  max-width: 160px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  display: block;
}

.partner-logo-wrapper {
  position: relative;
  padding: 1.5rem 1rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(20px);
  overflow: hidden;
  aspect-ratio: 2/1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.partner-logo-container:hover .partner-logo-wrapper {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.partner-logo-image {
  width: 100%;
  height: auto;
  max-height: 40px;
  object-fit: contain;
  filter: grayscale(100%) brightness(0.8) contrast(1.2);
  transition: all 0.3s ease;
}

.partner-logo-container:hover .partner-logo-image {
  filter: grayscale(0%) brightness(1) contrast(1);
  transform: scale(1.05);
}

/* Subtle animation on scroll */
@media (min-width: 1024px) {
  .partner-logo-container {
    opacity: 0;
    transform: translateY(20px);
  }
}
</style>
