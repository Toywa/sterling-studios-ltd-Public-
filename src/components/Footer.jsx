export default function Footer(){
  return (
    <footer className="border-t border-slate-100 bg-[#FBFDFF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-[1.3fr_0.7fr_0.7fr_1fr] gap-10 text-[13px]">
          <div>
            <div className="font-extrabold tracking-tight">STERLING STUDIOS LTD</div>
            <div className="mt-3 text-slate-600 leading-6">We build premium websites, web apps, mobile apps, and AI automations. M-Pesa, Stripe, WhatsApp native. Based in Nairobi, serving clients worldwide.</div>
            <div className="mt-4 flex gap-2"><a href="https://wa.me/254722114098" className="px-4 py-2 rounded-full bg-sterlingNavy text-white text-[12px] font-semibold">WhatsApp</a><a href="mailto:info@sterlingstudios.com" className="px-4 py-2 rounded-full border text-[12px] font-semibold">Email</a></div>
          </div>
          <div>
            <div className="font-bold">Company</div>
            <div className="mt-3 space-y-2 text-slate-600">
              <div><a href="/services" className="hover:text-slate-900">Services</a></div>
              <div><a href="/work" className="hover:text-slate-900">Work</a></div>
              <div><a href="/process" className="hover:text-slate-900">Process</a></div>
              <div><a href="/pricing" className="hover:text-slate-900">Pricing</a></div>
              <div><a href="/contact" className="hover:text-slate-900">Contact</a></div>
            </div>
          </div>
          <div>
            <div className="font-bold">Services</div>
            <div className="mt-3 space-y-2 text-slate-600">
              <div>Website That Converts</div>
              <div>Fintech + M-Pesa Dashboard</div>
              <div>E-commerce + STK Push</div>
              <div>Android & iOS Apps</div>
              <div>AI & Automations</div>
            </div>
          </div>
          <div>
            <div className="font-bold">SEO • Nairobi + Global</div>
            <div className="mt-3 space-y-2 text-slate-500 text-[12px] leading-5">
              <div>Web design Nairobi, M-Pesa Daraja integration, STK Push, Till Paybill, Next.js developer Kenya, Flutter app Nairobi, AI automation Kenya, SaaS dashboard, e-commerce Kenya.</div>
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-1">
                <span>© {new Date().getFullYear()} Sterling Studios Ltd</span>
                <span>+254 722 114 098 • info@sterlingstudios.com</span>
                <span>8th Floor, Pinetree Plaza, Kaburu Dr, Nairobi • M-Pesa • Bank • Stripe • PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
