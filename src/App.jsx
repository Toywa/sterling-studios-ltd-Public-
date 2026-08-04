import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Work from './pages/Work.jsx'
import Process from './pages/Process.jsx'
import Pricing from './pages/Pricing.jsx'
import Contact from './pages/Contact.jsx'
import { Routes, Route } from 'react-router-dom'

export default function App(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/process" element={<Process/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
      <a href="https://wa.me/254722114098" className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg text-2xl">💬</a>
    </div>
  )
}
