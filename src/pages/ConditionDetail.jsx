import { Link, useParams } from 'react-router-dom'
import { conditions } from '../data/conditions.js'

export default function ConditionDetail() {
  const { id } = useParams()
  const condition = conditions.find((c) => c.id === id)

  if (!condition) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-semibold text-teal mb-4">Condition not found</h1>
        <Link to="/conditions" className="text-teal underline">Back to all conditions</Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link to="/conditions" className="text-sm text-teal underline mb-6 inline-block">← All conditions</Link>
      <h1 className="text-4xl font-semibold text-teal mb-4">{condition.name}</h1>
      <p className="text-ink/70 text-lg mb-10">{condition.summary}</p>

      <div className="grid sm:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="font-semibold text-teal mb-3">Common signs</h2>
          <ul className="space-y-2">
            {condition.symptoms.map((s) => (
              <li key={s} className="text-sm text-ink/70 flex gap-2">
                <span className="text-gold">—</span>{s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-teal mb-3">How we approach treatment</h2>
          <ul className="space-y-2">
            {condition.approaches.map((a) => (
              <li key={a} className="text-sm text-ink/70 flex gap-2">
                <span className="text-gold">—</span>{a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-sage-light/30 rounded-xl2 p-6 text-sm text-ink/60 mb-8">
        This page is educational and not a substitute for a professional diagnosis. If you recognize these
        signs in yourself or someone else, consider booking a session with one of our clinicians.
      </div>

      <Link to="/booking" className="bg-teal text-cream px-6 py-3 rounded-full font-medium hover:bg-teal-light transition-colors inline-block">
        Book a Session
      </Link>
    </div>
  )
}
