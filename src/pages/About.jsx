import { therapists } from '../data/therapists.js'
import TherapistCard from '../components/TherapistCard.jsx'

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="max-w-2xl mb-16">
        <p className="text-gold font-mono text-sm uppercase tracking-wide mb-3">Our approach</p>
        <h1 className="text-4xl font-semibold text-teal mb-6">Care that meets you where you are</h1>
        <p className="text-ink/70 text-lg">
          We believe good mental health care is collaborative, evidence based, and never one size fits all.
          Every clinician on our team is licensed, and every treatment plan starts with listening.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mb-20">
        <div className="p-6 bg-white rounded-xl2 border border-sage-light/50">
          <h3 className="font-semibold text-teal mb-2">Evidence based</h3>
          <p className="text-sm text-ink/60">We use approaches backed by research: CBT, ACT, EMDR, and more.</p>
        </div>
        <div className="p-6 bg-white rounded-xl2 border border-sage-light/50">
          <h3 className="font-semibold text-teal mb-2">Inclusive</h3>
          <p className="text-sm text-ink/60">Care for every identity, background, and family structure.</p>
        </div>
        <div className="p-6 bg-white rounded-xl2 border border-sage-light/50">
          <h3 className="font-semibold text-teal mb-2">Flexible</h3>
          <p className="text-sm text-ink/60">In person, teletherapy, or a mix — whatever works for your life.</p>
        </div>
      </div>

      <h2 className="text-3xl font-semibold text-teal mb-8">Meet our team</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {therapists.map((t) => (
          <TherapistCard key={t.id} therapist={t} />
        ))}
      </div>
    </div>
  )
}
