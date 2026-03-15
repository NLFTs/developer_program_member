<script setup lang="ts">
const route = useRoute()
const username = route.params.username as string
const stats = ref<GithubStats | null>(null)

onMounted(async () => {
  stats.value = await fetchUserGithubStats(username)
})

const requirements = [
  { label: 'merged pull request', key: 'mergedPrs' },
  { label: 'helpful issue', key: 'helpfulIssues' },
  { label: 'helpful comment', key: 'helpfulComments' }
]
</script>

<template>
  <UMain class="py-24">
    <UContainer>
      <div class="max-w-xl mx-auto">
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur opacity-25"></div>
          <UCard class="relative bg-neutral-900/50 border-neutral-800 backdrop-blur-xl p-8 ring-1 ring-white/10 overflow-hidden">
            <div class="text-left">
              <div class="flex items-center gap-4 mb-8">
                <UAvatar
                  :src="`https://github.com/${username}.png`"
                  size="xl"
                  class="ring-2 ring-primary/20"
                />
                <div>
                  <h3 class="text-2xl font-bold">{{ username }}</h3>
                  <p class="text-primary font-medium">{{ stats?.totalPoints || 0 }} pts <UIcon name="i-lucide-info" class="w-3 h-3 opacity-50" /></p>
                </div>
              </div>

              <div class="space-y-4 mb-8">
                <div v-for="req in requirements" :key="req.key" class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <span class="text-lg font-medium">{{ stats?.[req.key as keyof GithubStats] || 0 }}</span>
                    <span class="text-neutral-400">{{ req.label }}</span>
                  </div>
                  <div 
                    class="w-6 h-6 rounded flex items-center justify-center"
                    :class="((stats?.[req.key as keyof GithubStats] || 0) as number) > 0 ? 'bg-primary/20 text-primary' : 'bg-neutral-800 text-neutral-600'"
                  >
                    <UIcon name="i-lucide-check" class="w-4 h-4" />
                  </div>
                </div>
              </div>

              <UButton
                label="Join NLFTs"
                icon="i-simple-icons-github"
                color="primary"
                to="https://github.com/nlfts"
                block
                class="rounded-lg"
              />
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>
  </UMain>
</template>
