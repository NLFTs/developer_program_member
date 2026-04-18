<script setup lang="ts">
const route = useRoute()
const username = route.params.username as string

// Fetch profile data from our cached API
const { data: profile, error, pending } = await useFetch(`/api/profile/${username}`, {
  key: `profile-${username}`,
  server: true
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

// Active tab state
const activeTab = ref('posts')
const tabs = ['Posts', 'Comments', 'Favorites', 'Topics']

// Sample stats (hardcoded for now as requested to focus on profile structure)
const stats = computed(() => [
  { value: 0, label: 'Posts' },
  { value: 0, label: 'Following' },
  { value: 0, label: 'Followers' },
  { value: 0, label: 'Likes' }
])

// Sample post data (placeholder)
const samplePosts = ref([])

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

          <!-- Name & Username -->
          <div class="pb-1">
            <div class="flex items-center gap-2">
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

            <!-- Posts Feed (Dynamic but empty for now as requested) -->
            <div v-if="activeTab === 'posts' && samplePosts.length > 0" class="space-y-4">
               <!-- Logic for rendering posts -->
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
</style>
