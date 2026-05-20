import { useMemo, useState } from 'react'
import { Star, ArrowRight } from '@phosphor-icons/react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const GOOGLE_URL = 'https://www.google.com/search?q=Alexander+Golsch+Physiotherapie+Rezensionen'

// PLACEHOLDER – echte Google-Bewertungen eintragen sobald vorhanden
// Bitte Alexander nach den Texten fragen oder direkt aus Google Maps übertragen
const reviews = [
  {
    text: 'Alexander nimmt sich wirklich Zeit. Er hat sich meine Beschwerden genau erklärt und die Behandlung individuell angepasst. Meine Rückenschmerzen haben sich nach wenigen Sitzungen deutlich gebessert.',
    author: 'Maria K.',
    date: 'März 2025',
  },
  {
    text: 'Sehr professionell und empathisch. Ich bin mit einem Schulterproblem gekommen, das andere Therapeuten nicht lösen konnten. Endlich jemand der ganzheitlich denkt.',
    author: 'Sandra B.',
    date: 'Februar 2025',
  },
  {
    text: 'Die Praxis ist persönlich und herzlich. Man wird nicht wie eine Nummer behandelt. Ich fühle mich in guten Händen und komme sehr gerne wieder.',
    author: 'Thomas H.',
    date: 'Januar 2025',
  },
  {
    text: 'Nach meiner OP hat Alexander mir mit manueller Lymphdrainage enorm geholfen. Sehr kompetent, sehr menschlich. Klare Weiterempfehlung.',
    author: 'Andreas W.',
    date: 'Dezember 2024',
  },
  {
    text: 'Schnelle Terminvergabe, top Behandlung. Alexander erklärt immer was er tut und warum. Das schätze ich sehr. Fühle mich super aufgehoben.',
    author: 'Robert M.',
    date: 'November 2024',
  },
  {
    text: 'Ich war skeptisch, aber die Behandlung hat überzeugt. Die Kombination aus Physiotherapie und ganzheitlichem Ansatz macht einen echten Unterschied.',
    author: 'Christine F.',
    date: 'Oktober 2024',
  },
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function StarRow({ size = 14 }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={size} weight="fill" className="text-amber-400" />
      ))}
    </div>
  )
}

export default function Reviews() {
  const ref = useScrollReveal()
  const shuffled = useMemo(() => shuffle(reviews), [])
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="bewertungen" className="py-20 md:py-28 px-6 md:px-10 bg-bg">
      <div className="max-w-content mx-auto">

        {/* Rating Hero */}
        <div ref={ref} className="reveal mb-14 text-center">
          <p className="font-body text-xs font-medium text-primary uppercase tracking-widest mb-5">
            Google-Bewertungen
          </p>
          <h2
            className="font-display font-medium text-ink tracking-tight mb-8"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.1 }}
          >
            Was Patienten{' '}
            <span className="text-primary italic font-light">sagen.</span>
          </h2>
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-3 group"
          >
            <StarRow size={24} />
            <span
              className="font-display font-light italic text-ink leading-none group-hover:text-primary transition-colors duration-200"
              style={{ fontSize: 'clamp(6rem, 12vw, 9rem)' }}
            >
              5,0
            </span>
            <span className="font-body text-sm text-muted">
              22 Bewertungen auf Google
            </span>
          </a>
        </div>

        {/* Alle 6 Bewertungen als vollständiges Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shuffled.map((review, i) => (
            <a
              key={review.author}
              href={GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white rounded-2xl p-7 border border-black/[0.05] shadow-sm flex flex-col gap-5 hover:-translate-y-1.5 hover:shadow-md transition-all duration-300${i >= 3 && !showAll ? ' hidden sm:flex' : ''}`}
            >
              <div className="flex items-start justify-between">
                <StarRow size={15} />
                <span
                  className="font-display text-5xl leading-none text-primary/15 group-hover:text-primary/30 transition-colors duration-300 -mt-2 select-none"
                  aria-hidden="true"
                >
                  "
                </span>
              </div>
              <p className="font-body text-base text-ink/75 leading-relaxed flex-1">
                {review.text}
              </p>
              <div>
                <p className="font-body text-sm font-medium text-ink">{review.author}</p>
                <p className="font-body text-xs text-muted mt-0.5">{review.date}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile: Alle anzeigen Toggle */}
        {!showAll && (
          <div className="mt-6 text-center sm:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="font-body text-sm font-medium text-primary hover:text-primary-dark transition-colors duration-150"
            >
              Alle 6 Bewertungen anzeigen
            </button>
          </div>
        )}

        {/* CTA nach den Karten */}
        <div className="mt-10 text-center">
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary hover:text-primary-dark transition-colors duration-150 group"
          >
            Alle Bewertungen auf Google ansehen
            <ArrowRight size={13} weight="bold" className="group-hover:translate-x-0.5 transition-transform duration-150" />
          </a>
        </div>

      </div>
    </section>
  )
}
