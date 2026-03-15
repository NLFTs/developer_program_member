<script setup lang="ts">
const { user, loginWithPopup, logout } = useGithubAuth()
const stats = ref<GithubStats | null>(null)

const profiles = [
  { id: 1, name: 'DavinGM', avatar: 'https://avatars.githubusercontent.com/u/228851591?v=4' },
  { id: 2, name: 'Nairhacan', avatar: 'https://avatars.githubusercontent.com/u/204519754?v=4' },
  { id: 3, name: 'Haitam', avatar: 'https://avatars.githubusercontent.com/u/232498781?v=4' },
  { id: 4, name: 'Destkaa', avatar: 'https://avatars.githubusercontent.com/u/228332586?v=4' },
  { id: 5, name: 'Miftah', avatar: 'https://avatars.githubusercontent.com/u/232498018?v=4' },
  { id: 6, name: 'Vahllz', avatar: 'https://avatars.githubusercontent.com/u/202130049?v=4' },
  { id: 7, name: 'Fakhir', avatar: 'https://avatars.githubusercontent.com/u/228840381?v=4' },
  { id: 8, name: 'Bara', avatar: 'https://avatars.githubusercontent.com/u/228843429?v=4' },
  { id: 9, name: 'Tokita', avatar: 'https://avatars.githubusercontent.com/u/182593937?v=4' },
  { id: 10, name: 'Maruu-glict', avatar: 'https://avatars.githubusercontent.com/u/225441519?v=4' }
]

const requirements = [
  { label: 'merged pull request', key: 'mergedPrs' },
  { label: 'helpful issue', key: 'helpfulIssues' },
  { label: 'helpful comment', key: 'helpfulComments' }
]

watchEffect(async () => {
  if (user.value) {
    stats.value = await fetchUserGithubStats(user.value?.user_metadata?.user_name || '')
  } else {
    stats.value = null
  }
})

const shareProfile = () => {
  if (!user.value) return
  const url = `${window.location.origin}/devlovers/${user.value?.user_metadata?.user_name}`
  navigator.clipboard.writeText(url)
  alert('Link copied to clipboard!')
}
</script>

<template>
  <UMain class="py-24">
    <UContainer>
      <!-- Hero Section -->
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <div class="flex items-center gap-2 mb-6">
            <UIcon name="i-lucide-heart" class="w-8 h-8 text-primary" />
            <span class="text-2xl font-bold">DevLovers</span>
          </div>
          
          <h1 class="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
            Apakah Kamu <span class="text-primary italic">DevLovers</span>?
          </h1>
          
          <p class="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
            Temukan kontribusi Anda di <span class="underline decoration-primary/30">NLFTs</span> dan <span class="underline decoration-primary/30">Tux</span>. 
            Buka role Anda di server Discord dan bagikan profil DevLover Anda.
          </p>

          <div class="space-y-6">
            <p class="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Buka peran <span class="px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">pengembang</span> dengan memiliki salah satu dari berikut ini:
            </p>
            
            <ul class="space-y-4">
              <li v-for="req in requirements" :key="req.key" class="flex items-center gap-3">
                <UIcon name="i-lucide-check-circle-2" class="w-5 h-5 text-primary" />
                <span class="text-lg">
                  1+ {{ req.label }}
                  <span v-if="req.key !== 'mergedPrs'" class="text-sm text-neutral-400 ml-1">(3+ reactions)</span>
                </span>
              </li>
            </ul>
          </div>

          <p class="mt-12 text-sm text-muted-foreground italic max-w-md">
            Harap dicatat bahwa detail Anda disimpan dalam cookie yang aman dan hanya digunakan untuk memberikan Anda peran di Discord.
          </p>
        </div>

        <!-- Connection Card -->
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <UCard class="relative bg-neutral-900/50 border-neutral-800 backdrop-blur-xl p-8 ring-1 ring-white/10 overflow-hidden">
            <div v-if="user" class="text-left">
              <div class="flex items-start justify-between mb-8">
                <div class="flex items-center gap-4">
                  <UAvatar
                    :src="user?.user_metadata?.avatar_url"
                    size="xl"
                    class="ring-2 ring-primary/20"
                  />
                  <div>
                    <h3 class="text-2xl font-bold">{{ user?.user_metadata?.full_name || user?.user_metadata?.user_name }}</h3>
                    <p class="text-primary font-medium">{{ stats?.totalPoints || 0 }} pts <UIcon name="i-lucide-info" class="w-3 h-3 opacity-50" /></p>
                  </div>
                </div>
                <UButton
                  icon="i-lucide-log-out"
                  color="neutral"
                  variant="ghost"
                  @click="logout"
                />
              </div>

              <div class="space-y-4 mb-8">
                <div v-for="req in requirements" :key="req.key" class="flex items-center justify-between group/item">
                  <div class="flex items-center gap-3">
                    <span class="text-lg font-medium">{{ stats?.[req.key as keyof GithubStats] || 0 }}</span>
                    <span class="text-neutral-400 group-hover/item:text-neutral-300 transition-colors">{{ req.label }}</span>
                  </div>
                  <div 
                    class="w-6 h-6 rounded flex items-center justify-center transition-colors"
                    :class="((stats?.[req.key as keyof GithubStats] || 0) as number) > 0 ? 'bg-primary/20 text-primary' : 'bg-neutral-800 text-neutral-600'"
                  >
                    <UIcon name="i-lucide-check" class="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div class="flex gap-3">
                <UButton
                  label="Unlock badge(s)"
                  icon="i-simple-icons-discord"
                  color="neutral"
                  variant="subtle"
                  class="flex-1 rounded-lg"
                />
                <UButton
                  label="Share my profile"
                  icon="i-lucide-share-2"
                  color="neutral"
                  variant="subtle"
                  class="flex-1 rounded-lg"
                  @click="shareProfile"
                />
              </div>
            </div>

            <div v-else class="text-center">
              <h3 class="text-2xl font-semibold mb-8">Buka peran pengembang di server Discord Anda.</h3>
              
              <UButton
                label="Connect with GitHub"
                icon="i-simple-icons-github"
                color="neutral"
                size="xl"
                class="rounded-full px-8 py-3 font-semibold shadow-lg shadow-black/20 hover:scale-105 transition-transform"
                @click.prevent="loginWithPopup"
              />
            </div>
          </UCard>
        </div>
      </div>

      <!-- Profile Grid -->
      <section>
        <h2 class="text-4xl lg:text-5xl font-bold mb-12">
          Saya adalah <span class="text-primary italic">DevLovers</span>
        </h2>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div 
            v-for="profile in profiles" 
            :key="profile.id" 
            class="group relative aspect-square rounded-2xl overflow-hidden ring-1 ring-white/10 hover:ring-primary/50 transition-all duration-300"
          >
            <img 
              :src="profile.avatar" 
              :alt="profile.name"
              class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-3 right-3 text-xs font-bold bg-black/50 backdrop-blur-md px-2 py-1 rounded border border-white/10 text-white/80">
              #{{ profile.id }}
            </div>
            <div class="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="text-sm font-semibold text-white">{{ profile.name }}</span>
            </div>
          </div>
        </div>
      </section>
    </UContainer>
  </UMain>
</template>

<style scoped>
.text-muted-foreground {
  color: #a1a1aa;
}
</style>
