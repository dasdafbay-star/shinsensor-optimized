import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/gsap'

export default function Counter({ value, decimals = 0, suffix = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion) {
      el.textContent = value.toFixed(decimals) + suffix
      return
    }

    const obj = { val: 0 }
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: value,
          duration: 1.6,
          ease: 'power1.out',
          onUpdate: () => {
            el.textContent = obj.val.toFixed(decimals) + suffix
          },
        })
      },
    })

    return () => trigger.kill()
  }, [value, decimals, suffix])

  return <span ref={ref}>0{suffix}</span>
}
