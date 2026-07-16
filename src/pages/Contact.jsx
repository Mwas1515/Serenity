import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
      <div>
        <p className="text-gold font-mono text-sm uppercase tracking-wide mb-3">Get in touch</p>
        <h1 className="text-4xl font-semibold text-teal mb-6">Contact Us</h1>
        <div className="space-y-4 text-ink/70">
          <p><strong className="text-teal">Phone:</strong> (555) 010-2938</p>
          <p><strong className="text-teal">Email:</strong> hello@mindpath.example</p>
          <p><strong className="text-teal">Hours:</strong> Mon–Fri, 8am–7pm</p>
          <p><strong className="text-teal">Insurance:</strong> We accept most major providers. Contact us to verify your coverage.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl2 border border-sage-light/50 p-6 md:p-8">
        {submitted ? (
          <div className="text-center py-10">
            <div className="text-3xl mb-3">✓</div>
            <h2 className="text-xl font-semibold text-teal mb-2">Message sent</h2>
            <p className="text-sm text-ink/60">We'll get back to you within one business day. (Demo only — no message was actually sent.)</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-ink/70 mb-1">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-sage-light px-3 py-2 focus:border-teal outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink/70 mb-1">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-sage-light px-3 py-2 focus:border-teal outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink/70 mb-1">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-sage-light px-3 py-2 focus:border-teal outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal text-cream py-3 rounded-full font-medium hover:bg-teal-light transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
