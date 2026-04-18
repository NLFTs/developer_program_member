<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'saved': []
}>()

const { profile, updateProfile, loading } = useProfile()

// ====== FORM STATE ======
const formBio = ref('')
const formWebsite = ref('')
const formBahasa = ref<string[]>([])
const formSocial = ref<Record<string, string>>({
  github: '',
  instagram: '',
  bluesky: '',
  facebook: '',
  x: ''
})

// Dropdown state
const showLangDropdown = ref(false)
const langSearch = ref('')

// Validation errors
const errors = ref<Record<string, string>>({})
const saveSuccess = ref(false)
const saveError = ref('')

// ====== TECH / LANGUAGE DATA ======
const techOptions: { id: string; label: string; icon: string; color: string }[] = [
  { id: 'flutter', label: 'Flutter', icon: 'i-simple-icons-flutter', color: '#02569B' },
  { id: 'dart', label: 'Dart', icon: 'i-simple-icons-dart', color: '#0175C2' },
  { id: 'kotlin', label: 'Kotlin', icon: 'i-simple-icons-kotlin', color: '#7F52FF' },
  { id: 'java', label: 'Java', icon: 'i-simple-icons-openjdk', color: '#ED8B00' },
  { id: 'nuxt', label: 'Nuxt', icon: 'i-simple-icons-nuxtdotjs', color: '#00DC82' },
  { id: 'next', label: 'Next.js', icon: 'i-simple-icons-nextdotjs', color: '#ffffff' },
  { id: 'laravel', label: 'Laravel', icon: 'i-simple-icons-laravel', color: '#FF2D20' },
  { id: 'php', label: 'PHP', icon: 'i-simple-icons-php', color: '#777BB4' },
  { id: 'typescript', label: 'TypeScript', icon: 'i-simple-icons-typescript', color: '#3178C6' },
  { id: 'javascript', label: 'JavaScript', icon: 'i-simple-icons-javascript', color: '#F7DF1E' },
  { id: 'rust', label: 'Rust', icon: 'i-simple-icons-rust', color: '#CE422B' },
  { id: 'vuejs', label: 'Vue.js', icon: 'i-simple-icons-vuedotjs', color: '#4FC08D' },
  { id: 'react', label: 'React', icon: 'i-simple-icons-react', color: '#61DAFB' },
  { id: 'nodejs', label: 'Node.js', icon: 'i-simple-icons-nodedotjs', color: '#5FA04E' },
  { id: 'angular', label: 'Angular', icon: 'i-simple-icons-angular', color: '#DD0031' },
  { id: 'html', label: 'HTML', icon: 'i-simple-icons-html5', color: '#E34F26' },
  { id: 'css', label: 'CSS', icon: 'i-simple-icons-css3', color: '#1572B6' },
  { id: 'scss', label: 'SCSS', icon: 'i-simple-icons-sass', color: '#CC6699' },
  { id: 'tailwind', label: 'Tailwind CSS', icon: 'i-simple-icons-tailwindcss', color: '#06B6D4' },
  { id: 'framer', label: 'Framer', icon: 'i-simple-icons-framer', color: '#0055FF' },
  { id: 'gsap', label: 'GSAP', icon: 'i-simple-icons-greensock', color: '#88CE02' },
  { id: 'python', label: 'Python', icon: 'i-simple-icons-python', color: '#3776AB' },
  { id: 'cpp', label: 'C++', icon: 'i-simple-icons-cplusplus', color: '#00599C' },
  { id: 'golang', label: 'Go', icon: 'i-simple-icons-go', color: '#00ADD8' },
  { id: 'csharp', label: 'C#', icon: 'i-simple-icons-csharp', color: '#512BD4' },
  { id: 'c', label: 'C', icon: 'i-simple-icons-c', color: '#A8B9CC' },
  { id: 'swift', label: 'Swift', icon: 'i-simple-icons-swift', color: '#F05138' },
  { id: 'ruby', label: 'Ruby', icon: 'i-simple-icons-ruby', color: '#CC342D' },
  { id: 'deno', label: 'Deno', icon: 'i-simple-icons-deno', color: '#70FFAF' },
  { id: 'bun', label: 'Bun', icon: 'i-simple-icons-bun', color: '#FBF0DF' },
  { id: 'vite', label: 'Vite', icon: 'i-simple-icons-vite', color: '#646CFF' },
  { id: 'postgresql', label: 'PostgreSQL', icon: 'i-simple-icons-postgresql', color: '#4169E1' },
  { id: 'mysql', label: 'MySQL', icon: 'i-simple-icons-mysql', color: '#4479A1' },
  { id: 'mongodb', label: 'MongoDB', icon: 'i-simple-icons-mongodb', color: '#47A248' },
  { id: 'firebase', label: 'Firebase', icon: 'i-simple-icons-firebase', color: '#DD2C00' },
  { id: 'supabase', label: 'Supabase', icon: 'i-simple-icons-supabase', color: '#3ECF8E' },
  { id: 'vercel', label: 'Vercel', icon: 'i-simple-icons-vercel', color: '#ffffff' },
  { id: 'netlify', label: 'Netlify', icon: 'i-simple-icons-netlify', color: '#00C7B7' },
  { id: 'railway', label: 'Railway', icon: 'i-simple-icons-railway', color: '#0B0D0E' },
  { id: 'render', label: 'Render', icon: 'i-simple-icons-render', color: '#46E3B7' },
  { id: 'heroku', label: 'Heroku', icon: 'i-simple-icons-heroku', color: '#430098' },
  { id: 'digitalocean', label: 'DigitalOcean', icon: 'i-simple-icons-digitalocean', color: '#0080FF' },
  { id: 'aws', label: 'AWS', icon: 'i-simple-icons-amazonaws', color: '#FF9900' },
  { id: 'gcp', label: 'Google Cloud', icon: 'i-simple-icons-googlecloud', color: '#4285F4' },
  { id: 'azure', label: 'Azure', icon: 'i-simple-icons-microsoftazure', color: '#0078D4' }
]

