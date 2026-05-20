import { Link } from 'react-router-dom'
import { ArrowLeft } from '@phosphor-icons/react'

export default function Impressum() {
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
          Impressum
        </h1>

        <div className="font-body text-muted leading-relaxed space-y-8">

          <section>
            <h2 className="font-display text-xl font-medium text-ink mb-3 tracking-tight">Angaben gemäß § 5 TMG</h2>
            <p>
              Praxis für ganzheitliche Physiotherapie<br />
              Alexander Golsch<br />
              Mummetwete 1<br />
              38100 Braunschweig
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink mb-3 tracking-tight">Kontakt</h2>
            <p>
              Telefon: 0170 3549410<br />
              E-Mail: praxis@alexander-golsch.de
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink mb-3 tracking-tight">Berufsbezeichnung & berufsrechtliche Regelungen</h2>
            <p>
              Inhaber: Alexander Golsch<br />
              Berufsbezeichnung: Staatlich anerkannter Physiotherapeut, Sektoraler Heilpraktiker<br />
              Zuständige Kammer: VPT Nord West, Albert Schuster Str. 1, 30880 Laatzen<br />
              Zuständige Aufsichtsbehörde: Gesundheitsamt Braunschweig, Hamburger Str. 226, 38114 Braunschweig
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink mb-3 tracking-tight">Berufshaftpflichtversicherung</h2>
            <p>
              Öffentliche Versicherung Braunschweig<br />
              Theodor-Heuss-Strasse 10<br />
              38122 Braunschweig
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink mb-3 tracking-tight">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink mb-3 tracking-tight">Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
