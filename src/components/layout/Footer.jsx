import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-teal-dark text-cream/90 mt-24">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="font-display text-lg font-semibold text-cream mb-2">Serenity.</div>
          <p className="text-sm text-cream/70">
            Compassionate, evidence-based mental health care — in person and online.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/conditions" className="hover:text-gold">Conditions We Treat</Link></li>
            <li><Link to="/resources" className="hover:text-gold">Resources</Link></li>
            <li><Link to="/assessment" className="hover:text-gold">Self Check-In</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gold mb-3">Get Help</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/booking" className="hover:text-gold">Book a Session</Link></li>
            <li><Link to="/crisis" className="hover:text-gold">Crisis Resources</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-gold">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-gold">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-4 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} MindPath. This is a student project demo — not a real clinical service.
      </div>
    </footer>
  )
}
