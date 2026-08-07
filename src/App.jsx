import { useEffect } from 'react'
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import FAQ from './components/FAQ.jsx'
import SEO from './components/SEO.jsx'

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


/*
|--------------------------------------------------------------------------
| Scroll restoration
|--------------------------------------------------------------------------
|
| React Router does not automatically return visitors to the top of a new
| page. This keeps navigation feeling like a polished website rather than
| a single-page application.
|
*/

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [pathname])

  return null
}


/*
|--------------------------------------------------------------------------
| Core page SEO
|--------------------------------------------------------------------------
|
| Home, Blog and individual Blog articles already contain their own SEO
| components. The routes below are therefore the pages that need global
| metadata supplied by App.jsx.
|
*/

const corePageSEO = {
  '/services': {
    title:
      'Web Design, Web Apps & Mobile App Development | Sterling Studios',
    description:
      'Sterling Studios builds professional websites, custom web applications, Android and iOS apps, and digital platforms for businesses, schools, institutions and organisations in Kenya and beyond.',
    canonical: 'https://sterlingstudios.co.ke/services',
  },

  '/work': {
    title:
      'Selected Digital Projects & Client Work | Sterling Studios',
    description:
      'Explore websites, digital marketplaces, education platforms, booking systems and product concepts designed and developed by Sterling Studios.',
    canonical: 'https://sterlingstudios.co.ke/work',
  },

  '/process': {
    title:
      'Our Web & Software Development Process | Sterling Studios',
    description:
      'See how Sterling Studios takes digital projects from discovery and strategy through design, development, testing, launch and ongoing support.',
    canonical: 'https://sterlingstudios.co.ke/process',
  },

  '/pricing': {
    title:
      'Website, Web App & Mobile App Pricing Kenya | Sterling Studios',
    description:
      'Explore indicative Sterling Studios pricing for professional websites, custom web applications, political platforms and Android and iOS applications.',
    canonical: 'https://sterlingstudios.co.ke/pricing',
  },

  '/about': {
    title:
      'About Sterling Studios | Nairobi Web & Software Studio',
    description:
      'Sterling Studios is a Nairobi-based digital studio building professional websites, custom web applications, mobile apps and digital systems for organisations in Kenya and internationally.',
    canonical: 'https://sterlingstudios.co.ke/about',
  },

  '/testimonials': {
    title:
      'Client Experience & Digital Project Trust | Sterling Studios',
    description:
      'Discover how Sterling Studios approaches client partnerships, digital project delivery, ownership, communication and long-term technology relationships.',
    canonical: 'https://sterlingstudios.co.ke/testimonials',
  },

  '/faq': {
    title:
      'Web Design & Software Development FAQs | Sterling Studios',
    description:
      'Answers to common questions about Sterling Studios website development, web applications, mobile apps, project pricing, timelines, ownership, support and payments.',
    canonical: 'https://sterlingstudios.co.ke/faq',
  },

  '/contact': {
    title:
      'Contact Sterling Studios | Start a Digital Project',
    description:
      'Contact Sterling Studios in Nairobi to discuss a professional website, web application, mobile app, digital platform or custom software project.',
    canonical: 'https://sterlingstudios.co.ke/contact',
  },

  '/privacy': {
    title:
      'Privacy Policy | Sterling Studios',
    description:
      'Read the Sterling Studios Privacy Policy covering information collection, project data, third-party services, security and privacy practices.',
    canonical: 'https://sterlingstudios.co.ke/privacy',
  },

  '/terms': {
    title:
      'Terms of Service | Sterling Studios',
    description:
      'Read the Sterling Studios Terms of Service covering projects, pricing, payments, intellectual property, third-party services, support and client responsibilities.',
    canonical: 'https://sterlingstudios.co.ke/terms',
  },
}


function CoreRouteSEO() {
  const { pathname } = useLocation()
  const seo = corePageSEO[pathname]

  if (!seo) {
    return null
  }

  return (
    <SEO
      key={pathname}
      title={seo.title}
      description={seo.description}
      canonical={seo.canonical}
      ogImage="/human_boardroom_main.webp"
    />
  )
}


export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900 antialiased selection:bg-[#0F1F35] selection:text-white">
      {/* ACCESSIBILITY */}
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-[#0F1F35] px-5 py-3 text-[12px] font-bold text-white shadow-xl transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      {/* GLOBAL ROUTE BEHAVIOUR */}
      <ScrollToTop />
      <CoreRouteSEO />

      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main
        id="main-content"
        className="relative min-h-[70vh]"
      >
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />


          {/* SERVICES */}
          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/process"
            element={<Process />}
          />

          <Route
            path="/pricing"
            element={<Pricing />}
          />


          {/* WORK */}
          <Route
            path="/work"
            element={<Work />}
          />


          {/* COMPANY */}
          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/testimonials"
            element={<Testimonials />}
          />

          <Route
            path="/faq"
            element={<FAQ />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />


          {/* BLOG */}
          <Route
            path="/blog"
            element={<Blog />}
          />

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
          <Route
            path="/privacy"
            element={<Privacy />}
          />

          <Route
            path="/terms"
            element={<Terms />}
          />


          {/* FALLBACK */}
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />

        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}