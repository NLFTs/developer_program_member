<script setup lang="ts">
const route = useRoute()
const username = route.params.username as string

// ====== AUTH & OWNERSHIP ======
const { profile: myProfile, isAdmin: myIsAdmin, fetchProfile: refetchMyProfile } = useProfile()
const user = useSupabaseUser()

// Check if the logged-in user is viewing their own profile
// Uses both DB profile and GitHub OAuth metadata as fallback
const isOwner = computed(() => {
  if (!user.value) return false
  // Primary: check from DB profile loaded by composable
  if (myProfile.value?.username === username) return true
  // Fallback: check from GitHub OAuth user metadata (available before DB fetch completes)
  const metaUsername = user.value.user_metadata?.preferred_username || user.value.user_metadata?.user_name
  return metaUsername === username
})

// ====== FETCH PROFILE DATA ======
// For owner: use client-side composable data (always fresh)
// For visitors: use server API (cached)
const { data: apiProfile, error, pending, refresh: refreshApiProfile } = await useFetch(`/api/profile/${username}`, {
  key: `profile-${username}`,
  server: true
})

// Smart profile: owner sees fresh client data, visitors see cached API data
const profile = computed(() => {
  if (isOwner.value && myProfile.value) return myProfile.value
  return apiProfile.value
})

// Fetch blog posts written by this user
const { data: userBlogs } = await useAsyncData(`blogs-${username}`, async () => {
  const allPosts = await queryCollection('posts').all()
  return allPosts.filter(post => 
    post.authors?.some((author: any) => author.name === username)
  )
})

// Transform userBlogs for the UI
const displayedPosts = computed(() => {
  if (!userBlogs.value) return []
  return userBlogs.value.map(blog => ({
    id: blog.path,
    author: profile.value?.username || username,
    avatar: profile.value?.avatar_url || 'https://api.dicebear.com/9.x/adventurer/svg?seed=' + username,
    date: blog.date,
    category: blog.badge?.label || 'Article',
    title: blog.title,
    image: blog.image?.src || blog.image,
    badge: true,
    path: blog.path
  }))
})

// Handle 404
if (error.value && error.value.statusCode === 404) {
  throw createError({ statusCode: 404, statusMessage: 'User not found', fatal: true })
}

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: () => profile.value ? `${profile.value.full_name || profile.value.username} (@${profile.value.username})` : 'User Profile',
  description: () => profile.value ? `Check out ${profile.value.username}'s profile on NLFTs Developer Program.` : 'NLFTs Developer Program — Member Profile Page'
})

const { gsap, setup } = useGsap()

// ====== EDIT MODAL ======
const showEditModal = ref(false)

// After saving, refresh both the composable and the API cache
async function onProfileSaved() {
  await refetchMyProfile()
  // Also refresh the API data so that next visitor sees updated data
  await refreshApiProfile()
}

// Active tab state
const activeTab = ref('posts')
const tabs = ['Posts', 'Comments', 'Favorites', 'Topics']

// Stats (dynamically calculating post count)
const stats = computed(() => [
  { value: displayedPosts.value.length, label: 'Posts' },
  { value: 0, label: 'Following' },
  { value: 0, label: 'Followers' },
  { value: 0, label: 'Likes' }
])

