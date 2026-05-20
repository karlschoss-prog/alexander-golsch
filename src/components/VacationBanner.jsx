import { vacationPeriods } from '../vacation.config.js'
import { Warning } from '@phosphor-icons/react'

function getActivePeriod() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return vacationPeriods.find((v) => {
    const from = new Date(v.from)
    const to = new Date(v.to)
    to.setHours(23, 59, 59)
    const noticeFrom = new Date(from)
    noticeFrom.setDate(noticeFrom.getDate() - (v.noticeDays ?? 28))
    return today >= noticeFrom && today <= to
  })
}

export default function VacationBanner() {
  const active = getActivePeriod()
  if (!active) return null

  return (
    <div className="bg-amber-50 border-b border-amber-200">
      <div className="max-w-content mx-auto px-6 md:px-10 py-3 flex items-center gap-3">
        <Warning size={16} weight="fill" className="text-amber-500 shrink-0" />
        <span className="font-body text-sm text-amber-800">
          <span className="font-medium">Urlaub:</span>{' '}{active.message}
        </span>
      </div>
    </div>
  )
}
