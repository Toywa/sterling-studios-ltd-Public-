import { Routes, Route, Navigate } from 'react-router-dom'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import FAQ from './components/FAQ.jsx'

import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Work from './pages/Work.jsx'
import Process from './pages/Process.jsx'
import Pricing from './pages/Pricing.jsx'
import About from './pages/About.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'

import { Privacy, Terms } from './pages/Legal.jsx'

import PostAkashi from './pages/blog/PostAkashi.jsx'
import PostAlkebula from './pages/blog/PostAlkebula.jsx'
import PostSunscape from './pages/blog/PostSunscape.jsx'
import PostDaraja from './pages/blog/PostDaraja.jsx'
import PostLumina from './pages/blog/PostLumina.jsx'
import PostSpeed from './pages/blog/PostSpeed.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header />

      <main className="flex-1">
        <Routes>
          {/* MAIN PUBLIC PAGES */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/process" element={<Process />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />

          {/* BLOG */}
          <Route path="/blog" element={<Blog />} />

          <Route
            path="/blog/building-akashi-designs-marketplace"
            element={<PostAkashi />}
          />

          <Route
            path="/blog/building-alkebula-school-platform"
            element={<PostAlkebula />}
          />

          <Route
            path="/blog/building-sunscape-car-rentals-website"
            element={<PostSunscape />}
          />

          <Route
            path="/blog/m-pesa-daraja-integration-nairobi"
            element={<PostDaraja />}
          />

          <Route
            path="/blog/how-we-built-luminapay-kes-12m"
            element={<PostLumina />}
          />

          <Route
            path="/blog/why-95-lighthouse-speed-matters"
            element={<PostSpeed />}
          />

          {/* LEGAL */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* UNKNOWN ROUTES */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}