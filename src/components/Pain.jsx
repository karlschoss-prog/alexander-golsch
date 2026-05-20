import { Bone, ArrowsCounterClockwise, Lightning, FirstAid, Clock, Drop } from '@phosphor-icons/react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const conditions = [
  {
    icon: Bone,
    title: 'Rückenschmerzen & Bandscheibenbeschwerden',
    body: 'Rückenschmerzen, die morgens beginnen und abends nicht aufhören. Wir behandeln die Ursache, nicht nur das Symptom.',
  },
  {
    icon: ArrowsCounterClockwise,
    title: 'Schulter, Nacken & Knie',
    body: 'Der Arm kommt nicht hoch. Die Treppe wird zum Problem. Mit gezielter Therapie arbeiten wir daran, dass Sie sich wieder frei bewegen.',
  },
  {
    icon: Lightning,
    title: 'Sportverletzungen & Rehabilitation',
    body: 'Nach der Verletzung so schnell wie möglich zurück. Sicher, schrittweise, mit einem klaren Rehabilitationsplan.',
  },
  {
    icon: FirstAid,
    title: 'Post-operative Therapie',
    body: 'Eine OP ist der erste Schritt, die Reha entscheidet über den Rest. Wir begleiten Sie vom ersten Tag nach der Entlassung.',
  },
  {
    icon: Clock,
    title: 'Chronische Schmerzen',
    body: 'Wenn Sie den Schmerz schon so lange kennen, dass er sich normal anfühlt. Es ist Zeit, das zu ändern.',
  },
  {
    icon: Drop,
    title: 'Lymphödem & Schwellungen',
    body: 'Nach Krebs-OP oder Verletzungen: Manuelle Lymphdrainage reduziert Schwellungen und gibt Ihnen Lebensqualität zurück.',
  },
]

export default function Pain() {
  const ref = useScrollReveal()
  const col1 = conditions.slice(0, 3)
  const col2 = conditions.slice(3)

  return (
    <section className="py-20 md:py-28 px-6 md:px-10 bg-surface">
      <div className="max-w-content mx-auto">

        <div ref={ref} className="reveal mb-12">
          <p className="font-body text-xs font-medium text-primary uppercase tracking-widest mb-4">
            Häufige Beschwerden
          </p>
          <h2
            className="font-display font-medium text-ink tracking-tight"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.1 }}
          >
            Kommt Ihnen eines{' '}
            <span className="text-primary italic font-light">davon bekannt vor?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 md:gap-x-16">
          {[col1, col2].map((group, gi) => (
            <div
              key={gi}
              className={`divide-y divide-black/[0.06]${gi === 1 ? ' border-t md:border-t-0 border-black/[0.06]' : ''}`}
            >
              {group.map((c) => {
                const Icon = c.icon
                return (
                  <div key={c.title} className="flex items-start gap-4 py-5">
                    <div className="w-9 h-9 rounded-xl bg-primary/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={18} weight="regular" className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-medium text-ink text-base tracking-tight leading-snug mb-1">
                        {c.title}
                      </h3>
                      <p className="font-body text-sm text-muted leading-relaxed">
                        {c.body}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
