interface GitHubUser {
  [key: string]: unknown
}

const INACTIVITY_TIMEOUT = 30 * 60 * 1000 // 30 minutes

export const useAuth = () => {
  const user = useState<GitHubUser | null>('auth-user', () => null)
  const isLoggedIn = computed(() => !!user.value)
  let inactivityTimer: ReturnType<typeof setTimeout> | null = null

  // Load user from localStorage on client side
  const loadUser = () => {
    if (import.meta.client) {
      const stored = localStorage.getItem('github_user')
      if (stored) {
        try {
          user.value = JSON.parse(stored)
        } catch {
          localStorage.removeItem('github_user')
          localStorage.removeItem('github_token')
        }
      }
    }
  }

  // Reset inactivity timer
  const resetInactivityTimer = () => {
    if (!import.meta.client || !isLoggedIn.value) return

    if (inactivityTimer) clearTimeout(inactivityTimer)

    inactivityTimer = setTimeout(() => {
      logout()
    }, INACTIVITY_TIMEOUT)
  }

  // Logout function
  const logout = () => {
    if (import.meta.client) {
      localStorage.removeItem('github_user')
      localStorage.removeItem('github_token')
      user.value = null
      if (inactivityTimer) clearTimeout(inactivityTimer)
      navigateTo('/login')
    }
  }

  // Initialize on mount
  onMounted(() => {
    loadUser()
    if (isLoggedIn.value) {
      resetInactivityTimer()
      // Track user activity
      window.addEventListener('mousemove', resetInactivityTimer)
      window.addEventListener('keypress', resetInactivityTimer)
      window.addEventListener('click', resetInactivityTimer)
    }
  })

  onUnmounted(() => {
    if (inactivityTimer) clearTimeout(inactivityTimer)
    if (import.meta.client) {
      window.removeEventListener('mousemove', resetInactivityTimer)
      window.removeEventListener('keypress', resetInactivityTimer)
      window.removeEventListener('click', resetInactivityTimer)
    }
  })

  return {
    user,
    isLoggedIn,
    loadUser,
    logout
  }
}
