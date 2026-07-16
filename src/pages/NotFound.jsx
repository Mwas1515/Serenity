import { Link } from 'react-router-dom'
import PathDivider from '../components/ui/PathDivider.jsx'

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <div className="text-teal/30 mb-6">
        <PathDivider />
      </div>
      <h1 className="text-3xl font-semibold text-teal mb-3">This path doesn't lead anywhere</h1>
      <p className="text-ink/60 mb-8">The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-teal text-cream px-6 py-3 rounded-full font-medium hover:bg-teal-light transition-colors">
        Back to Home
      </Link>
    </div>
  )
}
