<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('index').first())

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  titleTemplate: '',
  title: 'NLFTs Developer Program Member - Home',
  ogTitle: 'NLFTs Developer Program Member',
  description: 'Program eksklusif untuk para developer yang ingin berkontribusi, berkolaborasi, dan membangun produk berkelas dunia bersama komunitas terbaik NLFTs.',
  ogDescription: 'Program eksklusif untuk para developer yang ingin berkontribusi, berkolaborasi, dan membangun produk berkelas dunia bersama komunitas terbaik NLFTs.',
  twitterCard: 'summary_large_image',
})

defineOgImageComponent('NuxtSeo', {
  title: 'NLFTs Developer Program',
  description: 'Program eksklusif untuk para developer yang ingin berkontribusi, berkolaborasi, dan membangun produk berkelas dunia.',
  theme: '#000000',
  colorMode: 'dark'
})

const { gsap, setup } = useGsap()

const communityStats = [
  { label: 'Github Stars', value: '75+' },
  { label: 'Weekly NPM downloads', value: '34+' },
  { label: 'Community leaders', value: '98' }
]

const communityTestimonials = [
  {
    quote: "Setiap kali saya menduga telah mencapai batas kemampuan ku. ternyata salah :)",
    author: 'haitsam haidar',
    handle: '@kksam-ctruk'
  },
  {
    quote: "wow, wow, wow, wow, wow, wow, Tux adalah..... Nuxt .... Wow 🤤🤯",
    author: 'Nairha Saqina',
    handle: '@nairhacan'
  },
  {
    quote: "Para mentor dalam program ini membantu kami menyusun modul agar dapat berkembang. Saya senang melihat lebih banyak pengembang bergabung dalam lingkaran anggota.",
    author: 'vira',
    handle: '@rhavira_'
  },
]

const contributorUrls = [
  "https://avatars.githubusercontent.com/u/228843429?v=4",
  "https://avatars.githubusercontent.com/u/228851591?v=4",
  "https://avatars.githubusercontent.com/u/228332586?v=4",
  "https://avatars.githubusercontent.com/u/228840381?v=4",
  "https://avatars.githubusercontent.com/u/216720543?v=4",
  "https://avatars.githubusercontent.com/u/228839961?v=4",
  "https://avatars.githubusercontent.com/u/232500114?v=4",
  "https://avatars.githubusercontent.com/u/225441519?v=4",
  "https://avatars.githubusercontent.com/u/232498018?v=4",
  "https://avatars.githubusercontent.com/u/182593937?v=4",
  "https://avatars.githubusercontent.com/u/204519754?v=4",
  "https://avatars.githubusercontent.com/u/249846662?v=4",
  "https://avatars.githubusercontent.com/u/218329504?v=4",
  "https://avatars.githubusercontent.com/u/202130049?v=4",
  "https://avatars.githubusercontent.com/u/237564897?v=4",
  "https://avatars.githubusercontent.com/u/222330932?v=4",
  "https://avatars.githubusercontent.com/u/232498781?v=4",
  "https://avatars.githubusercontent.com/u/232498504?v=4",
  "/avatar/dark.jpg",
  "/avatar/elaina.jpg",
  "/avatar/happy.jpg",
  "/avatar/koba.jpg",
  "/avatar/priasolo.jpg",
  "/avatar/sigma.jpg",
]

const contributors = [
  ...contributorUrls.map((url, i) => ({
    id: i,
    login: `Contributor`,
    avatar_url: url,
    html_url: "#",
    isEmpty: false
  }))
]

const visibleTestimonials = communityTestimonials.slice(0, 3)

setup(() => {
  // Hero button hover effects
  const buttons = document.querySelectorAll('.hero-btn')
  buttons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { scale: 1.05, duration: 0.2, ease: 'power2.out' })
    })
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { scale: 1, duration: 0.2, ease: 'power2.out' })
    })
  })

  // Unified Timeline for Contributors Section
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#contributors',
      start: 'top 75%',
      toggleActions: 'play none none none'
    }
  })

  tl.to('.reveal-content > *', {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'expo.out'
  })
  .to('.contributor-avatar', {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 0.6,
    stagger: {
      each: 0.03,
      from: 'center',
      grid: 'auto'
    },
    ease: 'back.out(1.2)'
  }, '-=0.8') // Start avatars animation before content finished
})
</script>

