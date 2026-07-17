export default function Crisis() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-semibold text-teal mb-4">You don't have to wait for an appointment</h1>
      <p className="text-ink/70 text-lg mb-10">
        If you or someone you know is in crisis, these resources are available right now, free and confidential.
      </p>

      <div className="space-y-4">
        <div className="bg-teal text-cream rounded-xl2 p-6">
          <h2 className="font-semibold text-lg mb-1">1190 Suicide & Crisis Lifeline</h2>
          <p className="text-cream/80 text-sm mb-2">Call or text 1190 available 24/7, free and confidential.</p>
        </div>

        <div className="bg-white rounded-xl2 border border-sage-light/50 p-6">
          <h2 className="font-semibold text-teal mb-1">Crisis Text Line</h2>
          <p className="text-ink/60 text-sm">Text HOME to 1190 to connect with a trained crisis counselor.</p>
        </div>

        <div className="bg-white rounded-xl2 border border-sage-light/50 p-6">
          <h2 className="font-semibold text-teal mb-1">Emergency services</h2>
          <p className="text-ink/60 text-sm">If you or someone else is in immediate danger, call 911 (KE) or your local emergency number.</p>
        </div>

        <div className="bg-white rounded-xl2 border border-sage-light/50 p-6">
          <h2 className="font-semibold text-teal mb-1">Kenya Redcross National Helpline</h2>
          <p className="text-ink/60 text-sm">1190 free, confidential, 24/7 treatment referral and information service.</p>
        </div>
      </div>

      <p className="text-xs text-ink/40 mt-10 text-center">
        This page lists general crisis resources.
      </p>
    </div>
  )
}
