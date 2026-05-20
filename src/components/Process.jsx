import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Kontakt aufnehmen',
    body: 'Schreiben Sie mir per WhatsApp oder rufen Sie an. Ich melde mich zeitnah zurück und wir finden einen passenden Termin.',
  },
  {
    number: '02',
    title: 'Erstgespräch & Untersuchung',
    body: 'Beim ersten Termin nehmen wir uns Zeit. Ich höre zu, untersuche sorgfältig und erkläre Ihnen, was ich gefunden habe. Kein Standardprogramm.',
  },
  {
    number: '03',
    title: 'Behandlung starten',
    body: 'Ihre Therapie hat ein klares Ziel. Wir messen Ihren Fortschritt und passen die Behandlung so an, dass Sie weiterkommen.',
  },
]

export default function Process() {
  const ref = useScrollReveal()

  return (
    <section id="ablauf" className="py-20 md:py-28 px-6 md:px-10 bg-surface">
      <div className="max-w-content mx-auto">

        <div ref={ref} className="reveal mb-12">
          <p className="font-body text-xs font-medium text-primary uppercase tracking-widest mb-4">
            Ablauf
          </p>
          <h2
            className="font-display font-medium text-ink tracking-tight"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.1 }}
          >
            So einfach{' '}
            <span className="text-primary italic font-light">geht's los.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:items-stretch">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-bg rounded-2xl p-7 border border-black/[0.06] flex flex-col"
            >
              <span
                className="block font-display font-light italic text-primary/40 leading-none select-none mb-5"
                style={{ fontSize: '3.5rem' }}
                aria-hidden="true"
              >
                {step.number}
              </span>
              <h3 className="font-display font-medium text-ink text-lg mb-2.5 tracking-tight">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/491703549410"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-lg bg-primary text-white text-sm font-medium hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] active:translate-y-0 active:shadow-none transition-all duration-200"
          >
            Jetzt Termin anfragen
          </a>
          <p className="mt-3 font-body text-xs text-muted">
            Unverbindliche Anfrage per WhatsApp
          </p>
        </div>

      </div>
    </section>
  )
}
