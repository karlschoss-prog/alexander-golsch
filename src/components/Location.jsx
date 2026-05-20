import { useScrollReveal } from '../hooks/useScrollReveal'
import { MapPin, Bus, Car, Clock } from '@phosphor-icons/react'

const hours = [
  { day: 'Montag',     time: '08:00 – 20:00 Uhr' },
  { day: 'Dienstag',   time: '08:00 – 20:00 Uhr' },
  { day: 'Mittwoch',   time: '08:00 – 20:00 Uhr' },
  { day: 'Donnerstag', time: '08:00 – 20:00 Uhr' },
  { day: 'Freitag',    time: '08:00 – 18:00 Uhr' },
]

const infos = [
  {
    icon: Car,
    title: 'Parken',
    body: 'Öffentliche Parkplätze direkt vor der Praxis und in der gesamten Innenstadt. Parkhäuser in unmittelbarer Nähe.',
  },
  {
    icon: Bus,
    title: 'ÖPNV',
    body: 'Gute Busanbindung über den Altstadtmarkt. Mehrere Linien halten in direkter Nähe.',
  },
]

export default function Location() {
  const ref = useScrollReveal()

  return (
    <section id="anfahrt" className="py-20 md:py-28 px-6 md:px-10 bg-surface">
      <div className="max-w-content mx-auto">

        <div ref={ref} className="reveal mb-12">
          <p className="font-body text-xs font-medium text-primary uppercase tracking-widest mb-4">
            Praxis & Anfahrt
          </p>
          <h2
            className="font-display font-medium text-ink tracking-tight"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.1 }}
          >
            Mitten in{' '}
            <span className="text-primary italic font-light">Braunschweig.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-6 md:gap-8 md:items-stretch">

          {/* Links: Öffnungszeiten + Info */}
          <div className="flex flex-col gap-4">

            {/* Öffnungszeiten */}
            <div className="bg-bg rounded-2xl p-6 md:p-8 border border-black/[0.06]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-primary/[0.08] flex items-center justify-center">
                  <Clock size={18} weight="light" className="text-primary" />
                </div>
                <h3 className="font-display font-medium text-ink text-lg tracking-tight">
                  Öffnungszeiten
                </h3>
              </div>
              <ul className="space-y-3" role="list">
                {hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between">
                    <span className="font-body text-sm text-muted">{h.day}</span>
                    <span className="font-body text-sm font-medium text-ink tabular-nums inline-block w-[148px]">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Infos */}
            {infos.map((info) => {
              const Icon = info.icon
              return (
                <div
                  key={info.title}
                  className="bg-bg rounded-xl p-5 border border-black/[0.06] flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/[0.08] flex items-center justify-center flex-shrink-0">
                    <Icon size={18} weight="light" className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-ink mb-0.5">{info.title}</p>
                    <p className="font-body text-sm text-muted leading-relaxed">{info.body}</p>
                  </div>
                </div>
              )
            })}

          </div>

          {/* Rechts: Karte */}
          <div className="rounded-2xl overflow-hidden border border-black/[0.06] min-h-[420px]">
            <iframe
              src="https://maps.google.com/maps?q=Mummetwete+1,+38100+Braunschweig&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: '420px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Praxis Alexander Golsch – Mummetwete 1, 38100 Braunschweig"
            />
          </div>

        </div>

      </div>
    </section>
  )
}
