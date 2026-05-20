import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <footer className="bg-primary-dark px-6 md:px-10 py-7">
        <div className="max-w-content mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

          {/* Links: Name + Tagline */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <span className="font-display text-base font-medium text-white tracking-tight">
              Alexander Golsch
            </span>
            <span className="text-white/20 hidden sm:inline text-xs">·</span>
            <span className="font-body text-xs text-white/40">
              Praxis für ganzheitliche Physiotherapie
            </span>
          </div>

          {/* Rechts: Copyright + Legal */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-body text-xs text-white/25">
              © {year}
            </span>
            <span className="text-white/15 text-xs">·</span>
            <Link
              to="/impressum"
              className="font-body text-xs text-white/40 hover:text-white/70 transition-colors duration-150"
            >
              Impressum
            </Link>
            <span className="text-white/15 text-xs">·</span>
            <Link
              to="/datenschutz"
              className="font-body text-xs text-white/40 hover:text-white/70 transition-colors duration-150"
            >
              Datenschutz
            </Link>
          </div>

        </div>
      </footer>

      {/* seitenreif credit bar */}
      <div style={{ backgroundColor: '#1A1A18' }} className="w-full py-4 px-4">
        <div className="max-w-content mx-auto flex flex-col items-center gap-1">
          <span
            style={{ color: 'rgba(255,255,255,0.30)', fontFamily: 'DM Sans, sans-serif' }}
            className="text-[10px] uppercase tracking-widest"
          >
            Website erstellt von
          </span>
          <a
            href="https://www.seitenreif.de"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-lg leading-none hover:opacity-75 transition-opacity"
          >
            <span style={{ color: '#FFFFFF' }}>seiten</span><span style={{ color: '#2A9D7C' }}>reif</span><span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75em' }}>.de</span>
          </a>
        </div>
      </div>
    </>
  )
}