// ====== TECH / LANGUAGE DATA MAP ======
const techMap: Record<string, { label: string; icon: string; color: string }> = {
  flutter: { label: 'Flutter', icon: 'i-simple-icons-flutter', color: '#02569B' },
  dart: { label: 'Dart', icon: 'i-simple-icons-dart', color: '#0175C2' },
  kotlin: { label: 'Kotlin', icon: 'i-simple-icons-kotlin', color: '#7F52FF' },
  java: { label: 'Java', icon: 'i-simple-icons-openjdk', color: '#ED8B00' },
  nuxt: { label: 'Nuxt', icon: 'i-simple-icons-nuxtdotjs', color: '#00DC82' },
  next: { label: 'Next.js', icon: 'i-simple-icons-nextdotjs', color: '#ffffff' },
  laravel: { label: 'Laravel', icon: 'i-simple-icons-laravel', color: '#FF2D20' },
  php: { label: 'PHP', icon: 'i-simple-icons-php', color: '#777BB4' },
  typescript: { label: 'TypeScript', icon: 'i-simple-icons-typescript', color: '#3178C6' },
  javascript: { label: 'JavaScript', icon: 'i-simple-icons-javascript', color: '#F7DF1E' },
  rust: { label: 'Rust', icon: 'i-simple-icons-rust', color: '#CE422B' },
  vuejs: { label: 'Vue.js', icon: 'i-simple-icons-vuedotjs', color: '#4FC08D' },
  react: { label: 'React', icon: 'i-simple-icons-react', color: '#61DAFB' },
  nodejs: { label: 'Node.js', icon: 'i-simple-icons-nodedotjs', color: '#5FA04E' },
  angular: { label: 'Angular', icon: 'i-simple-icons-angular', color: '#DD0031' },
  html: { label: 'HTML', icon: 'i-simple-icons-html5', color: '#E34F26' },
  css: { label: 'CSS', icon: 'i-simple-icons-css3', color: '#1572B6' },
  scss: { label: 'SCSS', icon: 'i-simple-icons-sass', color: '#CC6699' },
  tailwind: { label: 'Tailwind CSS', icon: 'i-simple-icons-tailwindcss', color: '#06B6D4' },
  framer: { label: 'Framer', icon: 'i-simple-icons-framer', color: '#0055FF' },
  gsap: { label: 'GSAP', icon: 'i-simple-icons-greensock', color: '#88CE02' },
  python: { label: 'Python', icon: 'i-simple-icons-python', color: '#3776AB' },
  cpp: { label: 'C++', icon: 'i-simple-icons-cplusplus', color: '#00599C' },
  golang: { label: 'Go', icon: 'i-simple-icons-go', color: '#00ADD8' },
  csharp: { label: 'C#', icon: 'i-simple-icons-csharp', color: '#512BD4' },
  c: { label: 'C', icon: 'i-simple-icons-c', color: '#A8B9CC' },
  swift: { label: 'Swift', icon: 'i-simple-icons-swift', color: '#F05138' },
  ruby: { label: 'Ruby', icon: 'i-simple-icons-ruby', color: '#CC342D' },
  deno: { label: 'Deno', icon: 'i-simple-icons-deno', color: '#70FFAF' },
  bun: { label: 'Bun', icon: 'i-simple-icons-bun', color: '#FBF0DF' },
  vite: { label: 'Vite', icon: 'i-simple-icons-vite', color: '#646CFF' },
  postgresql: { label: 'PostgreSQL', icon: 'i-simple-icons-postgresql', color: '#4169E1' },
  mysql: { label: 'MySQL', icon: 'i-simple-icons-mysql', color: '#4479A1' },
  mongodb: { label: 'MongoDB', icon: 'i-simple-icons-mongodb', color: '#47A248' },
  firebase: { label: 'Firebase', icon: 'i-simple-icons-firebase', color: '#DD2C00' },
  supabase: { label: 'Supabase', icon: 'i-simple-icons-supabase', color: '#3ECF8E' },
  vercel: { label: 'Vercel', icon: 'i-simple-icons-vercel', color: '#ffffff' },
  netlify: { label: 'Netlify', icon: 'i-simple-icons-netlify', color: '#00C7B7' },
  railway: { label: 'Railway', icon: 'i-simple-icons-railway', color: '#0B0D0E' },
  render: { label: 'Render', icon: 'i-simple-icons-render', color: '#46E3B7' },
  heroku: { label: 'Heroku', icon: 'i-simple-icons-heroku', color: '#430098' },
  digitalocean: { label: 'DigitalOcean', icon: 'i-simple-icons-digitalocean', color: '#0080FF' },
  aws: { label: 'AWS', icon: 'i-simple-icons-amazonaws', color: '#FF9900' },
  gcp: { label: 'Google Cloud', icon: 'i-simple-icons-googlecloud', color: '#4285F4' },
  azure: { label: 'Azure', icon: 'i-simple-icons-microsoftazure', color: '#0078D4' }
}

// Social platform config
const socialConfig: Record<string, { label: string; icon: string; color: string }> = {
  github: { label: 'GitHub', icon: 'i-simple-icons-github', color: '#ffffff' },
  instagram: { label: 'Instagram', icon: 'i-simple-icons-instagram', color: '#E4405F' },
  bluesky: { label: 'Bluesky', icon: 'i-simple-icons-bluesky', color: '#0085FF' },
  facebook: { label: 'Facebook', icon: 'i-simple-icons-facebook', color: '#0866FF' },
  x: { label: 'X', icon: 'i-simple-icons-x', color: '#ffffff' }
}

