import Card from './ui/Card.jsx'

export default function TherapistCard({ therapist }) {
  return (
    <Card>
      <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center text-teal font-display text-xl font-semibold mb-4">
        {therapist.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
      </div>
      <h3 className="font-semibold text-teal">{therapist.name}</h3>
      <p className="text-xs uppercase tracking-wide text-gold mb-3">{therapist.title}</p>
      <p className="text-sm text-ink/70 mb-3">{therapist.bio}</p>
      <div className="flex flex-wrap gap-2">
        {therapist.specialties.map((s) => (
          <span key={s} className="text-xs bg-sage-light/60 text-teal-dark px-2 py-1 rounded-full">
            {s}
          </span>
        ))}
      </div>
    </Card>
  )
}
