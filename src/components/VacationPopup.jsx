import { useState, useEffect } from 'react'
import { X, CalendarX } from '@phosphor-icons/react'
import { vacationPeriods } from '../vacation.config.js'

function getUpcomingPeriod() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return vacationPeriods.find((v) => {
    const from = new Date(v.from)
    const to = new Date(v.to)
    to.setHours(23, 59, 59)
    const noticeDays = v.noticeDays ?? 14
    const noticeFrom = new Date(from)
    noticeFrom.setDate(noticeFrom.getDate() - noticeDays)
    return today >= noticeFrom && today <= to
  })
}

export default function VacationPopup() {
  const period = getUpcomingPeriod()
  const storageKey = period ? `vacation-dismissed-${period.from}` : null
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!storageKey) return
    const dismissed = localStorage.getItem(storageKey)
    if (!dismissed) setVisible(true)
  }, [storageKey])

  function dismiss() {
    localStorage.setItem(storageKey, '1')
    setVisible(false)
  }

  if (!period || !visible) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-5"
      style={{ backgroundColor: 'rgba(8,22,26,0.60)', backdropFilter: 'blur(6px)' }}
    >
      <div className="relative bg-bg rounded-2xl shadow-2xl max-w-[420px] w-full overflow-hidden border border-black/[0.06]">

        <div className="p-8">
          {/* Schließen-Button */}
          <button
            onClick={dismiss}
            aria-label="Schließen"
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/[0.05] hover:bg-black/[0.1] flex items-center justify-center transition-colors duration-150"
          >
            <X size={14} weight="bold" className="text-muted" />
          </button>

          {/* Icon + Titel */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-primary/[0.08] flex items-center justify-center flex-shrink-0">
              <CalendarX size={20} weight="light" className="text-primary" />
            </div>
            <h2 className="font-display font-medium text-ink tracking-tight text-2xl">
              Urlaub
            </h2>
          </div>

          {/* Text */}
          <p className="font-body text-sm text-muted leading-relaxed mb-7">
            {period.message}
          </p>

          {/* CTA */}
          <button
            onClick={dismiss}
            className="w-full py-3.5 rounded-xl bg-primary text-white font-body text-sm font-medium hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] active:translate-y-0 active:shadow-none transition-all duration-200"
          >
            Verstanden
          </button>
        </div>

      </div>
    </div>
  )
}
