export default defineCachedEventHandler(async (event) => {
  const username = getRouterParam(event, 'username')

  if (!username) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Username is required'
    })
  }

  console.log(`[API] Fetching profile for: ${username}`)

  const profile = await fetchUserProfileByUsername(event, username)

  if (!profile) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Profile not found'
    })
  }

  return profile
}, {
  maxAge: 60 * 5,
  name: 'user-profile',
  getKey: (event) => getRouterParam(event, 'username')
})
