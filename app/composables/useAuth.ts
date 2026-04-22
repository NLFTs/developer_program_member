interface GitHubUser {
  [key: string]: unknown
}

export const useAuth = () => {
  const user = useState<GitHubUser | null>('auth-user', () => null)
  const isLoggedIn = computed(() => !!user.value)

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

  // Logout function
  const logout = () => {
    if (import.meta.client) {
      localStorage.removeItem('github_user')
      localStorage.removeItem('github_token')
      user.value = null
      navigateTo('/login')
    }
  }

  // Initialize on mount
  onMounted(() => {
    loadUser()
  })

  return {
    user,
    isLoggedIn,
    loadUser,
    logout
  }
}
