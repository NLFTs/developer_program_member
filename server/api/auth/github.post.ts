interface TokenResponse {
  access_token?: string
  [key: string]: unknown
}

interface GitHubUserData {
  id?: number
  login?: string
  name?: string
  avatar_url?: string
  email?: string
  bio?: string
  location?: string
  blog?: string
  company?: string
  [key: string]: unknown
}

export default defineEventHandler(async (event) => {
  const { code } = await readBody(event)
  const config = useRuntimeConfig()

  if (!code) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Authorization code is required'
    })
  }

  try {
    // Exchange code for access token
    const tokenResponse = await $fetch<TokenResponse>('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: {
        client_id: config.public.githubClientId || process.env.GITHUB_CLIENT_ID,
        client_secret: config.githubClientSecret || process.env.GITHUB_CLIENT_SECRET,
        code
      }
    })

    const accessToken = tokenResponse?.access_token

    if (!accessToken) {
      throw new Error('Failed to get access token')
    }

    // Get user data from GitHub
    const userData = await $fetch<GitHubUserData>('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json'
      }
    })

    // Return user data (no database storage)
    return {
      success: true,
      access_token: accessToken,
      user: {
        id: userData?.id,
        username: userData?.login,
        name: userData?.name,
        avatar: userData?.avatar_url,
        email: userData?.email,
        bio: userData?.bio,
        location: userData?.location,
        website: userData?.blog,
        company: userData?.company
      }
    }
  } catch (error) {
    console.error('GitHub OAuth error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Authentication failed'
    })
  }
})
