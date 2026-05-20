// Urlaubszeiten hier eintragen.
// Der Banner erscheint automatisch `noticeDays` vor Beginn und während des Urlaubs.
// Nach dem Ende verschwindet er von selbst.
//
// Beispiel:
// {
//   from: "2025-07-21",
//   to: "2025-08-04",
//   noticeDays: 28,   // optional, Standard: 28 Tage Vorlauf
//   message: "Die Praxis ist vom 21. Juli bis 4. August geschlossen. Ab dem 5. August bin ich wieder für euch da."
// }

export function hasActiveBanner() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return vacationPeriods.some((v) => {
    const from = new Date(v.from)
    const to = new Date(v.to)
    to.setHours(23, 59, 59)
    const noticeDays = v.noticeDays ?? 14
    const noticeFrom = new Date(from)
    noticeFrom.setDate(noticeFrom.getDate() - noticeDays)
    return today >= noticeFrom && today <= to
  })
}

export const vacationPeriods = [
  {
    from: '2026-05-25',
    to: '2026-05-25',
    noticeDays: 14,
    message: 'Die Praxis ist am Montag, den 25. Mai 2026 geschlossen. Ab Dienstag, den 26. Mai bin ich wieder für Sie da.',
  },
]
