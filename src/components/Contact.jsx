import { Phone, Envelope } from '@phosphor-icons/react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <section id="kontakt" className="py-20 md:py-28 px-6 md:px-10 bg-bg">
      <div className="max-w-content mx-auto">

        <div ref={ref} className="reveal text-center mb-12">
          <p className="font-body text-xs font-medium text-primary uppercase tracking-widest mb-4">
            Kontakt
          </p>
          <h2
            className="font-display font-medium text-ink tracking-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.1 }}
          >
            Ich bin für Sie{' '}
            <span className="text-primary italic font-light">da.</span>
          </h2>
          <p className="font-body text-sm text-muted">
            Schreiben Sie mir per WhatsApp oder rufen Sie an. Ich melde mich zeitnah zurück.
          </p>
        </div>

        <div className="max-w-xl mx-auto flex flex-col gap-3">

          {/* WhatsApp – Primärer Kanal */}
          <a
            href="https://wa.me/491703549410"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 bg-primary rounded-2xl p-7 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] active:translate-y-0 active:shadow-none transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.523 5.845L0 24l6.335-1.501A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.657-.525-5.165-1.432l-.371-.22-3.76.891.934-3.652-.242-.381A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-body text-white font-semibold text-base mb-0.5">
                Termin per WhatsApp
              </p>
              <p className="font-body text-white/65 text-sm">
                0170 3549410
              </p>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeOpacity="0.4" className="flex-shrink-0">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          {/* Telefon + E-Mail nebeneinander */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="tel:+491703549410"
              className="flex items-center gap-4 bg-surface rounded-2xl p-5 border border-black/[0.06] hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center flex-shrink-0">
                <Phone size={19} weight="light" className="text-primary" />
              </div>
              <div>
                <p className="font-body text-ink font-medium text-sm mb-0.5">Anrufen</p>
                <p className="font-body text-muted text-xs">0170 3549410</p>
              </div>
            </a>

            <a
              href="mailto:praxis@alexander-golsch.de"
              className="flex items-center gap-4 bg-surface rounded-2xl p-5 border border-black/[0.06] hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center flex-shrink-0">
                <Envelope size={19} weight="light" className="text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-body text-ink font-medium text-sm mb-0.5">E-Mail</p>
                <p className="font-body text-muted text-xs truncate">praxis@alexander-golsch.de</p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
