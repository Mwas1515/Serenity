import { useState } from 'react'
import { Link } from 'react-router-dom'
import { quizQuestions, quizOptions, getResultBand } from '../data/quizQuestions.js'
import PathDivider from './ui/PathDivider.jsx'

export default function QuizWidget() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [done, setDone] = useState(false)

  const maxScore = quizQuestions.length * 3
  const score = answers.reduce((a, b) => a + b, 0)

  function selectAnswer(value) {
    const next = [...answers]
    next[current] = value
    setAnswers(next)

    if (current < quizQuestions.length - 1) {
      setCurrent(current + 1)
    } else {
      setDone(true)
    }
  }

  function restart() {
    setCurrent(0)
    setAnswers([])
    setDone(false)
  }

  if (done) {
    const result = getResultBand(score, maxScore)
    return (
      <div className="max-w-xl mx-auto bg-white rounded-xl2 shadow-sm border border-sage-light/50 p-8 text-center">
        <h2 className="text-2xl font-semibold text-teal mb-2">{result.label}</h2>
        <p className="font-mono text-sm text-gold mb-4">{score} / {maxScore}</p>
        <p className="text-ink/70 mb-6">{result.message}</p>

        <div className="bg-sage-light/30 rounded-lg p-4 text-sm text-ink/60 mb-6">
          This check-in is not a diagnosis. It's a starting point for a conversation with a licensed
          professional. If you're in crisis, please see our{' '}
          <Link to="/crisis" className="text-teal underline">crisis resources</Link>.
        </div>

        <div className="flex gap-3 justify-center">
          <button onClick={restart} className="px-5 py-2 rounded-full border border-teal text-teal text-sm">
            Retake
          </button>
          <Link
            to="/booking"
            className="px-5 py-2 rounded-full bg-teal text-cream text-sm font-medium hover:bg-teal-light"
          >
            Book a Session
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto">
      <div className="text-sm font-mono text-gold mb-2 text-center">
        Question {current + 1} of {quizQuestions.length}
      </div>
      <div className="text-teal/30 mb-6">
        <PathDivider className="h-6" />
      </div>

      <div className="bg-white rounded-xl2 shadow-sm border border-sage-light/50 p-8">
        <h2 className="text-xl font-medium text-ink mb-6">{quizQuestions[current]}</h2>
        <div className="space-y-2">
          {quizOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => selectAnswer(opt.value)}
              className="w-full text-left px-4 py-3 rounded-lg border border-sage-light hover:border-teal hover:bg-sage-light/30 transition-colors"
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
