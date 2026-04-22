import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useGsap = () => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger)

    // Global ScrollTrigger defaults for Apple/Google-like smoothness
    ScrollTrigger.config({
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load,resize'
    })

    ScrollTrigger.defaults({
      toggleActions: 'play pause resume reverse',
      markers: false
    })
  }

  const ctx = ref<gsap.Context | null>(null)

  const setup = (fn: gsap.ContextFunc, scope?: string | object | Element | null) => {
    if (!import.meta.client) return

    onMounted(() => {
      ctx.value = gsap.context(fn, scope)
    })

    onUnmounted(() => {
      ctx.value?.revert()
    })
  }

  /**
   * Standardized reveal animation for other agents to use.
   * Ensures elements only animate when in view and kills them when not.
   */
  const reveal = (el: string | Element, vars: gsap.TweenVars = {}) => {
    if (!import.meta.client) return

    return gsap.from(el, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
        ...vars.scrollTrigger as object
      },
      ...vars
    })
  }

  /**
   * Smoothly scroll to a specific element.
   */
  const scrollTo = (target: string | Element, offset = 0) => {
    if (!import.meta.client) return

    gsap.to(window, {
      scrollTo: { y: target, offsetY: offset },
      duration: 1.5,
      ease: 'expo.inOut'
    })
  }

  return {
    gsap,
    ScrollTrigger,
    setup,
    reveal,
    scrollTo
  }
}
