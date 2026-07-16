import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const CRISIS_KEYWORDS = ['suicide', 'kill myself', 'end my life', 'hurt myself', 'self harm', 'self-harm']

const CANNED_RESPONSES = [
  {
    match: ['book', 'appointment', 'schedule'],
    reply: 'I can point you to our booking page — head to "Book a Session" in the menu, or I can take you there now.',
    action: { label: 'Go to booking', to: '/booking' },
  },
  {
    match: ['insurance', 'cost', 'price', 'fee'],
    reply: 'We accept most major insurance plans and offer sliding-scale fees. Our Contact page has full details on pricing.',
    action: { label: 'View contact info', to: '/contact' },
  },
  {
    match: ['anxious', 'anxiety', 'worried', 'panic'],
    reply: 'Anxiety is one of the most common things people come to us for. Our self check-in tool can help you reflect on what you\'re experiencing.',
    action: { label: 'Take the self check-in', to: '/assessment' },
  },
  {
    match: ['sad', 'depress', 'down', 'hopeless'],
    reply: 'I\'m sorry you\'re feeling this way. Our therapists specialize in exactly this. Would you like to see our depression resources or book a session?',
    action: { label: 'Learn about depression support', to: '/conditions/depression' },
  },
  {
    match: ['therapist', 'psychiatrist', 'who works here', 'team'],
    reply: 'You can browse our full clinical team, their specialties, and approach on the About page.',
    action: { label: 'Meet the team', to: '/about' },
  },
]

const DEFAULT_REPLY =
  'I\'m a simple demo assistant, so I can only help with a few common questions — try asking about booking, pricing, or how to find support for anxiety or depression.'

function getResponse(text) {
  const lower = text.toLowerCase()

  if (CRISIS_KEYWORDS.some((k) => lower.includes(k))) {
    return {
      reply:
        'It sounds like you might be going through something really difficult right now. Please reach out to the 988 Suicide & Crisis Lifeline (call or text 988) — they\'re available 24/7. You don\'t have to go through this alone.',
      action: { label: 'See crisis resources', to: '/crisis' },
    }
  }

  const match = CANNED_RESPONSES.find((r) => r.match.some((k) => lower.includes(k)))
  if (match) return { reply: match.reply, action: match.action }

  return { reply: DEFAULT_REPLY }
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi, I\'m the MindPath front-desk assistant. I can help with booking, pricing, or pointing you to the right resource. How can I help?' },
  ])
  const [input, setInput] = useState('')
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  function send() {
    const text = input.trim()
    if (!text) return

    const userMsg = { from: 'user', text }
    const { reply, action } = getResponse(text)
    const botMsg = { from: 'bot', text: reply, action }

    setMessages((m) => [...m, userMsg, botMsg])
    setInput('')
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-80 sm:w-96 h-[28rem] bg-white rounded-xl2 shadow-xl border border-sage-light flex flex-col overflow-hidden">
          <div className="bg-teal text-cream px-4 py-3 flex items-center justify-between">
            <span className="font-medium">MindPath Assistant</span>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-cream/80 hover:text-cream">
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                    m.from === 'user' ? 'bg-teal text-cream' : 'bg-sage-light/40 text-ink'
                  }`}
                >
                  {m.text}
                  {m.action && (
                    <Link to={m.action.to} className="block mt-2 text-xs font-medium text-teal-dark underline">
                      {m.action.label} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="p-3 border-t border-sage-light/60 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Type a message..."
              className="flex-1 rounded-full border border-sage-light px-3 py-2 text-sm outline-none focus:border-teal"
            />
            <button
              onClick={send}
              className="bg-teal text-cream rounded-full px-4 text-sm font-medium hover:bg-teal-light"
            >
              Send
            </button>
          </div>
          <div className="px-4 pb-2 text-[10px] text-ink/40 text-center">
            Demo assistant only — not a substitute for professional care.
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        className="w-14 h-14 rounded-full bg-gold text-teal-dark shadow-lg flex items-center justify-center text-xl hover:scale-105 transition-transform"
      >
        {open ? '✕' : '💬'}
      </button>
    </div>
  )
}
