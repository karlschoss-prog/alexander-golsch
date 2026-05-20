import { ArrowRight } from '@phosphor-icons/react'

export default function HiringBanner() {
  return (
    <div className="bg-primary-light border-b border-primary/20">
      <div className="max-w-content mx-auto px-6 md:px-10 py-2.5 flex items-center justify-center gap-4">
        <p className="font-body text-sm text-primary">
          <span className="font-medium">Ich suche Verstärkung</span>
          <span className="text-primary/50 mx-2">·</span>
          Physiotherapeut*in (m/w/d)
        </p>
        <a
          href="mailto:praxis@alexander-golsch.de"
          className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-150 shrink-0"
        >
          Jetzt bewerben
          <ArrowRight size={13} weight="bold" />
        </a>
      </div>
    </div>
  )
}
