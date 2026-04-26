<script setup lang="ts">
const { data: _page } = await useAsyncData('index', () => queryCollection('index').first())
const { data: productsPage } = await useAsyncData('products', () => queryCollection('products').first())

const showcasesItems = computed(() => productsPage.value?.items || [])

useSeoMeta({
  titleTemplate: '',
  title: 'NLFTs Developer Program Member - Home',
  ogTitle: 'NLFTs Developer Program Member',
  description: 'Program eksklusif untuk para developer yang ingin berkontribusi, berkolaborasi, dan membangun produk berkelas dunia bersama komunitas terbaik NLFTs.',
  ogDescription: 'Program eksklusif untuk para developer yang ingin berkontribusi, berkolaborasi, dan membangun produk berkelas dunia bersama komunitas terbaik NLFTs.',
  twitterCard: 'summary_large_image'
})

defineOgImageComponent('NuxtSeo', {
  title: 'NLFTs Developer Program',
  description: 'Program eksklusif untuk para developer yang ingin berkontribusi, berkolaborasi, dan membangun produk berkelas dunia.',
  theme: '#000000',
  colorMode: 'dark'
})

const { gsap, setup } = useGsap()

const communityStats = [
  { label: 'Bintang Github', value: '75+' },
  { label: 'Unduhan NPM Mingguan', value: '34+' },
  { label: 'Pemimpin Komunitas', value: '98' }
]

const communityTestimonials = [
  {
    quote: 'Setiap kali saya menduga telah mencapai batas kemampuan ku. ternyata salah :)',
    author: 'haitsam haidar',
    handle: '@kksam-ctruk'
  },
  {
    quote: 'wow, wow, wow, wow, wow, wow, Tux adalah..... Nuxt .... Wow 🤤🤯',
    author: 'Nairha Saqina',
    handle: '@nairhacan'
  },
  {
    quote: 'Para mentor dalam program ini membantu kami menyusun modul agar dapat berkembang. Saya senang melihat lebih banyak pengembang bergabung dalam lingkaran anggota.',
    author: 'vira',
    handle: '@rhavira_'
  }
]

const contributorUrls = [
  'https://avatars.githubusercontent.com/u/228843429?v=4',
  'https://avatars.githubusercontent.com/u/228851591?v=4',
  'https://avatars.githubusercontent.com/u/228332586?v=4',
  'https://avatars.githubusercontent.com/u/228840381?v=4',
  'https://avatars.githubusercontent.com/u/216720543?v=4',
  'https://avatars.githubusercontent.com/u/228839961?v=4',
  'https://avatars.githubusercontent.com/u/232500114?v=4',
  'https://avatars.githubusercontent.com/u/225441519?v=4',
  'https://avatars.githubusercontent.com/u/232498018?v=4',
  'https://avatars.githubusercontent.com/u/182593937?v=4',
  'https://avatars.githubusercontent.com/u/204519754?v=4',
  'https://avatars.githubusercontent.com/u/249846662?v=4',
  'https://avatars.githubusercontent.com/u/218329504?v=4',
  'https://avatars.githubusercontent.com/u/202130049?v=4',
  'https://avatars.githubusercontent.com/u/237564897?v=4',
  'https://avatars.githubusercontent.com/u/222330932?v=4',
  'https://avatars.githubusercontent.com/u/232498781?v=4',
  'https://avatars.githubusercontent.com/u/232498504?v=4',
  '/avatar/dark.jpg',
  '/avatar/elaina.jpg',
  '/avatar/happy.jpg',
  '/avatar/koba.jpg',
  '/avatar/priasolo.jpg',
  '/avatar/sigma.jpg'
]

const contributors = [
  ...contributorUrls.map((url, i) => ({
    id: i,
    login: `Kontributor`,
    avatar_url: url,
    html_url: '#',
    isEmpty: false
  }))
]

const visibleTestimonials = communityTestimonials.slice(0, 3)

const partners = [
  {
    name: 'GRANTARA',
    logo: '/brand/grantara.png',
    url: 'https://grabals-official.vercel.app/'
  },
  {
    name: 'ITK',
    logo: '/brand/tik.png',
    url: 'https://itk.co'
  },
  {
    name: 'Vuxilabs',
    logo: 'https://avatars.githubusercontent.com/u/264552738?s=200&v=4',
    url: 'https://vuxilabs.com'
  },
  {
    name: 'FTs Project 2024',
    logo: 'https://avatars.githubusercontent.com/u/252723835?s=200&v=4',
    url: 'fts.nlfts.dev'
  }

]