// ====== SOCIAL MEDIA CONFIG ======
const socialPlatforms = [
  { id: 'github', label: 'GitHub', icon: 'i-simple-icons-github', color: '#ffffff', placeholder: 'https://github.com/username' },
  { id: 'instagram', label: 'Instagram', icon: 'i-simple-icons-instagram', color: '#E4405F', placeholder: 'https://instagram.com/username' },
  { id: 'bluesky', label: 'Bluesky', icon: 'i-simple-icons-bluesky', color: '#0085FF', placeholder: 'https://bsky.app/profile/username' },
  { id: 'facebook', label: 'Facebook', icon: 'i-simple-icons-facebook', color: '#0866FF', placeholder: 'https://facebook.com/username' },
  { id: 'x', label: 'X (Twitter)', icon: 'i-simple-icons-x', color: '#ffffff', placeholder: 'https://x.com/username' }
]

// ====== COMPUTED ======
const filteredTechOptions = computed(() => {
  const q = langSearch.value.toLowerCase()
  return techOptions.filter(t =>
    t.label.toLowerCase().includes(q) && !formBahasa.value.includes(t.id)
  )
})

const selectedTechItems = computed(() => {
  return formBahasa.value
    .map(id => techOptions.find(t => t.id === id))
    .filter(Boolean) as typeof techOptions
})

const bioWordCount = computed(() => {
  const text = formBio.value.trim()
  if (!text) return 0
  return text.split(/\s+/).length
})

const isOpen = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

// ====== METHODS ======
function toggleLang(id: string) {
  const idx = formBahasa.value.indexOf(id)
  if (idx === -1) {
    formBahasa.value.push(id)
  } else {
    formBahasa.value.splice(idx, 1)
  }
  langSearch.value = ''
}

function removeLang(id: string) {
  formBahasa.value = formBahasa.value.filter(l => l !== id)
}