// Extract username from social URL
function extractUsername(url: string): string {
  if (!url) return ''
  try {
    const parsed = new URL(url)
    const parts = parsed.pathname.split('/').filter(Boolean)
    if (parsed.hostname.includes('bsky')) return parts.length > 1 ? parts[1] : parts[0] || ''
    return parts[parts.length - 1] || ''
  } catch {
    return url
  }
}

// Computed social entries (non-empty only)
const socialEntries = computed(() => {
  const social = profile.value?.social
  if (!social || typeof social !== 'object') return []
  return Object.entries(social as Record<string, string>)
    .filter(([, url]) => url && url.trim())
    .map(([key, url]) => ({
      key,
      url,
      username: extractUsername(url),
      ...socialConfig[key]
    }))
    .filter(s => s.icon)
})

// Computed tech items
const techItems = computed(() => {
  if (!Array.isArray(profile.value?.bahasa)) return []
  return profile.value.bahasa
    .map((id: string) => ({ id, ...techMap[id] }))
    .filter((t: any) => t.label)
})

// GSAP entrance animations
setup(() => {
  if (!profile.value) return
  
  gsap.from('.profile-banner', {
    opacity: 0,
    y: -30,
    duration: 0.8,
    ease: 'power3.out'
  })

  gsap.from('.profile-info-section', {
    opacity: 0,
    y: 20,
    duration: 0.7,
    delay: 0.3,
    ease: 'power3.out'
  })

  gsap.from('.profile-content-area', {
    opacity: 0,
    y: 30,
    duration: 0.7,
    delay: 0.5,
    ease: 'power3.out'
  })

  gsap.from('.profile-sidebar > div', {
    opacity: 0,
    x: 30,
    duration: 0.6,
    delay: 0.6,
    stagger: 0.15,
    ease: 'power3.out'
  })
})
</script>

