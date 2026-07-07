import { useReveal } from '../hooks/useReveal'
import { CONTACT, waLink } from '../content'

export default function CTA() {
  const ref = useReveal()

  return (
    <section ref={ref} className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div
          data-reveal
          className="rounded-card px-6 sm:px-12 py-16 sm:py-20 text-center relative overflow-hidden"
        >
          <img
            src="/images/workshop-1.jpg"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 size-full object-cover duotone -z-10"
          />
          <div className="absolute inset-0 bg-coal/80 -z-10" />
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage: 'radial-gradient(50% 60% at 50% 0%, rgba(99,102,241,0.22), transparent 70%)',
            }}
          />

          <p className="mono-label text-[11px] text-champagne mb-4">Записаться</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold gradient-text">
            Готовы вернуть датчикам <span className="text-champagne italic">жизнь</span>?
          </h2>
          <p className="mt-4 text-muted max-w-md mx-auto">
            Пишите в WhatsApp или звоните — запишем на диагностику и решим вопрос
            за один визит.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
        </div>
      </div>
    </section>
  )
}
