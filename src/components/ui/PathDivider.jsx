// The site's signature motif: a gentle, hand-drawn path line.
// Represents a personal journey. Reused as hero art, section dividers,
// and (in stepped form) as progress indicators in the quiz/booking flows.

export default function PathDivider({ className = '', flip = false }) {
  return (
    <svg
      viewBox="0 0 1200 120"
      className={`w-full h-auto ${flip ? 'scale-y-[-1]' : ''} ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,60 C150,10 300,110 450,60 C600,10 750,110 900,60 C1000,25 1100,90 1200,60"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="path-draw"
      />
    </svg>
  )
}
