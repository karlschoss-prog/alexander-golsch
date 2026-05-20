import { useScrollReveal } from '../hooks/useScrollReveal'
import {
  PersonSimpleRun,
  Heartbeat,
  Drop,
  Lightning,
  Sparkle,
  Certificate,
  ChatCircle,
  Snowflake,
  Sun,
  Leaf,
} from '@phosphor-icons/react'

const mainServices = [
  {
    icon: PersonSimpleRun,
    title: 'Krankengymnastik',
    body: 'Damit Sie sich wieder frei bewegen. Kraft, Koordination und Beweglichkeit aufbauen, gezielt auf Ihre Beschwerden abgestimmt.',
  },
  {
    icon: Heartbeat,
    title: 'Manuelle Therapie',
    body: 'Gelenke, die blockieren. Wirbelsäule, die nicht mitmacht. Manuelle Therapie löst Funktionsstörungen dort, wo sie entstehen.',
  },
  {
    icon: Drop,
    title: 'Manuelle Lymphdrainage',
    body: 'Schwellungen nach OP oder Verletzungen, chronische Ödeme, Lymphsystemerkrankungen. Sanfte Grifftechnik, spürbare Erleichterung.',
  },
  {
    icon: Lightning,
    title: 'Sportphysiotherapie',
    body: 'Nach der Verletzung zurück auf den Platz. Strukturierte Reha, präventive Behandlung und ein klares Ziel: Sie fit zu machen.',
  },
  {
    icon: Sparkle,
    title: 'Klassische Massage & Wellnessmassagen',
    body: 'Muskeln, die sich seit Wochen nicht entspannen. Klassische und Wellnessmassagen lösen tiefe Verspannungen und fördern die Regeneration.',
  },
  {
    icon: Certificate,
    title: 'Sektorale Heilpraktik',
    body: 'Beschwerden und kein Arzttermin in Sicht? Als Sektoraler Heilpraktiker behandle ich Sie direkt. Ohne Rezept, ohne Wartezeit.',
  },
]

const additionalServices = [
  {
    icon: ChatCircle,
    title: 'Ganzheitliche Beratung & Anamnese',
    body: 'Keine Behandlung ohne Verständnis. Beim ersten Termin höre ich zu, frage nach und schaue genau hin.',
  },
  {
    icon: Snowflake,
    title: 'Eisanwendungen',
    body: 'Akute Verletzung, Schwellung, Entzündung. Kältetherapie beruhigt das Gewebe und lindert den Schmerz schnell.',
  },
  {
    icon: Sun,
    title: 'Rotlicht & Heißluft',
    body: 'Wärme lockert auf, was Spannung zusammengezogen hat. Ergänzend eingesetzt für eine tiefere Wirkung der manuellen Behandlung.',
  },
  {
    icon: Leaf,
    title: 'Fangopackungen',
    body: 'Mineralreicher Heilschlamm dringt tief in die Muskulatur. Löst chronische Verspannungen, die oberflächliche Wärme nicht erreicht.',
  },
]

function ServiceCard({ service, small = false }) {
  const Icon = service.icon
  return (
    <div
      className={`group bg-bg rounded-2xl border border-black/[0.06] hover:border-primary/25 hover:-translate-y-1 hover:shadow-md transition-all duration-300 ${small ? 'p-4 sm:p-5' : 'p-4 sm:p-6 md:p-7'}`}
    >
      <div className={`rounded-xl bg-primary/[0.08] flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/15 transition-colors duration-300 ${small ? 'w-8 h-8 sm:w-9 sm:h-9' : 'w-9 h-9 sm:w-11 sm:h-11'}`}>
        <Icon size={small ? 16 : 18} weight="light" className="text-primary" />
      </div>
      <h3 className={`font-display font-medium text-ink tracking-tight mb-1.5 sm:mb-2 leading-snug ${small ? 'text-sm sm:text-base' : 'text-sm sm:text-base md:text-lg'}`}>
        {service.title}
      </h3>
      <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
        {service.body}
      </p>
    </div>
  )
}

export default function Services() {
  const ref = useScrollReveal()

  return (
    <section id="leistungen" className="py-20 md:py-28 px-6 md:px-10 bg-surface">
      <div className="max-w-content mx-auto">

        <div ref={ref} className="reveal mb-14">
          <p className="font-body text-xs font-medium text-primary uppercase tracking-widest mb-4">
            Leistungen
          </p>
          <h2
            className="font-display font-medium text-ink tracking-tight"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.1 }}
          >
            Was ich für Sie{' '}
            <span className="text-primary italic font-light">tun kann.</span>
          </h2>
          <p className="font-body text-sm text-muted mt-3">
            Abrechnung mit allen gesetzlichen und privaten Krankenkassen. Selbstzahler herzlich willkommen.
          </p>
        </div>

        {/* Hauptleistungen */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {mainServices.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>

        {/* Ergänzende Anwendungen */}
        <div className="mt-12">
          <p className="font-body text-xs font-medium text-muted uppercase tracking-widest mb-5">
            Ergänzende Anwendungen
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {additionalServices.map((s) => (
              <ServiceCard key={s.title} service={s} small />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
