import { useEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../lib/gsap'
import { CONTACT, EQUIPMENT, waLink } from '../content'
import { SplineScene } from './ui/SplineScene'
import { useMediaQuery } from '../hooks/useMediaQuery'

const SENSOR_SCENE = 'https://prod.spline.design/DHqiQXjDwRx24fah/scene.splinecode'

function SensorSpline({ className }) {
  return (
    <div data-hero-el className={`rounded-2xl overflow-hidden border border-white/10 ${className}`}>
      <SplineScene scene={SENSOR_SCENE} className="w-full h-full" />
      <span className="pointer-events-none absolute top-3 left-3 mono-label text-[9px] text-amber-400/80 flex items-center gap-1.5">
        <span className="size-1 rounded-full bg-amber-400 animate-pulse" />
        3D превью
      </span>
    </div>
  )
}

export default function Hero() {
  const rootRef = useRef(null)
  const isXl = useMediaQuery('(min-width: 1280px)')

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.from('[data-hero-el]', {
        opacity: 0,
        y: 28,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        delay: 0.15,
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative min-h-[100svh] flex items-end overflow-hidden pt-28 pb-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(60% 50% at 80% 15%, rgba(99,102,241,0.16), transparent 70%), radial-gradient(45% 45% at 10% 90%, rgba(129,140,248,0.10), transparent 70%)',
          }}
        />
        <span className="ghost-readout absolute top-[8%] right-[-4%] text-[64px] sm:text-[110px] font-bold rotate-3">
          433 MHz
        </span>
        <span className="ghost-readout absolute bottom-[6%] left-[-4%] text-[42px] sm:text-[76px] font-bold -rotate-2">
          PRESSURE: 35.2 PSI
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 w-full">
        <p
          data-hero-el
          data-reveal
          className="mono-label text-[11px] text-champagne mb-4 flex items-center gap-2"
        >
          <span className="size-1.5 rounded-full bg-indigo-400 animate-pulse-accent" />
          Астана · {CONTACT.address}
        </p>

        <h1
          data-hero-el
          data-reveal
          className="font-display text-4xl sm:text-5xl lg:text-7xl leading-[1.05] font-extrabold gradient-text max-w-3xl"
        >
          Полный цикл диагностики TPMS
        </h1>
        <p data-hero-el data-reveal className="mt-3 mono-label text-sm text-champagne">
          датчики давления шин любых марок
        </p>

        <p data-hero-el data-reveal className="mt-6 text-base sm:text-lg text-muted max-w-lg">
          Программирование, прошивка, клонирование, диагностика и адаптация TPMS.
          Премиальные датчики, гарантия 2 года — то, чего не делает обычная
          шиномонтажка.
        </p>

        {!isXl && <SensorSpline className="relative mt-8 mx-auto w-56 h-56 sm:w-64 sm:h-64" />}

        <div data-hero-el data-reveal className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gradient-to-r from-indigo-600 to-indigo-400 px-7 py-3.5 mono-label text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 hover:scale-105 shadow-[0_0_36px_rgba(99,102,241,0.45)] cursor-pointer"
          >
            Записаться в WhatsApp →
          </a>
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className="rounded-full border border-line/25 px-7 py-3.5 mono-label text-xs sm:text-sm font-semibold text-ink transition-all duration-200 hover:border-indigo-400/60 cursor-pointer"
          >
            {CONTACT.phoneDisplay}
          </a>
        </div>

        <div
          data-hero-el
          data-reveal
          className="mt-10 pt-6 border-t border-line/10 flex flex-wrap items-center gap-x-8 gap-y-3 mono-label text-[11px] text-muted"
        >
          <a
            href={CONTACT.reviewUrl2gis}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-300 hover:text-indigo-200 transition-colors duration-200 underline underline-offset-4 decoration-indigo-500/40"
          >
            4.9★ на 2ГИС — оставить отзыв
          </a>
          <span>Гарантия 2 года</span>
          <span>{CONTACT.hours}</span>
          <span>{EQUIPMENT.join(' · ')}</span>
        </div>
      </div>

      {isXl && (
        <SensorSpline className="absolute top-1/2 right-6 2xl:right-12 -translate-y-1/2 w-[380px] h-[380px]" />
      )}
    </section>
  )
}
