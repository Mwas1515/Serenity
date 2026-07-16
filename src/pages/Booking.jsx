import BookingCalendar from '../components/BookingCalendar.jsx'

export default function Booking() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <p className="text-gold font-mono text-sm uppercase tracking-wide mb-3">Get started</p>
        <h1 className="text-4xl font-semibold text-teal">Book a Session</h1>
      </div>
      <BookingCalendar />
    </div>
  )
}
