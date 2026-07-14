import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/gsap'

export default function Counter({ value, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const formatted = value.toFixed(decimals) + suffix

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion) return

    const obj = { val: 0 }
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.fromTo(
          obj,
          { val: 0 },
          {
            val: value,
            duration: 1.6,
            ease: 'power1.out',
            onUpdate: () => {
              el.textContent = obj.val.toFixed(decimals) + suffix
            },
          }
        )
      },
    })

    return () => trigger.kill()
  }, [value, decimals, suffix])

  // Initial DOM text is the real final value, not 0 — the count-up is a
  // client-side enhancement layered on top via GSAP once scrolled into
  // view, so prerendered HTML and no-JS crawlers see correct numbers.
  return <span ref={ref}>{formatted}</span>
}
