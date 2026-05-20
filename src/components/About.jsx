import { CheckCircle, ArrowRight } from '@phosphor-icons/react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const qualifications = [
  'Staatlich anerkannter Physiotherapeut',
  'Manualtherapeut (OMT)',
  'Sektoraler Heilpraktiker',
  // PLACEHOLDER: Weitere Auszeichnungen/Qualifikationen von Alexander erfragen
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="ueber-mich" className="py-20 md:py-28 px-6 md:px-10 bg-bg">
      <div className="max-w-content mx-auto">
        <div className="grid md:grid-cols-[45fr_55fr] gap-12 md:gap-20 items-center">

          {/* Foto — Hochformat, mit Rahmung damit es nicht in der Seite verschwindet */}
          <div className="order-2 md:order-1">
            <div
              className="relative rounded-2xl overflow-hidden bg-primary-light mx-auto md:mx-0 shadow-md max-h-[300px] sm:max-h-none"
              style={{ aspectRatio: '3/4', maxWidth: '400px' }}
            >
              <img
                src={`${import.meta.env.BASE_URL}alexander.jpg`}
                alt="Alexander Golsch, Physiotherapeut in Braunschweig"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 15%' }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div ref={ref} className="reveal order-1 md:order-2">

            <p className="font-body text-xs font-medium text-primary uppercase tracking-widest mb-5">
              Über mich
            </p>

            <h2
              className="font-display font-medium text-ink tracking-tight mb-8 whitespace-nowrap"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2rem)', lineHeight: 1.1 }}
            >
              Behandlung, die{' '}
              <span className="text-primary italic font-light">ankommt.</span>
            </h2>

            {/* Zitat */}
            <div className="mb-6">
              <p className="font-display italic font-light text-ink text-xl leading-snug">
                <span className="text-primary/50" aria-hidden="true">"</span>
                Nicht der Schmerz ist das Problem.
                Sondern das, was dahintersteckt.
                <span className="text-primary/50" aria-hidden="true">"</span>
              </p>
              <p className="font-body text-xs text-muted mt-2 tracking-wide">
                Alexander Golsch
              </p>
            </div>

            <p className="font-body text-base text-muted leading-relaxed mb-5">
              {/* PLACEHOLDER – Alexander: bitte persönlichen Text ergänzen */}
              Seit der Eröffnung meiner Praxis im Mai 2023 behandle ich Menschen in Braunschweig.
              Staatlich anerkannter Physiotherapeut, Manualtherapeut und Sektoraler Heilpraktiker.
            </p>

            <p className="font-body text-base text-muted leading-relaxed mb-9">
              {/* PLACEHOLDER – Alexander: bitte persönlichen Text ergänzen */}
              Kein Patient ist wie der andere. Deshalb nehme ich mir beim ersten Termin Zeit,
              um genau zu verstehen, was Sie bewegt, was Sie einschränkt und was Sie sich wünschen.
            </p>

            {/* Qualifikationen */}
            <div className="flex flex-col gap-3 mb-9">
              {qualifications.map((q) => (
                <div key={q} className="flex items-center gap-2.5">
                  <CheckCircle size={16} weight="fill" className="text-primary shrink-0" />
                  <span className="font-body text-sm text-ink">{q}</span>
                </div>
              ))}
            </div>

            {/* CTA — Konversionsmoment nach dem Kennenlernen */}
            <a
              href="https://wa.me/491703549410"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:text-primary-dark transition-colors duration-150"
            >
              Termin anfragen
              <ArrowRight size={15} weight="bold" />
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}
