import { useMemo, useState } from 'react'
import { therapists } from '../data/therapists.js'
import { services } from '../data/services.js'
import PathDivider from './ui/PathDivider.jsx'

const TIME_SLOTS = ['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM']

// Deterministically "mock" which slots are unavailable per day/therapist,
// so the UI feels alive without needing a backend.
function isSlotTaken(dateIndex, therapistId, slot) {
  const seed = dateIndex + therapistId.charCodeAt(1) + TIME_SLOTS.indexOf(slot)
  return seed % 4 === 0
}

function nextSevenDays() {
  const days = []
  const today = new Date()
  for (let i = 1; i <= 7; i++) {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    days.push(d)
  }
  return days
}

const STEPS = ['Service', 'Clinician', 'Date & Time', 'Your Details', 'Confirmed']

export default function BookingCalendar() {
  const [step, setStep] = useState(0)
  const [serviceId, setServiceId] = useState(null)
  const [therapistId, setTherapistId] = useState(null)
  const [dateIndex, setDateIndex] = useState(null)
  const [slot, setSlot] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', notes: '' })

  const days = useMemo(() => nextSevenDays(), [])
  const selectedService = services.find((s) => s.id === serviceId)
  const selectedTherapist = therapists.find((t) => t.id === therapistId)

  const canContinue = {
    0: !!serviceId,
    1: !!therapistId,
    2: dateIndex !== null && !!slot,
    3: form.name.trim() && form.email.trim(),
  }

  function goNext() {
    setStep((s) => Math.min(s + 1, STEPS.length - 1))
  }
  function goBack() {
    setStep((s) => Math.max(s - 1, 0))
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress indicator built from the site's path motif */}
      <div className="flex items-center justify-between mb-8">
        {STEPS.map((label, i) => (
          <div key={label} className="flex-1 flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-medium ${
                i <= step ? 'bg-teal text-cream' : 'bg-sage-light text-teal-dark'
              }`}
            >
              {i + 1}
            </div>
            <span className="text-[11px] mt-1 text-ink/60 hidden sm:block">{label}</span>
          </div>
        ))}
      </div>
      <div className="text-teal/30 -mt-4 mb-6">
        <PathDivider className="h-6" />
      </div>

      <div className="bg-white rounded-xl2 shadow-sm border border-sage-light/50 p-6 md:p-8">
        {step === 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-teal mb-4">What kind of session do you need?</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setServiceId(s.id)}
                  className={`text-left p-4 rounded-lg border transition-colors ${
                    serviceId === s.id
                      ? 'border-teal bg-sage-light/40'
                      : 'border-sage-light hover:border-teal/50'
                  }`}
                >
                  <div className="font-medium text-teal">{s.name}</div>
                  <div className="text-xs text-ink/60 mt-1">{s.blurb}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold text-teal mb-4">Choose a clinician</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {therapists.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTherapistId(t.id)}
                  className={`text-left p-4 rounded-lg border transition-colors ${
                    therapistId === t.id
                      ? 'border-teal bg-sage-light/40'
                      : 'border-sage-light hover:border-teal/50'
                  }`}
                >
                  <div className="font-medium text-teal">{t.name}</div>
                  <div className="text-xs text-gold mt-0.5">{t.title}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold text-teal mb-4">Pick a date and time</h2>
            <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
              {days.map((d, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDateIndex(i)
                    setSlot(null)
                  }}
                  className={`shrink-0 w-16 py-2 rounded-lg border text-center ${
                    dateIndex === i ? 'border-teal bg-sage-light/40' : 'border-sage-light hover:border-teal/50'
                  }`}
                >
                  <div className="text-[10px] uppercase text-ink/50">
                    {d.toLocaleDateString(undefined, { weekday: 'short' })}
                  </div>
                  <div className="font-mono font-medium text-teal">{d.getDate()}</div>
                </button>
              ))}
            </div>

            {dateIndex !== null && therapistId && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {TIME_SLOTS.map((t) => {
                  const taken = isSlotTaken(dateIndex, therapistId, t)
                  return (
                    <button
                      key={t}
                      disabled={taken}
                      onClick={() => setSlot(t)}
                      className={`py-2 rounded-lg border text-sm font-mono ${
                        taken
                          ? 'border-sage-light/50 text-ink/30 cursor-not-allowed line-through'
                          : slot === t
                          ? 'border-teal bg-teal text-cream'
                          : 'border-sage-light hover:border-teal/50 text-ink/80'
                      }`}
                    >
                      {t}
                    </button>
                  )
                })}
              </div>
            )}
            {dateIndex !== null && !therapistId && (
              <p className="text-sm text-ink/50">Select a clinician first to see availability.</p>
            )}
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-semibold text-teal mb-4">Your details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-ink/70 mb-1">Full name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-sage-light px-3 py-2 focus:border-teal outline-none"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink/70 mb-1">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-sage-light px-3 py-2 focus:border-teal outline-none"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink/70 mb-1">
                  Anything you'd like your clinician to know? (optional)
                </label>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  rows={3}
                  className="w-full rounded-lg border border-sage-light px-3 py-2 focus:border-teal outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="text-center py-6">
            <div className="text-4xl mb-4" aria-hidden="true">✓</div>
            <h2 className="text-2xl font-semibold text-teal mb-2">You're booked!</h2>
            <p className="text-ink/70 mb-1">
              {selectedService?.name} with {selectedTherapist?.name}
            </p>
            <p className="font-mono text-sm text-gold mb-6">
              {days[dateIndex]?.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })} at {slot}
            </p>
            <p className="text-sm text-ink/50">
              A confirmation would normally be emailed to {form.email}. (This is a front-end demo — no email is actually sent.)
            </p>
          </div>
        )}

        {step < 4 && (
          <div className="flex justify-between mt-8 pt-6 border-t border-sage-light/50">
            <button
              onClick={goBack}
              disabled={step === 0}
              className="px-4 py-2 text-sm text-teal disabled:opacity-0"
            >
              ← Back
            </button>
            <button
              onClick={goNext}
              disabled={!canContinue[step]}
              className="px-6 py-2 rounded-full bg-teal text-cream text-sm font-medium disabled:opacity-40 hover:bg-teal-light transition-colors"
            >
              {step === 3 ? 'Confirm Booking' : 'Continue →'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
