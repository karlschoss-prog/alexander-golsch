import { useState, useEffect } from 'react'
import { Phone, List, X, MapPin } from '@phosphor-icons/react'

const navLinks = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Über mich', href: '#ueber-mich' },
  { label: 'Bewertungen', href: '#bewertungen' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-md border-b border-black/[0.07] shadow-sm'
          : 'bg-bg/80 backdrop-blur-sm'
      }`}>
        <nav
          className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between"
          style={{ height: '72px' }}
        >
          <a href="/" className="flex flex-col leading-none" aria-label="Alexander Golsch Physiotherapie">
            <span className="font-display text-xl font-medium tracking-tight text-ink">
              Alexander Golsch
            </span>
            <span className="font-body text-[11px] text-muted mt-0.5 leading-none">
              Praxis für ganzheitliche Physiotherapie
            </span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            <ul className="flex items-center gap-6" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-body text-sm text-muted hover:text-ink transition-colors duration-150">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="tel:+491703549410" className="flex items-center gap-1.5 font-body text-sm text-muted hover:text-ink transition-colors duration-150">
              <Phone size={14} weight="regular" />
              0170 3549410
            </a>
            <a
              href="https://wa.me/491703549410"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark active:scale-[0.98] transition-all duration-150"
            >
              Termin anfragen
            </a>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <a href="tel:+491703549410" className="w-10 h-10 flex items-center justify-center rounded-lg border border-black/[0.07] text-muted">
              <Phone size={18} />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-black/[0.07] text-muted"
              aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              {menuOpen ? <X size={18} /> : <List size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-bg pt-[72px] flex flex-col px-6 py-8 md:hidden">
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 font-display text-2xl font-medium text-ink border-b border-black/[0.07] hover:text-primary transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            <a href="https://wa.me/491703549410" target="_blank" rel="noopener noreferrer" className="w-full text-center py-4 rounded-xl bg-primary text-white font-medium">
              Termin per WhatsApp anfragen
            </a>
            <a href="tel:+491703549410" className="w-full text-center py-4 rounded-xl border border-black/[0.07] text-muted font-medium">
              0170 3549410
            </a>
          </div>

          <div className="mt-auto pt-8">
            <div className="border-t border-black/[0.07] pt-6">
              <a
                href="https://maps.google.com/?q=Mummetwete+1,+38100+Braunschweig"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors duration-150">
                  <MapPin size={16} weight="fill" className="text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-ink">Mummetwete 1, 38100 Braunschweig</p>
                  <p className="font-body text-xs text-primary mt-0.5">In Google Maps öffnen</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
