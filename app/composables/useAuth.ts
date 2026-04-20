export const useAuth = () => {
  const user = useState<any>('auth-user', () => null)
  const isLoggedIn = computed(() => !!user.value)

  // Load user from localStorage on client side
  const loadUser = () => {
    if (process.client) {
      const stored = localStorage.getItem('github_user')
      if (stored) {
        try {
          user.value = JSON.parse(stored)
        } catch (e) {
          localStorage.removeItem('github_user')
          localStorage.removeItem('github_token')
        }
      }
    }
  }

  // Logout function
  const logout = () => {
    if (process.client) {
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
