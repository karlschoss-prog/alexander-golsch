import { Star, MapPin } from '@phosphor-icons/react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Hero() {
  const ref = useScrollReveal()

  return (
    <section
      className="relative min-h-[90vh] flex flex-col justify-center"
      aria-label="Einleitung"
    >
      {/* Hintergrundbild — vollflächig */}
      <img
        src="/alexander-behandlung.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />

      {/* Overlay: links dunkel für Lesbarkeit, rechts lässt das Bild atmen */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(110deg, rgba(8,22,26,0.84) 0%, rgba(8,22,26,0.64) 42%, rgba(8,22,26,0.28) 100%)'
        }}
      />

      {/* Inhalt */}
      <div className="relative z-10 max-w-content mx-auto w-full px-8 md:px-14 lg:px-20 py-24">
        <div ref={ref} className="reveal max-w-[700px]">

          {/* Google-Bewertung — verlinkt */}
          <a
            href="https://www.google.com/search?q=Alexander+Golsch+Physiotherapie+Rezensionen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 mb-8 hover:opacity-80 transition-opacity duration-150"
          >
            <div className="flex items-center gap-[3px]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} weight="fill" className="text-amber-400" />
              ))}
            </div>
            <span className="font-body text-sm font-semibold text-white/90">5,0</span>
            <span className="font-body text-sm text-white/50">· 22 Google-Bewertungen</span>
          </a>

          {/* Headline */}
          <h1
            className="font-display font-light text-white tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 2.8rem)', lineHeight: 1.06 }}
          >
            Ihre Praxis für
            <br />
            <span style={{ color: '#7DCBD8' }} className="italic font-light">ganzheitliche</span>
            {' '}Physiotherapie
          </h1>

          {/* Subtext */}
          <p className="font-body text-[15px] text-white/65 leading-[1.75] mb-10">
            Persönliche Einzelbehandlung. Alle Kassen & Selbstzahler.<br />
            Direkt buchbar, auch ohne Rezept.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-7">
            <a
              href="https://wa.me/491703549410"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark active:scale-[0.98] transition-all duration-150"
            >
              Termin per WhatsApp anfragen
            </a>
            <a
              href="tel:+491703549410"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-white/25 text-white/80 text-sm font-medium hover:border-white/70 hover:text-white transition-all duration-150"
            >
              0170 3549410
            </a>
          </div>

          {/* Adresse — verlinkt mit Google Maps */}
          <a
            href="https://maps.google.com/?q=Mummetwete+1,+38100+Braunschweig"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/45 hover:text-white/70 transition-colors duration-150"
          >
            <MapPin size={13} weight="fill" className="shrink-0" />
            <span className="font-body text-sm">Mummetwete 1 · 38100 Braunschweig</span>
          </a>

        </div>
      </div>

      {/* Scroll-Indikator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="w-px h-10 bg-white/25" />
      </div>

    </section>
  )
}
