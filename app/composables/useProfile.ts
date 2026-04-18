import { computed } from 'vue'

export const useProfile = () => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()
  
  const adminUsernames = ['davingm', 'nairhacan', 'DavinGM']
  const adminEmails = ['davin.gm.etc@gmail.com']

  // Shared state across components
  const profile = useState<any>('user-profile', () => null)
  const loading = useState<boolean>('user-profile-loading', () => false)

  // Computed helper for Admin status
  const isAdmin = computed(() => {
    if (!user.value) return false
    const username = profile.value?.username || user.value?.user_metadata?.preferred_username || user.value?.user_metadata?.user_name
    const email = user.value?.email
    
    return adminUsernames.includes(username || '') || 
           adminEmails.includes(email || '') ||
           profile.value?.is_admin === true
  })

  const fetchProfile = async () => {
    const userId = user.value?.id
    console.log('[Profile Debug] Attempting to fetch profile for ID:', userId)
    if (!userId) return
    
    loading.value = true
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (error && error.code !== 'PGRST116') throw error
      
      console.log('[Profile Debug] Data received from DB:', data)
      profile.value = data
    } catch (error: any) {
      console.error('[Profile Debug] Fetch Error:', error.message)
    } finally {
      loading.value = false
    }
  }

  const upsertProfile = async (updates: any) => {
    const userId = user.value?.id
    if (!userId) return
    console.log('[Profile Debug] Upserting profile for:', updates.username)
    
    const username = updates.username || profile.value?.username
    // Check admin status for this specific upsert
    const willBeAdmin = adminUsernames.includes(username || '') || adminEmails.includes(user.value?.email || '')

    loading.value = true
    try {
      const { error } = await supabase.from('profiles').upsert({
        id: userId,
        updated_at: new Date().toISOString(),
        ...updates,
        is_admin: willBeAdmin
      })
      if (error) throw error
      await fetchProfile()
    } catch (error: any) {
      console.error('[Profile Debug] Upsert Error:', error.message)
    } finally {
      loading.value = false
    }
  }

  // Sync profile logic - watching the whole user object
  watch(user, async (newUser) => {
    if (newUser?.id) {
      console.log('[Profile Debug] User ID found, fetching profile...', newUser.id)
      await fetchProfile()
      
      // If profile doesn't exist in DB, create it from metadata
      if (!profile.value) {
        console.log('[Profile Debug] Creating new profile from metadata...')
        const metadata = newUser.user_metadata
        await upsertProfile({
          username: metadata.preferred_username || metadata.user_name || metadata.name || 'user',
          full_name: metadata.full_name || metadata.name || 'User',
          avatar_url: metadata.avatar_url,
          website: metadata.website || ''
        })
      }
    } else {
      console.log('[Profile Debug] No active user session.')
      profile.value = null
    }
  }, { immediate: true })

  return {
    profile,
    loading,
    isAdmin, // Exported now!
    fetchProfile,
    upsertProfile
  }
}
