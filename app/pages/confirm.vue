<script setup lang="ts">
// Simple OAuth callback handler without database
const route = useRoute()
const router = useRouter()

onMounted(async () => {
  const code = route.query.code as string

  if (code) {
    try {
      // Exchange code for access token (you'll need a server endpoint for this)
      // For now, we'll simulate a successful login
      const response = await $fetch('/api/auth/github', {
        method: 'POST',
        body: { code }
      })

      if (response && response.user) {
        // Store user data in localStorage (simple approach without database)
        localStorage.setItem('github_user', JSON.stringify(response.user))
        localStorage.setItem('github_token', response.access_token)

        // Notify parent window if in popup
        if (window.opener && window.opener !== window) {
          window.opener.postMessage({ type: 'github-auth-success' }, window.location.origin)
          setTimeout(() => {
            window.close()
          }, 100)
        } else {
          // Redirect to home
          const redirectTo = route.query.redirect as string || '/'
          router.push(redirectTo)
        }
      }
    } catch (error) {
      console.error('Auth error:', error)
      // Redirect to login on error
      router.push('/login')
    }
  } else {
    // No code, redirect to login
    router.push('/login')
  }
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-[#020420]">
    <div class="relative">
      <div class="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
      <div class="absolute inset-0 flex items-center justify-center">
        <UIcon
          name="i-simple-icons-github"
          class="w-6 h-6 text-white/50"
        />
      </div>
    </div>
    <p class="mt-6 text-white/60 font-medium tracking-wide animate-pulse">
      Menyelesaikan autentikasi...
    </p>
  </div>
</template>
