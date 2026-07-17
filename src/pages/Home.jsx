import { Link } from 'react-router-dom'
import { services } from '../data/services.js'
import { blogPosts } from '../data/blogPosts.js'
import ServiceCard from '../components/ServiceCard.jsx'
import PathDivider from '../components/ui/PathDivider.jsx'

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-gold font-mono text-sm uppercase tracking-wide mb-3">Mental health care, at your pace</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-teal leading-tight mb-6">
            Every path through this looks different.
            <br />We'll help you find yours.
          </h1>
          <p className="text-ink/70 text-lg mb-8 max-w-md">
            Therapy, psychiatry, and self guided tools in person or online, matched to where you are right now.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/booking" className="bg-teal text-cream px-6 py-3 rounded-full font-medium hover:bg-teal-light transition-colors">
              Book a Session
            </Link>
            <Link to="/assessment" className="border border-teal text-teal px-6 py-3 rounded-full font-medium hover:bg-sage-light/40 transition-colors">
              Take the Self Check-In
            </Link>
          </div>
        </div>

        <div className="text-teal">
          <PathDivider />
          <p className="text-center text-xs text-ink/40 mt-2 font-mono">your journey, however it winds</p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-sage-light/30 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm text-teal-dark font-medium">
          <span>Licensed clinicians</span>
          <span>·</span>
          <span>HIPAA-compliant platform</span>
          <span>·</span>
          <span>Most major insurance accepted</span>
          <span>·</span>
          <span>In-person & teletherapy</span>
        </div>
      </section>

      {/* Services preview */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-semibold text-teal">How we can help</h2>
          <Link to="/services" className="text-sm text-teal underline hover:text-teal-light">
            View all services →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {services.slice(0, 3).map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      {/* Crisis callout */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-teal rounded-xl2 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold text-cream mb-1">Need help right now?</h3>
            <p className="text-cream/70 text-sm max-w-md">
              If you're in crisis, you don't need an appointment to get support.
            </p>
          </div>
          <Link to="/crisis" className="bg-gold text-teal-dark px-6 py-3 rounded-full font-medium whitespace-nowrap hover:bg-gold-light transition-colors">
            Get Help Now
          </Link>
        </div>
      </section>

      {/* Resources preview */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-semibold text-teal">From the blog</h2>
          <Link to="/resources" className="text-sm text-teal underline hover:text-teal-light">
            All articles →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {blogPosts.slice(0, 2).map((p) => (
            <div key={p.id} className="bg-white rounded-xl2 border border-sage-light/50 p-6">
              <span className="text-xs font-mono text-gold uppercase">{p.category}</span>
              <h3 className="font-semibold text-teal text-lg mt-1 mb-2">{p.title}</h3>
              <p className="text-sm text-ink/60">{p.excerpt}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home;
