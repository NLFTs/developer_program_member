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
    const tokenResponse = await $fetch('https://github.com/login/oauth/access_token', {
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

    const accessToken = (tokenResponse as any).access_token

    if (!accessToken) {
      throw new Error('Failed to get access token')
    }

    // Get user data from GitHub
    const userData = await $fetch('https://api.github.com/user', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json'
      }
    })

    // Return user data (no database storage)
    return {
      success: true,
      access_token: accessToken,
      user: {
        id: (userData as any).id,
        username: (userData as any).login,
        name: (userData as any).name,
        avatar: (userData as any).avatar_url,
        email: (userData as any).email,
        bio: (userData as any).bio,
        location: (userData as any).location,
        website: (userData as any).blog,
        company: (userData as any).company
      }
    }
  } catch (error: any) {
    console.error('GitHub OAuth error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Authentication failed'
    })
  }
})
