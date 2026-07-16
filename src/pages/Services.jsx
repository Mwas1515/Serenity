import { services } from '../data/services.js'

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <p className="text-gold font-mono text-sm uppercase tracking-wide mb-3">What we offer</p>
      <h1 className="text-4xl font-semibold text-teal mb-10">Our Services</h1>

      <div className="space-y-6">
        {services.map((s) => (
          <div key={s.id} className="bg-white rounded-xl2 border border-sage-light/50 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="md:w-1/3">
              <h2 className="text-xl font-semibold text-teal">{s.name}</h2>
            </div>
            <p className="text-ink/70 flex-1">{s.details}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
