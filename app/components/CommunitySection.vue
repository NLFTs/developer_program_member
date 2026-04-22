<script setup lang="ts">
interface CommunityStats {
  label: string
  value: string
}

interface CommunityTestimonial {
  quote: string
  author: string
  handle: string
}

defineProps<{
  stats: CommunityStats[]
  testimonials: CommunityTestimonial[]
}>()
</script>

<template>
  <section
    id="community"
    class="community-section"
  >
    <UContainer>
      <div class="community-head">
        <div>
          <p class="eyebrow">
            Loved by the community
          </p>
          <h2>
            Jangan hanya percaya perkataan kami — dengarkan apa kata para developer
          </h2>
        </div>
        <div class="community-stats">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="stat-card"
          >
            <p class="stat-value">
              {{ stat.value }}
            </p>
            <p class="stat-label">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>

      <div class="community-grid">
        <article
          v-for="testimonial in testimonials"
          :key="testimonial.author"
          class="testimonial-card"
        >
          <p class="testimonial-quote">
            "{{ testimonial.quote }}"
          </p>
          <div class="testimonial-meta">
            <span class="author">{{ testimonial.author }}</span>
            <span class="handle">{{ testimonial.handle }}</span>
          </div>
        </article>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.community-section {
  padding: 5rem 1.5rem 6rem;
  background: #05050a;
  color: #f5f5ff;
  position: relative;
  overflow: hidden;
}

.community-head {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: flex-start;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.community-head h2 {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  max-width: 480px;
  margin: 0;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.6em;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
}

.community-stats {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-items: flex-start;
}

.stat-card {
  text-align: right;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
}

.community-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.4rem;
  position: relative;
  z-index: 1;
}

.community-grid::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 4rem;
  background: linear-gradient(180deg, rgba(5,5,10,0), rgba(5,5,10,0.65));
  pointer-events: none;
  z-index: 2;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 1.8rem;
  min-height: 180px;
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.45);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

@media (max-width: 640px) {
  .testimonial-card {
    min-height: 140px;
    padding: 1.25rem;
  }
}

.testimonial-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.3);
}

.testimonial-quote {
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.testimonial-meta {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
}

.testimonial-meta .author {
  font-weight: 600;
  color: #fff;
}
</style>
