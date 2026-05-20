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

        <div className="font-body text-muted leading-relaxed space-y-8">

          <section>
            <h2 className="font-display text-xl font-medium text-ink mb-3 tracking-tight">1. Verantwortlicher</h2>
            <p>
              Alexander Golsch<br />
              Praxis für ganzheitliche Physiotherapie<br />
              Mummetwete 1<br />
              38100 Braunschweig<br />
              Telefon: 0170 3549410<br />
              E-Mail: praxis@alexander-golsch.de
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink mb-3 tracking-tight">2. Datenerfassung auf dieser Website</h2>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten des
              Websitebetreibers können Sie dem Impressum dieser Website entnehmen.
            </p>
            <h3 className="font-body font-medium text-ink mt-5 mb-2">Wie erfassen wir Ihre Daten?</h3>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, z. B. durch direkte
              Kontaktaufnahme per Telefon, WhatsApp oder E-Mail. Andere Daten werden beim Besuch der Website
              automatisch durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser,
              Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink mb-3 tracking-tight">3. Hosting</h2>
            <p>
              Diese Website wird bei Strato AG gehostet. Anbieter ist die Strato AG, Otto-Ostrowski-Straße 7,
              10249 Berlin. Details entnehmen Sie der Datenschutzerklärung von Strato:{' '}
              <a
                href="https://www.strato.de/datenschutz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                www.strato.de/datenschutz
              </a>.
            </p>
            <p className="mt-3">
              Die Verwendung von Strato erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben einen
              Vertrag über Auftragsverarbeitung mit dem Anbieter geschlossen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink mb-3 tracking-tight">4. Google Fonts</h2>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten Google Fonts (Anbieter: Google Ireland
              Limited, Gordon House, Barrow Street, Dublin 4, Irland). Beim Aufruf einer Seite lädt Ihr Browser die
              benötigten Fonts in Ihren Browsercache. Dabei wird eine Verbindung zu Servern von Google hergestellt.
              Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde.
            </p>
            <p className="mt-3">
              Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Weitere
              Informationen zu Google Fonts finden Sie unter{' '}
              <a
                href="https://developers.google.com/fonts/faq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                developers.google.com/fonts/faq
              </a>{' '}
              und in der Datenschutzerklärung von Google:{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                policies.google.com/privacy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink mb-3 tracking-tight">5. Google Maps</h2>
            <p>
              Diese Website verwendet Links zu Google Maps. Anbieter ist die Google Ireland Limited, Gordon House,
              Barrow Street, Dublin 4, Irland. Beim Klick auf einen Google Maps-Link werden Sie auf die Website von
              Google weitergeleitet. Dabei werden Daten an Google übertragen, unter anderem Ihre IP-Adresse.
              Wir haben keinen Einfluss auf diese Datenübertragung.
            </p>
            <p className="mt-3">
              Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer
              Online-Angebote und einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte
              (Art. 6 Abs. 1 lit. f DSGVO). Mehr Informationen:{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                policies.google.com/privacy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink mb-3 tracking-tight">6. Ihre Rechte</h2>
            <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
              personenbezogenen Daten durch uns zu beschweren.
            </p>
            <p className="mt-3">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: praxis@alexander-golsch.de
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink mb-3 tracking-tight">7. SSL-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
              SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
              des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