function validateForm(): boolean {
  errors.value = {}

  // Bio: max 30 words
  if (bioWordCount.value > 30) {
    errors.value.bio = `Bio terlalu panjang (${bioWordCount.value}/30 kata). Maksimal 30 kata.`
  }

  // Website: must start with https:// and have TLD
  if (formWebsite.value.trim()) {
    const urlPattern = /^https:\/\/[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z]{2,})+([/\w\-.~:/?#[\]@!$&'()*+,;=%]*)?$/
    if (!urlPattern.test(formWebsite.value.trim())) {
      errors.value.website = 'URL harus diawali https:// dan memiliki TLD yang valid (misal: .com, .dev)'
    }
  }

  // Social: validate URLs
  for (const platform of socialPlatforms) {
    const val = formSocial.value[platform.id]?.trim()
    if (val && !val.startsWith('https://')) {
      errors.value[`social_${platform.id}`] = `URL ${platform.label} harus diawali https://`
    }
  }

  return Object.keys(errors.value).length === 0
}

async function handleSave() {
  if (!validateForm()) return
  saveSuccess.value = false
  saveError.value = ''

  // Prepare social - only save non-empty values
  const socialData: Record<string, string> = {}
  for (const platform of socialPlatforms) {
    const val = formSocial.value[platform.id]?.trim()
    if (val) socialData[platform.id] = val
  }

  // Deduplicate bahasa
  const uniqueBahasa = [...new Set(formBahasa.value)]

  const payload = {
    bio: formBio.value.trim() || null,
    website: formWebsite.value.trim() || null,
    bahasa: uniqueBahasa.length > 0 ? uniqueBahasa : [],
    social: Object.keys(socialData).length > 0 ? socialData : {}
  }

  console.log('[ProfileEdit] Saving payload:', JSON.stringify(payload))

  const result = await updateProfile(payload)

  if (!result.success) {
    saveError.value = result.error || 'Gagal menyimpan data. Coba lagi.'
    console.error('[ProfileEdit] Save failed:', result.error)
    return
  }

  saveSuccess.value = true
  setTimeout(() => {
    saveSuccess.value = false
    isOpen.value = false
    emit('saved')
  }, 1200)
}

// Load existing data when modal opens
watch(isOpen, (open) => {
  if (open && profile.value) {
    formBio.value = profile.value.bio || ''
    formWebsite.value = profile.value.website || ''
    formBahasa.value = Array.isArray(profile.value.bahasa) ? [...profile.value.bahasa] : []
    const social = profile.value.social || {}
    formSocial.value = {
      github: social.github || '',
      instagram: social.instagram || '',
      bluesky: social.bluesky || '',
      facebook: social.facebook || '',
      x: social.x || ''
    }
    errors.value = {}
    saveSuccess.value = false
  }
})

// Close dropdown when clicking outside
function handleClickOutsideLang(e: MouseEvent) {
  const target = e.target as HTMLElement
  if (!target.closest('.lang-dropdown-container')) {
    showLangDropdown.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutsideLang))
onUnmounted(() => document.removeEventListener('click', handleClickOutsideLang))
</script>

<template>
  <!-- Overlay -->
  <Teleport to="body">
    <Transition name="modal-overlay">
      <div v-if="isOpen" class="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/70 backdrop-blur-md" @click="isOpen = false" />

        <!-- Modal -->
        <Transition name="modal-content">
          <div
            v-if="isOpen"
            class="edit-modal relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#111827] border border-white/10 rounded-3xl shadow-2xl shadow-blue-500/5 z-10"
          >
            <!-- Header -->
            <div class="sticky top-0 z-20 bg-[#111827]/95 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <UIcon name="i-lucide-user-pen" class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 class="text-lg font-bold text-white">Edit Profile</h2>
                  <p class="text-xs text-white/40">Update your personal information</p>
                </div>
              </div>
              <button
                class="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all"
                @click="isOpen = false"
              >
                <UIcon name="i-lucide-x" class="w-5 h-5" />
              </button>
            </div>

            <!-- Body -->
            <div class="px-6 py-6 space-y-8">
              <!-- ====== WEBSITE ====== -->
              <div>
                <label class="flex items-center gap-2 text-sm font-bold text-white mb-2">
                  <UIcon name="i-lucide-globe" class="w-4 h-4 text-blue-400" />
                  Website
                </label>
                <div class="relative">
                  <input
                    v-model="formWebsite"
                    type="url"
                    placeholder="https://yoursite.com"
                    class="w-full px-4 py-3 bg-[#1a2236] border rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    :class="errors.website ? 'border-red-500/50' : 'border-white/10 hover:border-white/20'"
                  >
                </div>
                <p v-if="errors.website" class="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <UIcon name="i-lucide-alert-circle" class="w-3 h-3" /> {{ errors.website }}
                </p>
              </div>

              <!-- ====== BIO ====== -->
              <div>
                <label class="flex items-center gap-2 text-sm font-bold text-white mb-2">
                  <UIcon name="i-lucide-file-text" class="w-4 h-4 text-cyan-400" />
                  Bio
                </label>
                <textarea
                  v-model="formBio"
                  rows="3"
                  placeholder="Tell us about yourself... (max 30 words)"
                  class="w-full px-4 py-3 bg-[#1a2236] border rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none transition-all"
                  :class="errors.bio ? 'border-red-500/50' : 'border-white/10 hover:border-white/20'"
                />
                <div class="flex items-center justify-between mt-1.5">
                  <p v-if="errors.bio" class="text-xs text-red-400 flex items-center gap-1">
                    <UIcon name="i-lucide-alert-circle" class="w-3 h-3" /> {{ errors.bio }}
                  </p>
                  <span v-else />
                  <span
                    class="text-xs font-mono ml-auto"
                    :class="bioWordCount > 30 ? 'text-red-400' : bioWordCount > 25 ? 'text-amber-400' : 'text-white/30'"
                  >
                    {{ bioWordCount }}/30 kata
                  </span>
                </div>
              </div>

              <!-- ====== BAHASA / TECH STACK ====== -->
              <div>
                <label class="flex items-center gap-2 text-sm font-bold text-white mb-2">
                  <UIcon name="i-lucide-code-2" class="w-4 h-4 text-green-400" />
                  Tech Stack
                </label>

                <!-- Selected Tags -->
                <div v-if="selectedTechItems.length > 0" class="flex flex-wrap gap-2 mb-3">
                  <div
                    v-for="tech in selectedTechItems"
                    :key="tech.id"
                    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all hover:scale-105"
                    :style="{
                      backgroundColor: tech.color + '15',
                      borderColor: tech.color + '30',
                      color: tech.color
                    }"
                  >
                    <UIcon :name="tech.icon" class="w-3.5 h-3.5" />
                    {{ tech.label }}
                    <button
                      class="ml-0.5 p-0.5 rounded-full hover:bg-white/10 transition-colors"
                      @click="removeLang(tech.id)"
                    >
                      <UIcon name="i-lucide-x" class="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <!-- Dropdown Trigger -->
                <div class="lang-dropdown-container relative">
                  <div
                    class="flex items-center gap-2 w-full px-4 py-3 bg-[#1a2236] border border-white/10 hover:border-white/20 rounded-xl cursor-pointer transition-all"
                    @click.stop="showLangDropdown = !showLangDropdown"
                  >
                    <UIcon name="i-lucide-search" class="w-4 h-4 text-white/30" />
                    <input
                      v-model="langSearch"
                      type="text"
                      placeholder="Search & add technologies..."
                      class="flex-1 bg-transparent text-white text-sm placeholder:text-white/20 focus:outline-none"
                      @focus="showLangDropdown = true"
                      @click.stop
                    >
                    <span class="text-xs text-white/20 font-mono">{{ formBahasa.length }} selected</span>
                  </div>

                  <!-- Dropdown List -->
                  <Transition name="dropdown">
                    <div
                      v-if="showLangDropdown"
                      class="absolute left-0 right-0 mt-2 max-h-[240px] overflow-y-auto bg-[#1a2236] border border-white/10 rounded-xl shadow-2xl z-30"
                    >
                      <div v-if="filteredTechOptions.length === 0" class="px-4 py-6 text-center text-white/30 text-sm">
                        No results found
                      </div>
                      <button
                        v-for="tech in filteredTechOptions"
                        :key="tech.id"
                        class="flex items-center gap-3 w-full px-4 py-2.5 text-left hover:bg-white/5 transition-all first:rounded-t-xl last:rounded-b-xl"
                        @click.stop="toggleLang(tech.id)"
                      >
                        <UIcon :name="tech.icon" class="w-5 h-5 shrink-0" :style="{ color: tech.color }" />
                        <span class="text-sm text-white/80 font-medium">{{ tech.label }}</span>
                        <div
                          class="ml-auto w-5 h-5 rounded-md border flex items-center justify-center transition-all"
                          :class="formBahasa.includes(tech.id) ? 'bg-blue-500 border-blue-500' : 'border-white/20'"
                        >
                          <UIcon v-if="formBahasa.includes(tech.id)" name="i-lucide-check" class="w-3 h-3 text-white" />
                        </div>
                      </button>
                    </div>
                  </Transition>
                </div>
              </div>

              <!-- ====== SOCIAL MEDIA ====== -->
              <div>
                <label class="flex items-center gap-2 text-sm font-bold text-white mb-3">
                  <UIcon name="i-lucide-share-2" class="w-4 h-4 text-purple-400" />
                  Social Media
                  <span class="text-xs text-white/20 font-normal">(5 slots)</span>
                </label>

                <div class="space-y-3">
                  <div v-for="platform in socialPlatforms" :key="platform.id">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/5"
                        :style="{ backgroundColor: platform.color + '15' }"
                      >
                        <UIcon :name="platform.icon" class="w-5 h-5" :style="{ color: platform.color }" />
                      </div>
                      <div class="flex-1">
                        <input
                          v-model="formSocial[platform.id]"
                          type="url"
                          :placeholder="platform.placeholder"
                          class="w-full px-3 py-2.5 bg-[#1a2236] border rounded-lg text-white text-sm placeholder:text-white/15 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                          :class="errors[`social_${platform.id}`] ? 'border-red-500/50' : 'border-white/10 hover:border-white/20'"
                        >
                      </div>
                    </div>
                    <p v-if="errors[`social_${platform.id}`]" class="text-xs text-red-400 mt-1 ml-13 flex items-center gap-1">
                      <UIcon name="i-lucide-alert-circle" class="w-3 h-3" /> {{ errors[`social_${platform.id}`] }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div class="sticky bottom-0 bg-[#111827]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex items-center justify-between gap-3">
              <div class="flex flex-col">
                <Transition name="success-fade">
                  <div v-if="saveSuccess" class="flex items-center gap-2 text-green-400 text-sm font-medium">
                    <UIcon name="i-lucide-check-circle" class="w-4 h-4" />
                    Saved successfully!
                  </div>
                </Transition>
                <div v-if="saveError" class="text-red-400 text-sm font-medium flex items-center gap-2">
                  <UIcon name="i-lucide-alert-circle" class="w-4 h-4" />
                  {{ saveError }}
                </div>
              </div>
              <div class="flex items-center gap-3 ml-auto">
                <button
                  class="px-5 py-2.5 rounded-xl text-sm font-bold text-white/50 hover:text-white hover:bg-white/5 transition-all"
                  @click="isOpen = false"
                >
                  Cancel
                </button>
                <button
                  :disabled="loading"
                  class="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  @click="handleSave"
                >
                  <UIcon v-if="loading" name="i-lucide-loader-2" class="w-4 h-4 animate-spin" />
                  <UIcon v-else name="i-lucide-save" class="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.edit-modal {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
}

