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
import Solutions from './pages/Solutions.jsx'

import SchoolManagementSystem from './pages/SchoolManagementSystem.jsx'
import SupermarketEcommerceWebsite from './pages/SupermarketEcommerceWebsite.jsx'
import WinesAndSpiritsEcommerceWebsite from './pages/WinesAndSpiritsEcommerceWebsite.jsx'
import PharmacyEcommerceWebsite from './pages/PharmacyEcommerceWebsite.jsx'

import Work from './pages/Work.jsx'
import Process from './pages/Process.jsx'
import Pricing from './pages/Pricing.jsx'
import About from './pages/About.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Contact from './pages/Contact.jsx'

import { Privacy, Terms } from './pages/Legal.jsx'


/*
|--------------------------------------------------------------------------
| Scroll behaviour
|--------------------------------------------------------------------------
|
| Normal page navigation returns visitors to the top.
|
| Hash links such as:
|
| /solutions#school-management
| /solutions#marketplaces
| /solutions#delivery-platforms
|
| scroll directly to the correct section.
|
*/

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.replace('#', ''))

      const timer = window.setTimeout(() => {
        const element = document.getElementById(id)

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        } else {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto',
          })
        }
      }, 80)

      return () => window.clearTimeout(timer)
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [pathname, hash])

  return null
}


/*
|--------------------------------------------------------------------------
| Core page SEO
|--------------------------------------------------------------------------
|
| Home, Services, Solutions, Work and dedicated Solution landing pages
| contain their own SEO metadata.
|
| The routes below receive global metadata from App.jsx.
|
*/

const corePageSEO = {
  '/process': {
    title:
      'Our Web & Software Development Process | Sterlings Studio',
    description:
      'See how Sterlings Studio takes digital projects from discovery and strategy through design, development, testing, launch and ongoing support.',
    canonical: 'https://sterlingsstudio.com/process',
  },

  '/pricing': {
    title:
      'Website, Web App & Mobile App Pricing Kenya | Sterlings Studio',
    description:
      'Explore indicative Sterlings Studio pricing for professional websites, custom web applications, Android and iOS apps, and connected digital platforms.',
    canonical: 'https://sterlingsstudio.com/pricing',
  },

  '/about': {
    title:
      'About Sterlings Studio | Nairobi Web & Software Studio',
    description:
      'Sterlings Studio is a Nairobi-based digital studio building professional websites, custom web applications, mobile apps and digital systems for organisations in Kenya and internationally.',
    canonical: 'https://sterlingsstudio.com/about',
  },

  '/testimonials': {
    title:
      'Client Experience & Digital Project Trust | Sterlings Studio',
    description:
      'Discover how Sterlings Studio approaches client partnerships, digital project delivery, ownership, communication and long-term technology relationships.',
    canonical: 'https://sterlingsstudio.com/testimonials',
  },

  '/faq': {
    title:
      'Web Design & Software Development FAQs | Sterlings Studio',
    description:
      'Answers to common questions about Sterlings Studio website development, web applications, mobile apps, project pricing, timelines, ownership, support and payments.',
    canonical: 'https://sterlingsstudio.com/faq',
  },

  '/contact': {
    title:
      'Contact Sterlings Studio | Start a Digital Project',
    description:
      'Contact Sterlings Studio in Nairobi to discuss a professional website, web application, mobile app, digital platform or custom software project.',
    canonical: 'https://sterlingsstudio.com/contact',
  },

  '/privacy': {
    title:
      'Privacy Policy | Sterlings Studio',
    description:
      'Read the Sterlings Studio Privacy Policy covering information collection, project data, third-party services, security and privacy practices.',
    canonical: 'https://sterlingsstudio.com/privacy',
  },

  '/terms': {
    title:
      'Terms of Service | Sterlings Studio',
    description:
      'Read the Sterlings Studio Terms of Service covering projects, pricing, payments, intellectual property, third-party services, support and client responsibilities.',
    canonical: 'https://sterlingsstudio.com/terms',
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
      <ScrollManager />
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


          {/* SOLUTIONS */}
          <Route
            path="/solutions"
            element={<Solutions />}
          />

          <Route
            path="/solutions/school-management-system"
            element={<SchoolManagementSystem />}
          />

          <Route
            path="/solutions/supermarket-ecommerce-website"
            element={<SupermarketEcommerceWebsite />}
          />

          <Route
            path="/solutions/wines-and-spirits-ecommerce-website"
            element={<WinesAndSpiritsEcommerceWebsite />}
          />

          <Route
            path="/solutions/pharmacy-ecommerce-website"
            element={<PharmacyEcommerceWebsite />}
          />


          {/* PROCESS */}
          <Route
            path="/process"
            element={<Process />}
          />


          {/* PRICING */}
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