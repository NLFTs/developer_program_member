<template>
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
        >
          Demo Langsung
        </a>
      </div>

      <p class="hero-meta">
        NLFTs &bull; Fts Project 2024 &bull; Grantara
      </p>
    </div>
  </div>
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
  background-image: url("data:image/svg+xml,%3Csvg%20viewBox=%220%200%20200%20200%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22noiseFilter%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.65%22%20numOctaves=%223%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E");
  opacity: 0.02;
  pointer-events: none;
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
</style>
