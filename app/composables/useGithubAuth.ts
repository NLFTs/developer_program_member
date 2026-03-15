export const useGithubAuth = () => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()
  const runtimeConfig = useRuntimeConfig()

  const login = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${runtimeConfig.public.siteUrl}/auth/callback`,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent'
        }
      }
    })

    if (error) {
      console.error('Login error:', error.message)
      return { error }
    }
  }

  const loginWithPopup = () => {
    const width = 600
    const height = 700
    const left = window.screenX + (window.outerWidth - width) / 2
    const top = window.screenY + (window.outerHeight - height) / 2

    const popup = window.open(
      '/auth/login-popup',
      'GitHub Login',
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,status=yes`
    )

    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        if (!popup || popup.closed) {
          clearInterval(interval)
          resolve(user.value)
        }
      }, 500)
    })
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Logout error:', error.message)
    }
  }

  return {
    user,
    login,
    loginWithPopup,
    logout
  }
}
