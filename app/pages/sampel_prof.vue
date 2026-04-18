<script setup lang="ts">


definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'User Profile',
  description: 'NLFTs Developer Program — Member Profile Page'
})

const { profile, isAdmin } = useProfile()
const user = useSupabaseUser()
const { gsap, setup } = useGsap()

// Active tab state
const activeTab = ref('posts')
const tabs = ['Posts', 'Comments', 'Favorites', 'Topics']

// Sample stats
const stats = computed(() => [
  { value: 2, label: 'Posts' },
  { value: 3, label: 'Following' },
  { value: 1, label: 'Followers' },
  { value: 12, label: 'Likes' }
])

// Sample post data
const samplePosts = ref([
  {
    id: 1,
    author: profile.value?.username || user.value?.user_metadata?.preferred_username || 'nairha',
    avatar: profile.value?.avatar_url || user.value?.user_metadata?.avatar_url || 'https://api.dicebear.com/9.x/adventurer/svg?seed=nairha',
    date: '2025/01/24',
    category: 'Developer Program',
    title: 'Proyek pertama saya di NLFTs Developer Program 🚀',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
    badge: true
  },
  {
    id: 2,
    author: profile.value?.username || user.value?.user_metadata?.preferred_username || 'nairha',
    avatar: profile.value?.avatar_url || user.value?.user_metadata?.avatar_url || 'https://api.dicebear.com/9.x/adventurer/svg?seed=nairha',
    date: '2025/01/20',
    category: 'Open Source',
    title: 'Kontribusi pertama ke repo NLFTs — bagus banget pengalamannya!',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=60',
    badge: false
  }
])

// Creator LAB data
const creatorLab = reactive({
  postViews: 79,
  postLikes: 1
})

