import { Link } from 'react-router-dom'
import { ArrowLeft } from '@phosphor-icons/react'

export default function Datenschutz() {
  return (
    <div className="bg-bg min-h-[100dvh] px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-2xl mx-auto">

        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm text-muted hover:text-ink transition-colors duration-150 mb-10"
        >
          <ArrowLeft size={16} weight="regular" />
          Zurück zur Startseite
        </Link>

        <h1 className="font-display font-medium text-ink text-4xl tracking-tight mb-8">
          Datenschutzerklärung
        </h1>

        <div className="font-body text-muted leading-relaxed space-y-6">

          <section>
            <h2 className="font-display text-xl font-medium text-ink mb-2 tracking-tight">1. Datenschutz auf einen Blick</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
              Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen
              Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink mb-2 tracking-tight">2. Verantwortlicher</h2>
            <p>
              Alexander Golsch<br />
              Mummetwete 1<br />
              38100 Braunschweig<br />
              E-Mail: praxis@alexander-golsch.de<br />
              Telefon: 0170 3549410
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink mb-2 tracking-tight">3. Datenerfassung auf dieser Website</h2>
            <h3 className="font-body font-medium text-ink mt-4 mb-1">Google Fonts</h3>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten Google Fonts (Anbieter: Google Ireland
              Limited, Gordon House, Barrow Street, Dublin 4, Ireland). Beim Aufruf einer Seite lädt Ihr Browser die
              benötigten Fonts in Ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Weitere
              Informationen zu Google Fonts finden Sie unter{' '}
              <a
                href="https://developers.google.com/fonts/faq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                developers.google.com/fonts/faq
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink mb-2 tracking-tight">4. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung
              oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
              haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das
              Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
              zu verlangen.
            </p>
            <p className="mt-2">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: praxis@alexander-golsch.de
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
