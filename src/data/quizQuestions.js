// A general, non-diagnostic wellness check-in.
// Answers are scored 0-3 (Not at all -> Nearly every day), mirroring common
// self-report screening formats used in mental health care.

export const quizQuestions = [
  'Over the last two weeks, how often have you felt down or had little interest in things you usually enjoy?',
  'How often have you had trouble falling asleep, staying asleep, or sleeping too much?',
  'How often have you felt tired or had little energy?',
  'How often have you had trouble concentrating on everyday tasks?',
  'How often have you felt nervous, anxious, or on edge?',
  'How often have you had trouble controlling worry once it starts?',
  'How often have you felt irritable or easily frustrated?',
]

export const quizOptions = [
  { label: 'Not at all', value: 0 },
  { label: 'Several days', value: 1 },
  { label: 'More than half the days', value: 2 },
  { label: 'Nearly every day', value: 3 },
]

export function getResultBand(score, maxScore) {
  const pct = score / maxScore
  if (pct < 0.25) {
    return {
      label: 'Minimal signs of distress',
      message:
        'What you\'ve shared suggests things feel fairly manageable right now. Regular check-ins with yourself are still a great habit.',
    }
  }
  if (pct < 0.5) {
    return {
      label: 'Mild signs of distress',
      message:
        'You may be carrying more than usual right now. Talking to a therapist can help before things feel heavier.',
    }
  }
  if (pct < 0.75) {
    return {
      label: 'Moderate signs of distress',
      message:
        'What you\'ve described sounds like a lot to manage alone. We\'d encourage booking a session with one of our clinicians.',
    }
  }
  return {
    label: 'Significant signs of distress',
    message:
      'This sounds really hard right now. Please consider reaching out to a mental health professional soon, and remember support is available any time you need it.',
  }
}