// GSAP entrance animations
setup(() => {
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
    <!-- ====== COVER BANNER ====== -->
    <div class="profile-banner relative w-full h-[260px] sm:h-[300px] overflow-hidden">
      <!-- Banner Image -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=1400&auto=format&fit=crop&q=80"
          alt="Profile Banner"
          class="w-full h-full object-cover"
        >
        <!-- Gradient overlays -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#0e1525] via-[#0e1525]/40 to-transparent" />
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10" />
      </div>

      <!-- Edit Button (top right) -->
      <div class="absolute top-4 right-4 flex items-center gap-2 z-10">
        <button class="p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:bg-black/60 transition-all">
          <UIcon name="i-lucide-camera" class="w-5 h-5" />
        </button>
        <button class="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-all shadow-lg shadow-blue-600/30">
          <span>Edit</span>
          <UIcon name="i-lucide-chevron-down" class="w-3.5 h-3.5" />
        </button>
      </div>
    </div>

    <!-- ====== PROFILE INFO SECTION ====== -->
    <div class="profile-info-section relative z-10 max-w-6xl mx-auto px-4 sm:px-6 -mt-16">
      <div class="flex items-end gap-5">
        <!-- Avatar -->
        <div class="relative shrink-0">
          <div class="w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] rounded-full p-1 bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 shadow-xl shadow-blue-500/20">
            <img
              :src="profile?.avatar_url || user?.user_metadata?.avatar_url || 'https://api.dicebear.com/9.x/adventurer/svg?seed=nairha'"
              alt="User Avatar"
              class="w-full h-full object-cover rounded-full border-4 border-[#0e1525]"
            >
          </div>
          <!-- Online indicator -->
          <div class="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-green-500 border-3 border-[#0e1525] shadow-lg" />
        </div>

        <!-- Name & Username -->
        <div class="pb-1">
          <div class="flex items-center gap-2">
            <h1 class="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {{ profile?.full_name || profile?.username || user?.user_metadata?.full_name || 'nairha' }}
            </h1>
            <!-- Verified Badge -->
            <span v-if="isAdmin" class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/30">
              <UIcon name="i-lucide-check" class="w-3 h-3 text-white stroke-[3]" />
            </span>
            <!-- Special Badge -->
            <span class="text-lg">🎖️</span>
          </div>
          <p class="text-sm text-white/40 mt-0.5">
            <UIcon name="i-lucide-at-sign" class="w-3.5 h-3.5 inline" />
            {{ profile?.username || user?.user_metadata?.preferred_username || 'user' }}
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
              <!-- Active Indicator -->
              <div
                v-if="activeTab === tab.toLowerCase()"
                class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
              />
            </button>
          </div>

          <!-- Posts Feed -->
          <div v-if="activeTab === 'posts'" class="space-y-4">
            <div
              v-for="post in samplePosts"
              :key="post.id"
              class="group bg-[#151d2e]/80 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300"
            >
              <!-- Post Header -->
              <div class="flex items-center justify-between p-4 pb-2">
                <div class="flex items-center gap-3">
                  <img
                    :src="post.avatar"
                    :alt="post.author"
                    class="w-10 h-10 rounded-full object-cover ring-2 ring-white/10"
                  >
                  <div>
                    <div class="flex items-center gap-1.5">
                      <span class="text-sm font-bold text-white">{{ post.author }}</span>
                      <span v-if="post.badge" class="text-sm">🎖️</span>
                    </div>
                    <span class="text-xs text-white/30">{{ post.date }} • {{ post.category }}</span>
                  </div>
                </div>
                <button class="p-2 rounded-full text-white/30 hover:text-white hover:bg-white/5 transition-all">
                  <UIcon name="i-lucide-more-vertical" class="w-4 h-4" />
                </button>
              </div>

              <!-- Post Content -->
              <div class="px-4 pb-3">
                <p class="text-white/80 text-sm font-medium">{{ post.title }}</p>
              </div>

              <!-- Post Image -->
              <div class="mx-4 mb-4 rounded-xl overflow-hidden">
                <img
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                >
              </div>

              <!-- Post Actions -->
              <div class="flex items-center gap-6 px-4 py-3 border-t border-white/5">
                <button class="flex items-center gap-1.5 text-white/40 hover:text-blue-400 transition-colors text-sm">
                  <UIcon name="i-lucide-thumbs-up" class="w-4 h-4" />
                  <span>Like</span>
                </button>
                <button class="flex items-center gap-1.5 text-white/40 hover:text-blue-400 transition-colors text-sm">
                  <UIcon name="i-lucide-message-circle" class="w-4 h-4" />
                  <span>Comment</span>
                </button>
                <button class="flex items-center gap-1.5 text-white/40 hover:text-blue-400 transition-colors text-sm">
                  <UIcon name="i-lucide-bookmark" class="w-4 h-4" />
                  <span>Save</span>
                </button>
                <button class="flex items-center gap-1.5 text-white/40 hover:text-blue-400 transition-colors text-sm ml-auto">
                  <UIcon name="i-lucide-share-2" class="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Other Tabs: Empty State -->
          <div v-else class="flex flex-col items-center justify-center py-20 text-center">
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
              <button class="p-1 rounded-full text-white/30 hover:text-white transition-colors">
                <UIcon name="i-lucide-info" class="w-4 h-4" />
              </button>
            </div>

            <div class="grid grid-cols-2 gap-3 mb-4">
              <!-- Post Views -->
              <div class="bg-[#1a2236] rounded-xl p-3.5 border border-white/5">
                <div class="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                  <UIcon name="i-lucide-eye" class="w-4 h-4 text-green-400" />
                </div>
                <p class="text-xl font-bold text-white">{{ creatorLab.postViews }}</p>
                <p class="text-xs text-white/40 mt-0.5">Post Views</p>
              </div>
              <!-- Post Likes -->
              <div class="bg-[#1a2236] rounded-xl p-3.5 border border-white/5">
                <div class="w-7 h-7 rounded-full bg-orange-500/20 flex items-center justify-center mb-2">
                  <UIcon name="i-lucide-heart" class="w-4 h-4 text-orange-400" />
                </div>
                <p class="text-xl font-bold text-white">{{ creatorLab.postLikes }}</p>
                <p class="text-xs text-white/40 mt-0.5">Post Likes</p>
              </div>
            </div>

            <button class="w-full py-2.5 rounded-xl bg-blue-600/80 hover:bg-blue-500 text-white text-sm font-bold transition-all shadow-lg shadow-blue-600/10">
              Enter
            </button>
          </div>

          <!-- Creator Center Card -->
          <div class="bg-[#151d2e]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-5">
            <h3 class="text-base font-bold text-white leading-snug mb-4">
              NLFTs Developer<br>Creator Center
            </h3>
            <button class="w-full py-2.5 rounded-xl bg-blue-600/80 hover:bg-blue-500 text-white text-sm font-bold transition-all shadow-lg shadow-blue-600/10">
              Enter
            </button>
          </div>

          <!-- Achievement Center Card -->
          <div class="bg-[#151d2e]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-5">
            <h3 class="text-base font-bold text-white mb-4">Achievement Center</h3>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/30 to-orange-600/30 border border-amber-500/20 flex items-center justify-center">
                <UIcon name="i-lucide-trophy" class="w-6 h-6 text-amber-400" />
              </div>
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-600/30 border border-blue-500/20 flex items-center justify-center">
                <UIcon name="i-lucide-star" class="w-6 h-6 text-blue-400" />
              </div>
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-600/30 border border-purple-500/20 flex items-center justify-center">
                <UIcon name="i-lucide-gem" class="w-6 h-6 text-purple-400" />
              </div>
              <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20">
                <UIcon name="i-lucide-plus" class="w-5 h-5" />
              </div>
            </div>
          </div>

          <!-- Quick Links Card -->
          <div class="bg-[#151d2e]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-5">
            <h3 class="text-base font-bold text-white mb-4">Quick Links</h3>
            <div class="space-y-1">
              <NuxtLink
                to="/docs/nuxt/getting-started"
                class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/50 hover:text-white hover:bg-white/5 transition-all"
              >
                <UIcon name="i-lucide-book-open" class="w-4 h-4" />
                <span>Documentation</span>
              </NuxtLink>
              <NuxtLink
                to="/events"
                class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/50 hover:text-white hover:bg-white/5 transition-all"
              >
                <UIcon name="i-lucide-calendar" class="w-4 h-4" />
                <span>Upcoming Events</span>
              </NuxtLink>
              <NuxtLink
                to="/blog"
                class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/50 hover:text-white hover:bg-white/5 transition-all"
              >
                <UIcon name="i-lucide-rss" class="w-4 h-4" />
                <span>Blog & Articles</span>
              </NuxtLink>
              <NuxtLink
                to="/community"
                class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/50 hover:text-white hover:bg-white/5 transition-all"
              >
                <UIcon name="i-lucide-users" class="w-4 h-4" />
                <span>Community</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-page {
  font-family: var(--font-sans);
}

/* Smooth gradient border for avatar */
.profile-info-section img {
  image-rendering: -webkit-optimize-contrast;
}

/* Tab hover glow */
button:has(> div[class*="bg-gradient"]):hover {
  text-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
}

/* Post card hover effect */
.group:hover {
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

/* Sidebar card subtle hover */
.profile-sidebar > div {
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.profile-sidebar > div:hover {
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
</style>