setup(() => {
  // GSAP animations - only on desktop for performance
  const mm = gsap.matchMedia()

  mm.add('(min-width: 1024px)', () => {
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
      }, '-=0.8')
  })

  // Showcase scroll logic
  const scrollContainer = document.querySelector('.showcase-scroll-container')
  const prevBtn = document.querySelector('.showcase-prev')
  const nextBtn = document.querySelector('.showcase-next')

  if (scrollContainer && prevBtn && nextBtn) {
    const getScrollAmount = () => {
      const card = scrollContainer.querySelector('.showcase-card')
      return card ? (card as HTMLElement).offsetWidth + 32 : 600
    }

    prevBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' })
    })

    nextBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: getScrollAmount(), behavior: 'smooth' })
    })

    // Auto-scroll loop removed per user request for unfriendly desktop scroll
    // Native scroll is preserved for better UX
  }

  // Partners section animations
  const partnersSection = document.querySelector('#partners')
  if (partnersSection) {
    gsap.set('.partner-logo-container', { opacity: 0, y: 30 })

    gsap.to('.partner-logo-container', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#partners',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })
  }
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-inner">
        <h1 class="hero-title">
          Developer
        </h1>
        <p class="hero-sub">
          NLFTs Program Member
        </p>
        <p class="hero-desc">
          Program eksklusif untuk para developer yang ingin berkontribusi, berkolaborasi, dan membangun produk berkelas dunia bersama komunitas terbaik
        </p>
        <div class="hero-actions">
          <NuxtLink
            to="/product"
            class="hero-btn hero-btn-primary"
          >
            Mulai Sekarang
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </NuxtLink>
          <a
            href="#live-demo"
            class="hero-btn hero-btn-ghost"
          >Demo Langsung</a>
        </div>
        <p class="hero-meta">
          NLFTs &bull; Fts Project 2024 &bull; Grantara
        </p>
      </div>
    </div>

    <div class="section-divider" />

    <!-- Community Section -->
    <section
      id="community"
      class="community-section"
    >
      <UContainer>
        <div class="community-head">
          <div>
            <p class="eyebrow">
              Dicintai oleh komunitas
            </p>
            <h2>Jangan hanya percaya perkataan kami — dengarkan apa kata para developer</h2>
          </div>
          <div class="community-stats">
            <div
              v-for="stat in communityStats"
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
            v-for="testimonial in visibleTestimonials"
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

    <!-- Contributors Section -->
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
                Dibangun oleh developer di seluruh dunia
              </h2>
              <p class="text-lg sm:text-xl text-neutral-400 max-w-lg leading-relaxed">
                Ratusan kontributor membuat NLFTs lebih baik setiap hari. Bergabunglah dengan kami dan bangun masa depan modul terbuka.
              </p>
            </div>

            <div class="flex flex-wrap items-center gap-8">
              <UButton
                label="Anggota"
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

    <!-- Showcase Section -->
    <section
      id="showcase"
      class="showcase-section py-20 lg:py-32 bg-[#020205] relative overflow-hidden"
    >
      <UContainer>
        <div class="flex flex-col items-center text-center mb-16 gap-6">
          <p class="text-xs font-bold tracking-[0.3em] uppercase text-emerald-500">
            Showcase
          </p>
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter max-w-3xl">
            Aplikasi Web nyata yang dibangun dengan NLFTs
          </h2>
          <UButton
            label="Lihat semua website"
            color="neutral"
            variant="solid"
            size="lg"
            class="rounded-lg px-8 py-3 bg-white text-black font-bold hover:bg-neutral-200 transition-colors"
          />
        </div>

        <div class="showcase-slider-wrapper relative group/slider -mx-4 sm:mx-0">
          <!-- Center-focused native slider -->
          <div
            class="showcase-scroll-container flex items-start overflow-x-auto scrollbar-hide gap-0 sm:gap-10 pb-12 px-0 sm:px-[20%]"
            data-lenis-prevent
          >
            <NuxtLink
              v-for="item in showcasesItems"
              :key="item.name"
              :to="'/product/' + item.slug"
              class="flex-none w-full sm:w-[60vw] lg:w-[50vw] max-w-[800px]"
            >
              <div class="showcase-card group cursor-pointer">
                <div class="relative aspect-[16/9] overflow-hidden rounded-none sm:rounded-3xl border-y sm:border border-white/10 bg-neutral-900 shadow-2xl transition-all duration-700 group-hover:border-white/20 sm:group-hover:-translate-y-4">
                  <img
                    :src="item.thumbnail"
                    :alt="item.name"
                    class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  >
                  <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 scale-75 group-hover:scale-100">
                    <div class="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                      <UIcon
                        name="i-lucide-arrow-up-right"
                        class="w-8 h-8 text-white"
                      />
                    </div>
                  </div>

                  <!-- Card Info Overlay (Always visible on mobile) -->
                  <div class="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10">
                    <div class="flex flex-col gap-0 sm:gap-1">
                      <span class="text-[10px] sm:text-xs font-bold text-emerald-500 uppercase tracking-widest">{{ item.category }}</span>
                      <h3 class="text-xl sm:text-3xl font-black text-white tracking-tighter">{{ item.name }}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- Enhanced Navigation Buttons -->
          <button class="showcase-prev hidden xl:flex absolute left-8 top-1/2 -translate-y-12 w-14 h-14 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl items-center justify-center text-white hover:bg-white hover:text-black transition-all z-20 cursor-pointer active:scale-90 shadow-2xl">
            <UIcon
              name="i-lucide-chevron-left"
              class="w-8 h-8"
            />
          </button>
          <button class="showcase-next hidden xl:flex absolute right-8 top-1/2 -translate-y-12 w-14 h-14 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl items-center justify-center text-white hover:bg-white hover:text-black transition-all z-20 cursor-pointer active:scale-90 shadow-2xl">
            <UIcon
              name="i-lucide-chevron-right"
              class="w-8 h-8"
            />
          </button>
        </div>
      </UContainer>

      <!-- Background Decoration -->
      <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
    </section>

    <!-- Partners Section -->
    <section
      id="partners"
      class="partners-section py-16 lg:py-24 bg-black relative overflow-hidden"
    >
      <UContainer>
        <div class="flex flex-col items-center text-center mb-12 gap-4">
          <p class="text-xs font-bold tracking-[0.3em] uppercase text-neutral-500">
            Dipercaya oleh
          </p>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Organisasi terkemuka di seluruh dunia
          </h2>
        </div>
        <div class="partners-grid">
          <a
            v-for="partner in partners"
            :key="partner.name"
            :href="partner.url"
            target="_blank"
            rel="noopener noreferrer"
            class="partner-logo-container group"
          >
            <div class="partner-logo-image-wrapper">
              <img
                :src="partner.logo"
                :alt="partner.name"
                class="partner-logo-image"
                loading="lazy"
              >
            </div>
            <p class="partner-name">{{ partner.name }}</p>
          </a>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<style scoped>
.section-divider {
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  margin: 0;
  opacity: 0.6;
}

.hero {
  position: relative;
  height: clamp(600px, 100vh, 900px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 24px 32px;
  background-color: #000;
  background-image:
    radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.03) 0%, transparent 70%);
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
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.02;
  pointer-events: none;
  z-index: 2;
}

