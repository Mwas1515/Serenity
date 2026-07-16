export default function Card({ children, className = '' }) {
  return (
    <div
      className={`bg-white rounded-xl2 shadow-sm border border-sage-light/50 p-6 ${className}`}
    >
      {children}
    </div>
  )
}