<template>
  <div class="profile-page min-h-screen bg-[#0e1525]">
    <!-- Loading State -->
    <div v-if="pending" class="flex items-center justify-center min-h-[60vh]">
      <div class="relative w-16 h-16">
        <div class="absolute inset-0 rounded-full border-4 border-blue-500/20"></div>
        <div class="absolute inset-0 rounded-full border-4 border-t-blue-500 animate-spin"></div>
      </div>
    </div>

    <template v-else-if="profile">
      <!-- ====== COVER BANNER ====== -->
      <div class="profile-banner relative w-full h-[260px] sm:h-[300px] overflow-hidden">
        <div class="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=1400&auto=format&fit=crop&q=80"
            alt="Profile Banner"
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-[#0e1525] via-[#0e1525]/40 to-transparent" />
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10" />
        </div>

        <!-- Edit Buttons — ONLY visible to the profile owner, client-only to avoid SSR null user -->
        <ClientOnly>
          <div v-if="isOwner" class="absolute top-4 right-4 flex items-center gap-2 z-10">
            <button class="p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:bg-black/60 transition-all">
              <UIcon name="i-lucide-camera" class="w-5 h-5" />
            </button>
            <button
              class="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-all shadow-lg shadow-blue-600/30"
              @click="showEditModal = true"
            >
              <UIcon name="i-lucide-pencil" class="w-3.5 h-3.5" />
              <span>Edit Profile</span>
            </button>
          </div>
        </ClientOnly>
      </div>

      <!-- ====== PROFILE INFO SECTION ====== -->
      <div class="profile-info-section relative z-10 max-w-6xl mx-auto px-4 sm:px-6 -mt-16">
        <div class="flex items-end gap-5">
          <!-- Avatar -->
          <div class="relative shrink-0">
            <div class="w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] rounded-full p-1 bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 shadow-xl shadow-blue-500/20">
              <img
                :src="profile?.avatar_url || 'https://api.dicebear.com/9.x/adventurer/svg?seed=' + profile?.username"
                alt="User Avatar"
                class="w-full h-full object-cover rounded-full border-4 border-[#0e1525]"
              >
            </div>
            <div class="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-green-500 border-3 border-[#0e1525] shadow-lg" />
          </div>

          <!-- Name & Username & Bio & Website -->
          <div class="pb-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              <h1 class="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {{ profile?.full_name || profile?.username }}
              </h1>
              <span v-if="profile?.is_admin" class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/30">
                <UIcon name="i-lucide-check" class="w-3 h-3 text-white stroke-[3]" />
              </span>
              <span class="text-lg">🎖️</span>
            </div>
            <p class="text-sm text-white/40 mt-0.5">
              <UIcon name="i-lucide-at-sign" class="w-3.5 h-3.5 inline" />
              {{ profile?.username }}
            </p>
            <!-- Bio -->
            <p v-if="profile?.bio" class="text-sm text-white/60 mt-2 max-w-lg leading-relaxed">
              {{ profile.bio }}
            </p>
            <!-- Website -->
            <a
              v-if="profile?.website"
              :href="profile.website"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 mt-1.5 transition-colors group"
            >
              <UIcon name="i-lucide-link" class="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
              {{ profile.website.replace(/^https?:\/\//, '') }}
            </a>
          </div>
        </div>

        <!-- Stats Bar -->
        <div class="flex items-center gap-1 mt-5 text-sm">
          <template v-for="(stat, index) in stats" :key="stat.label">
            <div class="flex items-center gap-1.5">
              <span class="font-bold text-white text-base">{{ stat.value }}</span>
              <span class="text-white/40">{{ stat.label }}</span>
            </div>
            <span v-if="index < stats.length - 1" class="text-white/15 mx-2">/</span>
          </template>
        </div>
      </div>

      <!-- ====== MAIN CONTENT AREA ====== -->
      <div class="profile-content-area max-w-6xl mx-auto px-4 sm:px-6 mt-8 pb-16">
        <div class="flex flex-col lg:flex-row gap-6">
          <!-- LEFT: Posts / Tabs -->
          <div class="flex-1 min-w-0">
            <!-- Tab Navigation -->
            <div class="flex items-center gap-1 border-b border-white/10 mb-6">
              <button
                v-for="tab in tabs"
                :key="tab"
                class="relative px-5 py-3.5 text-sm font-bold transition-all"
                :class="[
                  activeTab === tab.toLowerCase()
                    ? 'text-white'
                    : 'text-white/40 hover:text-white/70'
                ]"
                @click="activeTab = tab.toLowerCase()"
              >
                {{ tab }}
                <div
                  v-if="activeTab === tab.toLowerCase()"
                  class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                />
              </button>
            </div>

            <!-- Posts Feed -->
            <div v-if="activeTab === 'posts' && displayedPosts.length > 0" class="space-y-4">
              <NuxtLink
                v-for="post in displayedPosts"
                :key="post.id"
                :to="post.path"
                class="group flex bg-[#151d2e]/80 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300"
              >
                <!-- Post Image Side -->
                <div class="hidden sm:block w-1/3 min-w-[200px] h-full overflow-hidden">
                  <img
                    :src="post.image"
                    :alt="post.title"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  >
                </div>

                <div class="flex-1 flex flex-col p-5">
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-2">
                       <span class="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                         {{ post.category }}
                       </span>
                       <span class="text-xs text-white/30">{{ new Date(post.date).toLocaleDateString() }}</span>
                    </div>
                  </div>
                  <h3 class="text-base sm:text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                    {{ post.title }}
                  </h3>
                  <div class="flex items-center gap-2 mt-auto">
                    <img :src="post.avatar" class="w-5 h-5 rounded-full" />
                    <span class="text-xs font-medium text-white/50">{{ post.author }}</span>
                  </div>
                </div>
              </NuxtLink>
            </div>

            <!-- Other Tabs / Empty State -->
            <div v-else class="flex flex-col items-center justify-center py-20 text-center bg-[#151d2e]/40 border border-white/5 rounded-3xl">
              <div class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
                <UIcon name="i-lucide-inbox" class="w-8 h-8 text-white/20" />
              </div>
              <p class="text-white/30 text-sm font-medium">No {{ activeTab }} yet</p>
              <p class="text-white/15 text-xs mt-1">Content will appear here when available.</p>
            </div>
          </div>

          <!-- RIGHT: Sidebar -->
          <div class="profile-sidebar w-full lg:w-[320px] shrink-0 space-y-4">

            <!-- ====== TECH STACK CARD ====== -->
            <div v-if="techItems.length > 0" class="bg-[#151d2e]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-5">
              <div class="flex items-center gap-2 mb-4">
                <UIcon name="i-lucide-code-2" class="w-4 h-4 text-green-400" />
                <h3 class="text-base font-bold text-white">Tech Stack</h3>
              </div>
              <div class="flex flex-wrap gap-2">
                <div
                  v-for="tech in techItems"
                  :key="tech.id"
                  class="tech-tag inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all hover:scale-105 cursor-default"
                  :style="{
                    backgroundColor: tech.color + '12',
                    borderColor: tech.color + '25',
                    color: tech.color
                  }"
                >
                  <UIcon :name="tech.icon" class="w-4 h-4" />
                  {{ tech.label }}
                </div>
              </div>
            </div>

            <!-- ====== SOCIAL MEDIA CARD ====== -->
            <div v-if="socialEntries.length > 0" class="bg-[#151d2e]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-5">
              <div class="flex items-center gap-2 mb-4">
                <UIcon name="i-lucide-share-2" class="w-4 h-4 text-purple-400" />
                <h3 class="text-base font-bold text-white">Social</h3>
              </div>
              <div class="space-y-2">
                <a
                  v-for="social in socialEntries"
                  :key="social.key"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-all group"
                >
                  <div
                    class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border border-white/5 transition-all group-hover:scale-110"
                    :style="{ backgroundColor: social.color + '15' }"
                  >
                    <UIcon :name="social.icon" class="w-4.5 h-4.5" :style="{ color: social.color }" />
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-bold text-white/80 group-hover:text-white transition-colors truncate">
                      @{{ social.username }}
                    </p>
                    <p class="text-[11px] text-white/25 truncate">{{ social.label }}</p>
                  </div>
                  <UIcon name="i-lucide-external-link" class="w-3.5 h-3.5 text-white/15 group-hover:text-white/40 transition-colors shrink-0" />
                </a>
              </div>
            </div>

            <!-- Creator LAB Card -->
            <div class="bg-[#151d2e]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-5">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-base font-bold text-white">Creator LAB</h3>
              </div>
              <div class="grid grid-cols-2 gap-3 mb-4">
                <div class="bg-[#1a2236] rounded-xl p-3.5 border border-white/5">
                  <div class="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                    <UIcon name="i-lucide-eye" class="w-4 h-4 text-green-400" />
                  </div>
                  <p class="text-xl font-bold text-white">0</p>
                  <p class="text-xs text-white/40 mt-0.5">Post Views</p>
                </div>
                <div class="bg-[#1a2236] rounded-xl p-3.5 border border-white/5">
                  <div class="w-7 h-7 rounded-full bg-orange-500/20 flex items-center justify-center mb-2">
                    <UIcon name="i-lucide-heart" class="w-4 h-4 text-orange-400" />
                  </div>
                  <p class="text-xl font-bold text-white">0</p>
                  <p class="text-xs text-white/40 mt-0.5">Post Likes</p>
                </div>
              </div>
              <button class="w-full py-2.5 rounded-xl bg-blue-600/80 hover:bg-blue-500 text-white text-sm font-bold transition-all">
                Enter
              </button>
            </div>

            <!-- Achievement Center Card -->
            <div class="bg-[#151d2e]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-5">
              <h3 class="text-base font-bold text-white mb-4">Achievement Center</h3>
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20">
                  <UIcon name="i-lucide-trophy" class="w-6 h-6" />
                </div>
                <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20">
                  <UIcon name="i-lucide-star" class="w-6 h-6" />
                </div>
                <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20">
                  <UIcon name="i-lucide-plus" class="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- ====== EDIT PROFILE MODAL (only rendered for owner, client-only) ====== -->
    <ClientOnly>
      <ProfileEditModal
        v-if="isOwner"
        v-model="showEditModal"
        @saved="onProfileSaved"
      />
    </ClientOnly>
  </div>
</template>

<style scoped>
.profile-page {
  font-family: var(--font-sans);
}

.profile-info-section img {
  image-rendering: -webkit-optimize-contrast;
}

button:has(> div[class*="bg-gradient"]):hover {
  text-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
}

.profile-sidebar > div {
  transition: all 0.3s ease;
}

.profile-sidebar > div:hover {
  border-color: rgba(255, 255, 255, 0.1);
  background-color: rgba(21, 29, 46, 0.9);
  transform: translateY(-2px);
}

.tech-tag:hover {
  box-shadow: 0 0 15px currentColor;
}
</style>
