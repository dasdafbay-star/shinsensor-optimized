import { useReveal } from '../hooks/useReveal'
import { WHY_US, STATS } from '../content'
import Counter from './Counter'

export default function WhyUs() {
  const ref = useReveal()

  return (
    <section id="why" ref={ref} className="relative py-24 sm:py-28 bg-coal-alt/60 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p data-reveal className="mono-label text-[11px] text-champagne mb-3">
          Почему к нам
        </p>
        <h2 data-reveal className="font-display text-3xl sm:text-4xl font-extrabold gradient-text max-w-xl">
          У нас датчик поставил и забыл
        </h2>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-stretch">
          <div data-reveal className="rounded-card overflow-hidden min-h-[280px] lg:min-h-full">
            <img
              src="/images/sensor-macro.jpg"
              alt="Датчик TPMS установлен в диске"
              loading="lazy"
              className="size-full object-cover"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {WHY_US.map((item, i) => (
              <div key={item.title} data-reveal className="card-panel rounded-card p-6">
                <span className="mono-label text-[11px] text-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="mt-3 flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-indigo-400 shrink-0" />
                  <h3 className="font-display text-lg font-extrabold gradient-text">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 text-center">
          {STATS.map((stat) => (
            <div key={stat.label} data-reveal>
              <div className="font-display text-3xl sm:text-5xl font-extrabold text-ink text-glow-accent">
                <Counter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              </div>
              <p className="mt-2 mono-label text-[10px] sm:text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
