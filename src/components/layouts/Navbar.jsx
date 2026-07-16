import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/conditions', label: 'Conditions' },
  { to: '/resources', label: 'Resources' },
  { to: '/assessment', label: 'Self Check-In' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-teal font-semibold' : 'text-ink/70 hover:text-teal'
    }`

  return (
    <header className="bg-cream/95 backdrop-blur sticky top-0 z-40 border-b border-sage-light/60">
      <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-teal">
          <span aria-hidden="true">〜</span>
          MindPath
        </NavLink>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <NavLink
            to="/booking"
            className="bg-teal text-cream px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-light transition-colors"
          >
            Book a Session
          </NavLink>
        </div>

        <button
          className="md:hidden p-2 text-teal"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-cream border-t border-sage-light/60 px-4 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/booking"
            onClick={() => setOpen(false)}
            className="mt-2 bg-teal text-cream px-4 py-2 rounded-full text-sm font-medium text-center"
          >
            Book a Session
          </NavLink>
        </div>
      )}
    </header>
  )
}
