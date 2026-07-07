import { useReveal } from '../hooks/useReveal'
import { CONTACT, waLink } from '../content'

export default function Contacts() {
  const ref = useReveal()

  return (
    <section id="contacts" ref={ref} className="relative py-24 sm:py-28 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-8 items-stretch">
        <div data-reveal className="card-panel rounded-card p-6 sm:p-8 flex flex-col">
          <p className="mono-label text-[11px] text-champagne mb-3">Контакты</p>
          <h2 className="font-display text-3xl font-extrabold gradient-text">Приезжайте — решим за один визит</h2>

          <dl className="mt-8 space-y-5 text-sm">
            <div>
              <dt className="mono-label text-[10px] text-muted">Адрес</dt>
              <dd className="text-ink mt-1">{CONTACT.address}, {CONTACT.addressArea}</dd>
            </div>
            <div>
              <dt className="mono-label text-[10px] text-muted">Часы работы</dt>
              <dd className="text-ink mt-1">{CONTACT.hours}</dd>
            </div>
            <div>
              <dt className="mono-label text-[10px] text-muted">Телефон / WhatsApp</dt>
              <dd className="mt-1">
                <a href={`tel:${CONTACT.phoneTel}`} className="text-ink hover:text-indigo-400">
                  {CONTACT.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="mono-label text-[10px] text-muted">Соцсети</dt>
              <dd className="mt-1 flex gap-4">
                <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" className="text-ink hover:text-indigo-400">
                  Instagram
                </a>
                <a href={CONTACT.tiktokUrl} target="_blank" rel="noreferrer" className="text-ink hover:text-indigo-400">
                  TikTok
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-indigo-600 to-indigo-400 px-6 py-3 mono-label text-xs font-semibold text-white transition-all duration-200 hover:brightness-110 hover:scale-105 cursor-pointer"
            >
              Написать в WhatsApp
            </a>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="rounded-full border border-line/20 px-6 py-3 mono-label text-xs font-semibold text-ink transition-all duration-200 hover:border-indigo-400/60 cursor-pointer"
            >
              Позвонить
            </a>
          </div>
        </div>

        <div data-reveal className="card-panel rounded-card overflow-hidden min-h-[320px]">
          <iframe
            title="Shinsensor на карте"
            src={CONTACT.mapEmbedSrc}
            className="w-full h-full min-h-[320px] grayscale contrast-125 opacity-90"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
