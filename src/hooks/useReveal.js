import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/gsap'

export function useReveal({ stagger = 0.08, y = 40 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll('[data-reveal]')
    const items = targets.length ? targets : [el]

    if (prefersReducedMotion) {
      gsap.set(items, { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.set(items, { opacity: 0, y })
      ScrollTrigger.batch(items, {
        start: 'top 85%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger,
          }),
      })
    }, el)

    return () => ctx.revert()
  }, [stagger, y])

  return ref
}
