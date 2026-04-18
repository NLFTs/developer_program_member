import type { H3Event } from 'h3'
import { serverSupabaseClient } from '#supabase/server'

export const fetchUserProfileByUsername = async (event: H3Event, username: string) => {
  const supabase = await serverSupabaseClient(event)

  const { data, error } = await supabase
    .from('profiles')
    .select('id, username, full_name, avatar_url, website, bio, bahasa, social, is_admin, updated_at')
    .eq('username', username)
    .single()

  if (error || !data) {
    return null
  }

  return data
}
