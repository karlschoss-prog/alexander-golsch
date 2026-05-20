import { useScrollReveal } from '../hooks/useScrollReveal'
import { Check } from '@phosphor-icons/react'

const benefits = [
  'Kein Arztbesuch notwendig',
  'Keine Wartezeit auf ein Kassenrezept',
  'Direkt zur Behandlung ohne Umwege',
  'Sofort buchbar, auch bei akuten Beschwerden',
  'Volle therapeutische Leistung, kein Kompromiss',
]

export default function HeilpraktikUSP() {
  const ref = useScrollReveal()

  return (
    <section
      className="py-20 md:py-28 px-6 md:px-10 bg-primary"
      style={{
        backgroundImage: 'radial-gradient(ellipse at 75% 50%, rgba(255,255,255,0.07) 0%, transparent 65%)'
      }}
    >
      <div className="max-w-content mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Links: Text + CTA */}
          <div ref={ref} className="reveal">
            <p className="font-body text-xs font-medium text-primary-mid uppercase tracking-widest mb-5">
              Sektorale Heilpraktik
            </p>
            <h2
              className="font-display font-medium text-white tracking-tight mb-5"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.1 }}
            >
              Behandlung ohne Rezept?
              <br />
              <span
                className="italic font-light"
                style={{ color: '#7DCBD8', fontSize: '1.15em' }}
              >
                Möglich.
              </span>
            </h2>
            <p className="font-body text-base text-white/65 leading-relaxed mb-8">
              Als <strong className="text-white font-medium">Sektoraler Heilpraktiker für Physiotherapie</strong> behandle
              ich eigenverantwortlich. Kein Rezept, kein Arztbesuch, kein Wartezimmer.
              Sie haben Beschwerden und möchten sofort handeln? Melden Sie sich direkt.
            </p>

            <a
              href="https://wa.me/491703549410"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-4 rounded-lg bg-white text-primary font-medium text-sm hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] active:translate-y-0 active:shadow-none transition-all duration-200"
            >
              Jetzt Termin sichern
            </a>
            <p className="mt-3 font-body text-xs text-white/40">
              Unverbindliche Anfrage per WhatsApp
            </p>
          </div>

          {/* Rechts: nur Bullets, vertikal zentriert */}
          <ul className="space-y-4" role="list">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={12} weight="bold" className="text-white" />
                </span>
                <span className="font-body text-base text-white/80 leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  )
}