@media (max-width: 768px) {
  .hero {
    height: 100svh;
    min-height: 600px;
    max-height: none;
    padding: 80px 20px 40px;
  }
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
}

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

.hero-sub {
  font-size: clamp(0.8rem, 1.8vw, 1rem);
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 1.5rem;
}

.hero-desc {
  max-width: 540px;
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  font-weight: 300;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 2.5rem;
}

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

.hero-meta {
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0.25;
}

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

.testimonial-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 1.8rem;
  min-height: 180px;
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

.partners-section {
  position: relative;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 3rem 2rem;
  max-width: 900px;
  margin: 0 auto;
  align-items: center;
  justify-items: center;
}

@media (min-width: 640px) {
  .partners-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem 2.5rem;
  }
}

@media (min-width: 1024px) {
  .partners-grid {
    grid-template-columns: repeat(6, 1fr);
    gap: 3rem 2rem;
  }
}

.partner-logo-container {
  position: relative;
  width: 100%;
  max-width: 120px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.partner-logo-container:hover {
  transform: translateY(-4px);
}

.partner-logo-image-wrapper {
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.partner-logo-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: grayscale(100%) brightness(0.6) contrast(1.2);
  transition: all 0.3s ease;
  display: block;
}

.partner-logo-container:hover .partner-logo-image {
  filter: grayscale(0%) brightness(1) contrast(1);
  transform: scale(1.1);
}

.partner-name {
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  transition: all 0.3s ease;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  line-height: 1.2;
  margin: 0;
  width: 100%;
}

.partner-logo-container:hover .partner-name {
  color: rgba(255, 255, 255, 0.8);
}

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

/* Showcase Manual Slider Styles */
.showcase-scroll-container {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
}
.showcase-scroll-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}
</style>
