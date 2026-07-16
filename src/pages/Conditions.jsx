import { Link } from 'react-router-dom'
import { conditions } from '../data/conditions.js'

export default function Conditions() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <p className="text-gold font-mono text-sm uppercase tracking-wide mb-3">Conditions we treat</p>
      <h1 className="text-4xl font-semibold text-teal mb-4">Understanding what you're facing</h1>
      <p className="text-ink/70 max-w-2xl mb-10">
        Learn more about common conditions and how our clinicians typically approach treatment.
        This is educational information, not a diagnosis.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {conditions.map((c) => (
          <Link
            key={c.id}
            to={`/conditions/${c.id}`}
            className="bg-white rounded-xl2 border border-sage-light/50 p-6 hover:border-teal transition-colors"
          >
            <h2 className="font-semibold text-teal text-lg mb-2">{c.name}</h2>
            <p className="text-sm text-ink/60">{c.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