.edit-modal::-webkit-scrollbar {
  width: 6px;
}

.edit-modal::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.1);
  border-radius: 10px;
}

/* Modal Overlay */
.modal-overlay-enter-active { transition: opacity 0.3s ease; }
.modal-overlay-leave-active { transition: opacity 0.2s ease; }
.modal-overlay-enter-from,
.modal-overlay-leave-to { opacity: 0; }

/* Modal Content */
.modal-content-enter-active { transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1); }
.modal-content-leave-active { transition: all 0.2s ease; }
.modal-content-enter-from { opacity: 0; transform: scale(0.95) translateY(20px); }
.modal-content-leave-to { opacity: 0; transform: scale(0.98) translateY(10px); }

/* Dropdown */
.dropdown-enter-active { transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1); }
.dropdown-leave-active { transition: all 0.15s ease; }
.dropdown-enter-from { opacity: 0; transform: translateY(-8px); }
.dropdown-leave-to { opacity: 0; transform: translateY(-4px); }

/* Success */
.success-fade-enter-active { transition: all 0.3s ease; }
.success-fade-leave-active { transition: all 0.2s ease; }
.success-fade-enter-from { opacity: 0; transform: translateX(-10px); }
.success-fade-leave-to { opacity: 0; }

.ml-13 {
  margin-left: 3.25rem;
}
</style>
