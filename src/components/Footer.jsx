export default function Footer(){
  return (
    <footer className="border-t border-slate-100 mt-12 bg-[#FBFDFF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid md:grid-cols-[1.2fr_0.8fr_0.8fr] gap-10 text-sm">
        <div>
          <div className="font-bold text-sterlingNavy">STERLING STUDIOS LTD</div>
          <div className="mt-2 text-slate-600 leading-6">
            We build AI products that grow your business.<br/>
            Websites, web apps, Android & iOS, AI automations.<br/>
            8th Floor, Pinetree Plaza, Kaburu Dr, Off Ngong Rd, Nairobi.
          </div>
          <div className="mt-4 text-slate-500">+254722114098 • info@sterlingstudios.com</div>
        </div>
        <div>
          <div className="font-semibold">Company</div>
          <div className="mt-3 space-y-2 text-slate-600">
            <div><a href="/services">Services</a></div>
            <div><a href="/work">Work</a></div>
            <div><a href="/process">Process</a></div>
            <div><a href="/pricing">Pricing</a></div>
            <div><a href="/contact">Contact</a></div>
          </div>
        </div>
        <div>
          <div className="font-semibold">Legal & Payments</div>
          <div className="mt-3 space-y-2 text-slate-600">
            <div>KES & USD • M-Pesa, Bank, Stripe, PayPal</div>
            <div>Invoices from Sterling Studios Ltd</div>
            <div>Available Q3 2026 • 3 slots/month</div>
            <div className="mt-4 text-xs text-slate-400">© {new Date().getFullYear()} Sterling Studios Ltd</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
