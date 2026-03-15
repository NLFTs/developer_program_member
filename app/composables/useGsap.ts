import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useGsap = () => {
  const nuxtApp = useNuxtApp()
  
  // Register ScrollTrigger if not already registered
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger)
  }

  const ctx = ref<gsap.Context | null>(null)

  const setup = (fn: gsap.ContextFunc, scope?: string | object | Element | null) => {
    if (!import.meta.client) return

    onMounted(() => {
      ctx.value = gsap.context(fn, scope)
    })

    onUnmounted(() => {
      if (ctx.value) {
        ctx.value.revert()
      }
    })
  }

  return {
    gsap,
    ScrollTrigger,
    setup
  }
}
