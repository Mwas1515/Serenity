import { Link } from 'react-router-dom'

export default function CrisisBanner() {
  return (
    <div className="bg-teal-dark text-cream text-sm">
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-2 text-center">
        <span>
          In an emotional crisis? Call or text <strong>1190</strong> (Suicide & Crisis Lifeline), available 24/7.
        </span>
        <Link to="/crisis" className="underline decoration-gold underline-offset-2 hover:text-gold">
          More resources
        </Link>
      </div>
    </div>
  )
}