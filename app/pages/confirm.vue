<script setup lang="ts">
const client = useSupabaseClient()
const user = useSupabaseUser()
const route = useRoute()

// Comprehensive finish function
const finishAuth = (currentUser: any) => {
  if (!currentUser) return
  
  const redirectTo = route.query.redirect as string || '/'
  
  // Double check if we are in a popup
  if (window.opener && window.opener !== window) {
    try {
      // Notify parent about success
      window.opener.postMessage({ type: 'supabase-auth-success' }, window.location.origin)
      
      // Redirect parent window
      window.opener.location.href = redirectTo
      
      // Close the popup after a tiny delay to ensure message delivery
      setTimeout(() => {
        window.close()
      }, 100)
    } catch (e) {
      console.error('Error communicating with parent window:', e)
      // Fallback for full-page redirect if parent communication fails
      navigateTo(redirectTo)
    }
  } else {
    // Normal full-page redirect
    navigateTo(redirectTo)
  }
}

// Listen to auth state changes - this is often faster than the user watch
client.auth.onAuthStateChange((event, session) => {
  if ((event === 'SIGNED_IN' || event === 'INITIAL_SESSION') && session?.user) {
    finishAuth(session.user)
  }
})

// Watch user state as a secondary check
watch(user, (newUser) => {
  if (newUser) {
    finishAuth(newUser)
  }
}, { immediate: true })

onMounted(() => {
  // Check if session is already active on mount
  if (user.value) {
    finishAuth(user.value)
  }
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-[#020420]">
    <div class="relative">
      <div class="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
      <div class="absolute inset-0 flex items-center justify-center">
        <UIcon name="i-simple-icons-github" class="w-6 h-6 text-white/50" />
      </div>
    </div>
    <p class="mt-6 text-white/60 font-medium tracking-wide animate-pulse">
      Completing authentication...
    </p>
  </div>
</template>
