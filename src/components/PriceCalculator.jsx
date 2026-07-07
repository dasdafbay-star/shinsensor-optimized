import { useMemo, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { SERVICES, waLink } from '../content'

const QUANTITIES = [1, 2, 3, 4]

function ToggleButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 mono-label text-xs border transition-colors duration-150 cursor-pointer ${
        active
          ? 'bg-indigo-600 border-indigo-400 text-white'
          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-600'
      }`}
    >
      {children}
    </button>
  )
}

export default function PriceCalculator() {
  const ref = useReveal()
  const [serviceIdx, setServiceIdx] = useState(0)
  const [qty, setQty] = useState(1)

  const service = SERVICES[serviceIdx]
  const isPerUnit = service.unit === 'шт'
  const effectiveQty = isPerUnit ? qty : 1

  const total = useMemo(
    () => Math.round(service.priceValue * effectiveQty),
    [service, effectiveQty],
  )
  const formattedTotal = total.toLocaleString('ru-RU')

  return (
    <section id="calculator" ref={ref} className="relative py-24 sm:py-28 scroll-mt-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p data-reveal className="mono-label text-[11px] text-champagne mb-3">
          Калькулятор
        </p>
        <h2 data-reveal className="font-display text-3xl sm:text-4xl font-extrabold gradient-text max-w-xl">
          Посчитайте стоимость заранее
        </h2>

        <div data-reveal className="mt-10 rounded-card bg-zinc-900/40 border border-zinc-800 p-6 sm:p-8">
          <div>
            <p className="mono-label text-[10px] text-muted mb-3">Услуга</p>
            <div className="flex flex-wrap gap-2">
              {SERVICES.map((s, i) => (
                <ToggleButton key={s.title} active={i === serviceIdx} onClick={() => setServiceIdx(i)}>
                  {s.title}
                </ToggleButton>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="mono-label text-[10px] text-muted mb-3">
              {isPerUnit ? 'Количество датчиков' : 'Единица'}
            </p>
            {isPerUnit ? (
              <div className="flex flex-wrap gap-2">
                {QUANTITIES.map((q) => (
                  <ToggleButton key={q} active={q === qty} onClick={() => setQty(q)}>
                    {q}
                  </ToggleButton>
                ))}
              </div>
            ) : (
              <p className="mono-label text-xs text-zinc-400 bg-zinc-950 border border-zinc-800 rounded-full px-4 py-2 inline-block">
                Фиксированная цена за {service.unit}
              </p>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mono-label text-[10px] text-muted">Итого</p>
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-ink">
                {total === 0 ? 'Бесплатно' : `${formattedTotal} ₸`}
              </p>
            </div>
            <a
              href={waLink(
                `${service.title}${isPerUnit ? ` × ${qty}` : ''}, сумма: ${
                  total === 0 ? 'бесплатно' : formattedTotal + ' ₸'
                }`,
              )}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-indigo-600 to-indigo-400 px-7 py-3.5 mono-label text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 hover:scale-105 shadow-[0_0_36px_rgba(99,102,241,0.4)] cursor-pointer"
            >
              Записаться в WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
