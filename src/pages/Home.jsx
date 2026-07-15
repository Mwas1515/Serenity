import React from 'react'
import Homebackground from "../assets/images/Home.jpg"

function Home() {
  return (
        <section className="min-h-screen bg-cover bg-center flex items-center justify-end px-6 md:px-20"
     style={{
            backgroundImage:`url(${Homebackground})`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            height: "500px",
     }}>
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
            Therapy, psychiatry, and self-guided tools — in person or online, matched to where you are right now.
          </p>
          <div className="flex flex-wrap gap-3">
            <p className="bg-teal text-cream px-6 py-3 rounded-full font-medium hover:bg-teal-light transition-colors">
              Book a Session
            </p>
            <p className="border border-teal text-teal px-6 py-3 rounded-full font-medium hover:bg-sage-light/40 transition-colors">
              Take the Self Check-In
            </p>
          </div>
        </div>

        <div className="text-teal">
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
          <p className="text-sm text-teal underline hover:text-teal-light">
            View all services →
          </p>
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
          <p className="bg-gold text-teal-dark px-6 py-3 rounded-full font-medium whitespace-nowrap hover:bg-gold-light transition-colors">
            Get Help Now
          </p>
        </div>
      </section>

      {/* Resources preview */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-semibold text-teal">From the blog</h2>
          <p className="text-sm text-teal underline hover:text-teal-light">
            All articles →
          </p>
        </div>
      </section>
    </div>
     </section>
    )
}

export default Home;
