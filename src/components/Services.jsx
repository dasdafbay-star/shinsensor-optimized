import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { gsap } from '../lib/gsap'
import { SERVICES, waLink } from '../content'

const BADGE_TONES = {
  indigo: 'bg-indigo-500/15 text-indigo-300 ring-1 ring-indigo-500/30',
  green: 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30',
  amber: 'bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/30',
}

function ServiceCard({ service }) {
  const cardRef = useRef(null)

  const onEnter = () => {
    gsap.to(cardRef.current, { y: -4, duration: 0.25, ease: 'power2.out' })
  }
  const onLeave = () => {
    gsap.to(cardRef.current, { y: 0, duration: 0.25, ease: 'power2.out' })
  }

  return (
    <div
      ref={cardRef}
      data-reveal
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="relative rounded-card overflow-hidden flex flex-col h-full bg-zinc-900/40 border border-zinc-800 transition-colors duration-200 hover:border-indigo-500/40"
    >
      {service.badge ? (
        <span
          className={`absolute top-3 right-3 z-10 rounded-full px-2 py-0.5 text-[9px] uppercase font-mono ${BADGE_TONES[service.badge.tone]}`}
        >
          {service.badge.label}
        </span>
      ) : null}

      {service.image ? (
        <div className="relative h-36 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/10 to-transparent" />
        </div>
      ) : null}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-extrabold gradient-text min-w-0">{service.title}</h3>
          <span className="mono-label text-[10px] text-champagne border border-zinc-800 rounded-full px-2 py-1 shrink-0">
            {service.price}
          </span>
        </div>
        <p className="mt-2 text-sm text-muted flex-1">{service.description}</p>
        <a
          href={waLink(service.title)}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-1 mono-label text-xs font-semibold text-ink hover:text-indigo-400 transition-colors duration-200"
        >
          Записаться →
        </a>
      </div>
    </div>
  )
}

export default function Services() {
  const ref = useReveal()

  return (
    <section id="services" ref={ref} className="relative py-24 sm:py-28 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p data-reveal className="mono-label text-[11px] text-champagne mb-3">
          Услуги
        </p>
        <h2 data-reveal className="font-display text-3xl sm:text-4xl font-extrabold gradient-text max-w-xl">
          Всё для датчиков давления шин — за один визит
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
