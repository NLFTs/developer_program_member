<script setup lang="ts">
// Simple GitHub OAuth login without database
const config = useRuntimeConfig()
const route = useRoute()
const isLoading = ref(false)

// Check if user is already logged in (from localStorage)
const isLoggedIn = ref(false)
const userData = ref<any>(null)

onMounted(() => {
  const stored = localStorage.getItem('github_user')
  if (stored) {
    try {
      userData.value = JSON.parse(stored)
      isLoggedIn.value = true
      // Redirect to home if already logged in
      navigateTo('/')
    } catch (e) {
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
    popup.document.title = 'Mengautentikasi...'
  } else {
    alert('Silakan izinkan popup untuk situs web ini untuk masuk.')
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
  <UMain class="bg-black text-white py-24 min-h-screen flex items-center">
    <UContainer>
      <div class="max-w-md mx-auto">
        <!-- Glow effects -->
        <div class="absolute inset-0 -z-10 overflow-hidden">
          <div class="bg-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <!-- Login Card -->
        <div class="login-card">
          <!-- Header -->
          <div class="text-center mb-8">
            <h1 class="text-4xl font-bold mb-2">Selamat Datang</h1>
            <p class="text-neutral-400">Masuk ke akun NLFTs Anda</p>
          </div>

          <!-- Login Form -->
          <div class="space-y-6">
            <!-- GitHub Login -->
            <UButton
              label="Masuk dengan GitHub"
              icon="i-simple-icons-github"
              size="lg"
              color="white"
              class="w-full"
              :loading="isLoading"
              @click="handleLogin"
            />

            <!-- Divider -->
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-neutral-700"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-black text-neutral-400">atau</span>
              </div>
            </div>

            <!-- Email Login (placeholder) -->
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="email@anda.com"
                  class="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Kata Sandi</label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  class="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <UButton label="Masuk" color="white" class="w-full" />
            </div>
          </div>

          <!-- Footer -->
          <div class="mt-8 text-center text-sm text-neutral-400">
            <p>Belum punya akun? <NuxtLink to="/signup" class="text-blue-400 hover:text-blue-300">Daftar di sini</NuxtLink></p>
          </div>
        </div>
      </div>
    </UContainer>
  </UMain>
</template>
