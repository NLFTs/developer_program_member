<script setup lang="ts">
interface GitHubUserData {
  [key: string]: unknown
}

// Simple GitHub OAuth login without database
const config = useRuntimeConfig()
const isLoading = ref(false)

// Check if user is already logged in (from localStorage)
const isLoggedIn = ref(false)
const userData = ref<GitHubUserData | null>(null)

onMounted(() => {
  const stored = localStorage.getItem('github_user')
  if (stored) {
    try {
      userData.value = JSON.parse(stored)
      isLoggedIn.value = true
      // Redirect to home if already logged in
      navigateTo('/')
    } catch {
      localStorage.removeItem('github_user')
    }
  }
})

const handleLogin = async () => {
  isLoading.value = true

  // GitHub OAuth URL
  const clientId = config.public.githubClientId || 'Ov23liXqPqPqPqPqPqPq' // Replace with your GitHub OAuth App Client ID
  const redirectUri = `${window.location.origin}/confirm`
  const scope = 'read:user user:email'

  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}`

  // Open popup for OAuth
  const width = 600
  const height = 750
  const left = (window.innerWidth - width) / 2 + window.screenX
  const top = (window.innerHeight - height) / 2 + window.screenY

  const popup = window.open(
    githubAuthUrl,
    'github-auth',
    `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,resizable=yes`
  )

  if (popup) {
    popup.document.title = 'Authenticating...'
  } else {
    alert('Please allow popups for this website to sign in.')
    isLoading.value = false
  }

  // Listen for auth success
  window.addEventListener('message', (event) => {
    if (event.origin !== window.location.origin) return
    if (event.data?.type === 'github-auth-success') {
      isLoading.value = false
      navigateTo('/')
    }
  })
}

const { gsap } = useGsap()

onMounted(() => {
  gsap.from('.login-card', {
    y: 20,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.from('.bg-glow', {
    scale: 0.8,
    opacity: 0,
    duration: 2,
    stagger: 0.2,
    ease: 'power2.out'
  })
})
</script>

<template>
  <div class="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020420] py-12 px-4 sm:px-6 lg:px-8">
    <!-- Premium Background Effects -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full bg-glow" />
      <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full bg-glow" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
    </div>

    <!-- Login Card -->
    <div class="login-card relative w-full max-w-md">
      <div class="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl" />

      <div class="relative p-8 sm:p-12 flex flex-col items-center text-center">
        <!-- Logo/Icon -->
        <div class="mb-8 p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-white/10">
          <UIcon
            name="i-simple-icons-github"
            class="w-12 h-12 text-white"
          />
        </div>

        <h1 class="text-3xl font-extrabold text-white tracking-tight mb-2 font-display">
          Welcome Back
        </h1>
        <p class="text-white/50 text-sm mb-10 max-w-[280px]">
          Sign in with GitHub to access the NLFTs Developer Program.
        </p>

        <!-- GitHub Login Button -->
        <UButton
          size="xl"
          color="white"
          variant="solid"
          class="w-full justify-center group relative overflow-hidden rounded-xl py-4 font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
          :loading="isLoading"
          @click="handleLogin"
        >
          <template #leading>
            <UIcon
              name="i-simple-icons-github"
              class="w-5 h-5 mr-2"
            />
          </template>
          Continue with GitHub

          <!-- Subtle Inner Shine -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
        </UButton>

        <div class="mt-8 pt-8 border-t border-white/5 w-full">
          <p class="text-white/30 text-xs">
            By signing in, you agree to our
            <NuxtLink
              to="/terms"
              class="text-white/60 hover:text-white transition-colors underline underline-offset-4"
            >Terms of Service</NuxtLink>
            and
            <NuxtLink
              to="/privacy"
              class="text-white/60 hover:text-white transition-colors underline underline-offset-4"
            >Privacy Policy</NuxtLink>.
          </p>
        </div>
      </div>
    </div>

    <!-- Additional Ambient Elements -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 text-white/20">
      <UIcon
        name="i-simple-icons-nuxtdotjs"
        class="w-5 h-5"
      />
      <UIcon
        name="i-simple-icons-github"
        class="w-5 h-5"
      />
      <UIcon
        name="i-simple-icons-tailwindcss"
        class="w-5 h-5"
      />
    </div>
  </div>
</template>

<style scoped>
.font-display {
  font-family: 'Outfit', sans-serif;
}
</style>
