import { ref } from 'vue'

export const useSupabaseClient = () => {
  return {
    auth: {
      signInWithOAuth: async () => ({ error: null }),
      signOut: async () => ({ error: null }),
      getUser: async () => ({ data: { user: null }, error: null }),
      getSession: async () => ({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
    },
    from: () => ({
      select: () => ({
        eq: () => ({
          single: async () => ({ data: null, error: null }),
          maybeSingle: async () => ({ data: null, error: null })
        }),
        order: () => ({
          limit: async () => ({ data: [], error: null })
        })
      }),
      insert: async () => ({ data: null, error: null }),
      update: async () => ({ data: null, error: null }),
      delete: async () => ({ data: null, error: null })
    })
  }
}

export const useSupabaseUser = () => {
  return ref(null)
}
