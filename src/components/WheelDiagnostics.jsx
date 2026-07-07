import { WHEEL_DIAGNOSTIC, SCAN_REPORT, EQUIPMENT } from '../content'
import { useReveal } from '../hooks/useReveal'

const STATUS_STYLES = {
  ok: { border: 'border-emerald-400', dot: 'bg-emerald-400', text: 'text-emerald-300', glow: 'shadow-[0_0_16px_rgba(52,211,153,0.4)]' },
  warning: { border: 'border-amber-400', dot: 'bg-amber-400', text: 'text-amber-300', glow: 'shadow-[0_0_16px_rgba(251,191,36,0.4)]' },
  critical: { border: 'border-red-400', dot: 'bg-red-400', text: 'text-red-300', glow: 'shadow-[0_0_16px_rgba(248,113,113,0.4)]' },
}

function WheelPoint({ point }) {
  const style = STATUS_STYLES[point.status]
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
      style={{ top: point.top, left: point.left }}
    >
      <div
        className={`size-12 sm:size-14 rounded-full bg-zinc-950 border-2 ${style.border} ${style.glow} flex items-center justify-center ${
          point.status === 'critical' ? 'animate-pulse' : ''
        }`}
      >
        <span className="font-mono text-sm sm:text-base font-semibold text-ink">{point.pressure}</span>
      </div>
      <span className="mt-1.5 mono-label text-[9px] text-muted">{point.label}</span>
      <span className={`mono-label text-[9px] ${style.text}`}>{point.statusLabel}</span>
    </div>
  )
}

export default function WheelDiagnostics() {
  const ref = useReveal()

  return (
    <section id="diagnostics" ref={ref} className="relative py-24 sm:py-28 bg-coal-alt/60 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p data-reveal className="mono-label text-[11px] text-champagne mb-3">
          Диагностика
        </p>
        <h2 data-reveal className="font-display text-3xl sm:text-4xl font-extrabold gradient-text max-w-xl">
          Видим состояние каждого датчика за минуты
        </h2>
        <p data-reveal className="mt-3 text-sm text-muted max-w-lg">
          Пример реального отчёта со сканера — так выглядит диагностика на вашем визите.
        </p>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
          <div
            data-reveal
            className="relative mx-auto aspect-[3/4] w-full max-w-sm rounded-card bg-zinc-900/40 border border-zinc-800"
          >
            <svg viewBox="0 0 200 320" className="absolute inset-0 size-full" fill="none">
              <rect x="55" y="20" width="90" height="280" rx="40" stroke="currentColor" className="text-zinc-700" strokeWidth="2" />
              <rect x="72" y="58" width="56" height="72" rx="10" stroke="currentColor" className="text-zinc-700" strokeWidth="1.5" />
              <line x1="100" y1="150" x2="100" y2="230" stroke="currentColor" className="text-zinc-800" strokeWidth="1.5" />
            </svg>
            {WHEEL_DIAGNOSTIC.map((point) => (
              <WheelPoint key={point.id} point={point} />
            ))}
          </div>

          <div data-reveal className="card-panel rounded-card p-6 sm:p-8">
            <p className="mono-label text-[10px] text-muted mb-4">Отчёт сканирования</p>
            <ul className="space-y-3">
              {SCAN_REPORT.map((line, i) => {
                const style = STATUS_STYLES[line.status]
                return (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className={`mt-1.5 size-1.5 rounded-full shrink-0 ${style.dot}`} />
                    <span className="text-muted">{line.text}</span>
                  </li>
                )
              })}
            </ul>
            <p className="mt-6 pt-6 border-t border-line/10 mono-label text-[10px] text-muted">
              Оборудование: {EQUIPMENT.join(' · ')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
