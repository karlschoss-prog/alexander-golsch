import { useState } from 'react'
import { CaretDown } from '@phosphor-icons/react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const faqs = [
  {
    q: 'Brauche ich ein Rezept für die Behandlung?',
    a: 'Nein. Als Sektoraler Heilpraktiker für Physiotherapie behandle ich eigenverantwortlich, ohne Arztbesuch. Sie können sofort einen Termin buchen. Wer ein Kassenrezept hat, bringt es gerne mit.',
  },
  {
    q: 'Rechnen Sie mit meiner Krankenkasse ab?',
    a: 'Ja, ich rechne mit allen gesetzlichen und privaten Krankenkassen ab. Selbstzahler sind willkommen.',
  },
  {
    q: 'Wie lange dauert eine Behandlung?',
    a: 'Je nach Therapieform dauert eine Einheit 20 bis 45 Minuten. Für den Ersttermin plane ich mehr Zeit ein, damit ich Ihre Situation vollständig verstehe.',
  },
  {
    q: 'Wie vereinbare ich einen Termin?',
    a: 'Per WhatsApp an 0170 3549410 oder per Anruf. Sie können auch eine E-Mail an praxis@alexander-golsch.de schreiben. Ich melde mich noch am selben Tag zurück.',
  },
  {
    q: 'Gibt es Parkmöglichkeiten?',
    a: 'Die Praxis liegt in der Braunschweiger Innenstadt. Es gibt öffentliche Parkplätze in der Mummetwete und umliegende Parkhäuser. Mit dem Bus ebenfalls gut erreichbar: Mehrere Linien halten am Altstadtmarkt.',
  },
  {
    q: 'Ich war noch nie in physiotherapeutischer Behandlung. Was erwartet mich?',
    a: 'Kein Grund zur Sorge. Beim ersten Termin sprechen wir über Ihre Beschwerden, Ihre Vorgeschichte und Ihr Ziel. Dann untersuche ich Sie und erkläre Ihnen genau, was ich vorhabe. Keine Überraschungen.',
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-black/[0.07] last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-body text-base font-medium text-ink leading-snug">
          {faq.q}
        </span>
        <CaretDown
          size={18}
          weight="bold"
          className={`text-muted flex-shrink-0 mt-0.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <p className="font-body text-sm text-muted leading-relaxed max-w-[60ch]">
          {faq.a}
        </p>
      </div>
    </div>
  )
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const ref = useScrollReveal()

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
    <section id="faq" className="py-20 md:py-28 px-6 md:px-10 bg-bg">
      <div className="max-w-content mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16">

          <div ref={ref} className="reveal">
            <p className="font-body text-xs font-medium text-primary uppercase tracking-widest mb-4">
              Häufige Fragen
            </p>
            <h2
              className="font-display font-medium text-ink tracking-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.1 }}
            >
              Noch{' '}
              <span className="text-primary italic font-light">unsicher?</span>
            </h2>
            <p className="font-body text-sm text-muted mt-4 leading-relaxed">
              Die häufigsten Fragen, ehrlich beantwortet.
            </p>
          </div>

          <div>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
    </>
  )
}
