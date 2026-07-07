import { useState } from 'react'
import { NAV_LINKS, CONTACT, waLink } from '../content'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-3">
        <div className="glass-panel rounded-card flex items-center justify-between px-4 sm:px-6 py-3">
          <a href="#top" className="flex items-baseline gap-2 shrink-0">
            <span className="font-display text-xl sm:text-2xl font-extrabold text-ink">
              Shinsensor
            </span>
            <span className="hidden sm:inline mono-label text-[10px] text-muted">
              TPMS · Астана
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mono-label text-xs text-muted hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={CONTACT.reviewUrl2gis}
              target="_blank"
              rel="noreferrer"
              className="mono-label text-xs text-indigo-300 hover:text-indigo-200 transition-colors duration-200"
            >
              4.9★ 2ГИС
            </a>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="mono-label text-xs text-muted hover:text-ink transition-colors duration-200"
            >
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-indigo-600 to-indigo-400 px-5 py-2 mono-label text-xs font-semibold text-white transition-all duration-200 hover:brightness-110 hover:scale-105 shadow-[0_0_24px_rgba(99,102,241,0.4)]"
            >
              Записаться →
            </a>
          </div>

          <button
            className="md:hidden text-ink p-2 cursor-pointer"
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {open && (
          <div className="glass-panel rounded-card mt-2 md:hidden px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="mono-label text-xs text-muted hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CONTACT.reviewUrl2gis}
              target="_blank"
              rel="noreferrer"
              className="mono-label text-xs text-indigo-300"
            >
              4.9★ на 2ГИС — оставить отзыв
            </a>
            <div className="flex gap-3 pt-2">
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="flex-1 text-center rounded-full border border-line/15 py-2 text-sm text-ink"
              >
                Позвонить
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center rounded-full bg-gradient-to-r from-indigo-600 to-indigo-400 py-2 text-sm font-semibold text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
