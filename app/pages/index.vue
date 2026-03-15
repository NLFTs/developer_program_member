<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('index').first())

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

const { gsap, setup } = useGsap()

setup(() => {
  const buttons = document.querySelectorAll('.hero-btn')
  buttons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { scale: 1.05, duration: 0.2, ease: 'power2.out' })
    })
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { scale: 1, duration: 0.2, ease: 'power2.out' })
    })
  })
})
</script>

<template>
  <div class="hero">
    <div class="hero-background">
      <AppBackgroundHero
        :enabled-waves="['top', 'middle', 'bottom']"
        :line-count="[10, 15, 20]"
        :line-distance="[8, 6, 4]"
        :bend-radius="5.0"
        :bend-strength="-0.5"
        :interactive="true"
        :parallax="true"
      />
    </div>

    <div class="hero-inner">
      <h1 class="hero-title">Developer</h1>

      <p class="hero-sub">NLFTs Program Member</p>

      <p class="hero-desc">
        Program eksklusif untuk para developer yang ingin berkontribusi, berkolaborasi, dan membangun produk berkelas dunia bersama komunitas terbaik
      </p>

      <div class="hero-actions">
        <a href="#get-started" class="hero-btn hero-btn-primary">
          Get Started
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </a>
        <a href="#live-demo" class="hero-btn hero-btn-ghost">
          Live Demo
        </a>
      </div>

      <p class="hero-meta">NLFTs &bull; Fts Project 2024 &bull; Grantara </p>
    </div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 5rem 1.5rem 3rem;
  background-color: #000;
  color: #fff;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.6;
  pointer-events: none;
}

.hero-inner {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 860px;
  width: 100%;
  padding-top: 2rem;
}

/* Title */
.hero-title {
  font-size: clamp(5rem, 17vw, 12rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 0.9;
  margin: 0 0 1.2rem;
  background-image: linear-gradient(180deg, #ffffff 40%, rgba(255, 255, 255, 0.4) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  user-select: none;
}

/* Tagline */
.hero-sub {
  font-size: clamp(0.8rem, 1.8vw, 1rem);
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 1.5rem;
}

/* Description */
.hero-desc {
  max-width: 540px;
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  font-weight: 300;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 2.5rem;
}

/* Actions */
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  margin-bottom: 3rem;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 26px;
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  will-change: transform;
}

.hero-btn-primary {
  background: #fff;
  color: #000;
  border: 1px solid transparent;
}

.hero-btn-ghost {
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.hero-btn-ghost:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.4);
}

/* Meta */
.hero-meta {
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0.25;
}
</style>
