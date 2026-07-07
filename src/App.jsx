import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WheelDiagnostics from './components/WheelDiagnostics'
import PriceCalculator from './components/PriceCalculator'
import WhyUs from './components/WhyUs'
import Contacts from './components/Contacts'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { CONTACT, waLink } from './content'

function App() {
  return (
    <div className="min-h-screen text-ink overflow-x-hidden">
      <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none">
        <img
          src="/images/sensor-macro.jpg"
          alt=""
          aria-hidden="true"
          className="size-full object-cover duotone opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-coal/75" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(60% 50% at 50% 0%, rgba(99,102,241,0.12), transparent 70%)',
          }}
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <WheelDiagnostics />
        <PriceCalculator />
        <WhyUs />
        <Contacts />
        <CTA />
      </main>
      <Footer />

      {/* Мобильная закреплённая нижняя панель */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 p-3 glass-panel">
        <div className="flex gap-3">
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className="flex-1 text-center rounded-full border border-line/15 py-3 text-sm font-semibold text-ink"
          >
            Позвонить
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center rounded-full bg-gradient-to-r from-indigo-600 to-indigo-400 py-3 text-sm font-semibold text-white"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