<template>
  <div class="hero">
    <div class="hero-inner">
      <h1 class="hero-title">Developer</h1>

      <p class="hero-sub">NLFTs Program Member</p>

      <p class="hero-desc">
        Program eksklusif untuk para developer yang ingin berkontribusi, berkolaborasi, dan membangun produk berkelas dunia bersama komunitas terbaik
      </p>

      <div class="hero-actions">
        <NuxtLink 
          to="/product" 
          class="hero-btn hero-btn-primary"
        >
          Get Started
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </NuxtLink>
        <a href="#live-demo" class="hero-btn hero-btn-ghost">
          Live Demo
        </a>
      </div>

      <p class="hero-meta">NLFTs &bull; Fts Project 2024 &bull; Grantara </p>
    </div>
  </div>

  <div class="section-divider" />

  <section class="community-section" id="community">
    <UContainer>
      <div class="community-head">
        <div>
          <p class="eyebrow">Loved by the community</p>
          <h2>
        Jangan hanya percaya perkataan kami — dengarkan apa kata para developer
          </h2>
        </div>
        <div class="community-stats">
          <div class="stat-card" v-for="stat in communityStats" :key="stat.label">
            <p class="stat-value">{{ stat.value }}</p>
            <p class="stat-label">{{ stat.label }}</p>
          </div>
        </div>
      </div>

      <div class="community-grid">
        <article
          v-for="testimonial in visibleTestimonials"
          :key="testimonial.author"
          class="testimonial-card"
        >
          <p class="testimonial-quote">“{{ testimonial.quote }}”</p>
          <div class="testimonial-meta">
            <span class="author">{{ testimonial.author }}</span>
            <span class="handle">{{ testimonial.handle }}</span>
          </div>
        </article>
      </div>
    </UContainer>
  </section>

  <section class="contributors-section py-20 lg:py-32 border-t border-white/5 overflow-hidden relative" id="contributors">
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
              />
              <!-- Privacy Overlay - Blocks right click and drag -->
              <div class="absolute inset-0 z-20" @contextmenu.prevent />
              
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
              
              <!-- Tooltip with username -->
              <div class="absolute bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black/80 backdrop-blur-sm text-[10px] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30">
                {{ member.login }}
              </div>
            </template>
            <div v-else class="w-full h-full flex items-center justify-center">
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
              <a href="https://discord.gg/nlfts" class="text-neutral-500 hover:text-white transition-all hover:scale-110 active:scale-90" aria-label="Discord">
                <UIcon name="i-simple-icons-discord" class="w-8 h-8" />
              </a>
              <a href="https://x.com/nlfts" class="text-neutral-500 hover:text-white transition-all hover:scale-110 active:scale-90" aria-label="X">
                <UIcon name="i-simple-icons-x" class="w-7 h-7" />
              </a>
              <a href="#" class="text-neutral-500 hover:text-white transition-all hover:scale-110 active:scale-90" aria-label="Share">
                <UIcon name="i-lucide-share-2" class="w-8 h-8" />
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
.hero {
  position: relative;
  min-height: 100svh;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: calc(var(--header-height) + 2rem) 1rem 3rem;
  background-color: #000;
  /* Minimal Tech Background */
  background-image: 
    radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
    linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
  background-size: 100% 100%, 80px 80px, 80px 80px;
  color: #fff;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  /* Very subtle accent vectors */
  background: 
    radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.01) 0%, transparent 40%),
    radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.01) 0%, transparent 40%);
  pointer-events: none;
  z-index: 1;
}

.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3%3C/svg%3");
  opacity: 0.05;
  pointer-events: none;
  mix-blend-mode: soft-light;
  z-index: 2;
}

@media (min-width: 640px) {
  .hero {
    padding: calc(var(--header-height) + 4rem) 1.5rem 3rem;
  }
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
  font-size: clamp(2.5rem, 12vw, 8rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1;
  margin: 0 0 1rem;
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

.section-divider {
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  margin: 0;
  opacity: 0.6;
}

.community-section {
  padding: 5rem 1.5rem 6rem;
  background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.03), transparent 45%),
    #05050a;
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
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
  border-radius: 1rem;
  padding: 1.8rem;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.45);
  transition: transform 0.2s ease, border-color 0.2s ease;
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

.community-section::after {
  content: '';
  position: absolute;
  inset: 12% 6% auto auto;
  width: 240px;
  height: 240px;
  background: radial-gradient(circle, rgba(136, 103, 255, 0.45), transparent 60%);
  filter: blur(28px);
  pointer-events: none;
  z-index: 0;
}

.community-section::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -40px;
  height: 180px;
  background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.08), transparent 70%);
  filter: blur(40px);
  pointer-events: none;
  z-index: 0;
}

/* Contributors Section Animation States */
.reveal-content > * {
  opacity: 0;
  transform: translateY(30px);
}

.contributor-avatar {
  opacity: 0;
  transform: scale(0.6) translateY(20px);
  will-change: transform, opacity;
}
</style>
