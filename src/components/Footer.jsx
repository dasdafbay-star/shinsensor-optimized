import { CONTACT } from '../content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line/10 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg font-extrabold text-ink">Shinsensor</span>

        <div className="flex gap-6 text-sm text-muted">
          <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-champagne">
            Instagram
          </a>
          <a href={CONTACT.tiktokUrl} target="_blank" rel="noreferrer" className="hover:text-champagne">
            TikTok
          </a>
          <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-champagne">
            {CONTACT.phoneDisplay}
          </a>
        </div>

        <span className="text-xs text-muted">© {year} Shinsensor · TPMS Астана</span>
      </div>
    </footer>
  )
}
