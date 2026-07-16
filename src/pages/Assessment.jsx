import QuizWidget from '../components/QuizWidget.jsx'

export default function Assessment() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-10 max-w-xl mx-auto">
        <p className="text-gold font-mono text-sm uppercase tracking-wide mb-3">Self check-in</p>
        <h1 className="text-4xl font-semibold text-teal mb-3">How have you been, really?</h1>
        <p className="text-ink/60 text-sm">
          A brief, private reflection tool. Not a diagnosis — just a starting point.
        </p>
      </div>
      <QuizWidget />
    </div>
  )
}
