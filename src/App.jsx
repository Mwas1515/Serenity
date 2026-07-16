import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import CrisisBanner from './components/layout/CrisisBanner.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Chatbot from './components/Chatbot.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Conditions from './pages/Conditions.jsx'
import ConditionDetail from './pages/ConditionDetail.jsx'
import Resources from './pages/Resources.jsx'
import Crisis from './pages/Crisis.jsx'
import Booking from './pages/Booking.jsx'
import Assessment from './pages/Assessment.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <CrisisBanner />
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/conditions/:id" element={<ConditionDetail />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/crisis" element={<Crisis />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <Chatbot />
    </div>
  )
}
