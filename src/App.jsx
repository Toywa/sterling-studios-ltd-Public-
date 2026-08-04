import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Work from './pages/Work.jsx'
import Process from './pages/Process.jsx'
import Pricing from './pages/Pricing.jsx'
import Contact from './pages/Contact.jsx'
import Aurora from './pages/Aurora.jsx'
import LuminaPay from './pages/LuminaPay.jsx'
import SokoMart from './pages/SokoMart.jsx'
import MpesaDemo from './pages/MpesaDemo.jsx'
import Blog from './pages/Blog.jsx'
import PostDaraja from './pages/blog/PostDaraja.jsx'
import PostLumina from './pages/blog/PostLumina.jsx'
import PostSpeed from './pages/blog/PostSpeed.jsx'
import Admin from './pages/Admin.jsx'
import ClientPortal from './pages/ClientPortal.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import ClientLogin from './pages/ClientLogin.jsx'
import AuthGuard, { ClientGuard } from './components/AuthGuard.jsx'
import { Routes, Route } from 'react-router-dom'

export default function App(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/aurora" element={<Aurora />} />
        <Route path="/work/luminapay" element={<LuminaPay />} />
        <Route path="/work/sokomart" element={<SokoMart />} />
        <Route path="/process" element={<Process />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/m-pesa-demo" element={<MpesaDemo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/m-pesa-daraja-integration-nairobi" element={<PostDaraja />} />
        <Route path="/blog/how-we-built-luminapay-kes-12m" element={<PostLumina />} />
        <Route path="/blog/why-95-lighthouse-speed-matters" element={<PostSpeed />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AuthGuard><Admin /></AuthGuard>} />
        <Route path="/client-login" element={<ClientLogin />} />
        <Route path="/client" element={<ClientGuard><ClientPortal /></ClientGuard>} />
      </Routes>
      <Footer/>
      <a href="https://wa.me/254722114098" className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg text-2xl z-50">💬</a>
    </div>
  )
}
