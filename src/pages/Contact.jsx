export default function Contact(){
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[12px] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          Contact • Reply in 2 hours • Nairobi HQ
        </div>
        <h1 className="mt-6 text-[40px] lg:text-[56px] font-extrabold leading-[0.95] tracking-tight">
          Let's build <span className="text-sterlingBlue">your next product</span> from Pinetree Plaza.
        </h1>
        <p className="mt-4 text-[17px] leading-7 text-slate-600 max-w-[640px]">
          8th Floor, Pinetree Plaza, Kaburu Dr, Off Ngong Rd, Nairobi. +254722114098 • info@sterlingstudios.com. Invoices from Sterling Studios Ltd.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
        {/* Left: Info */}
        <div className="space-y-6">
          <div className="rounded-[20px] border border-slate-200 p-6 bg-[#FBFDFF]">
            <div className="font-bold">Visit HQ</div>
            <div className="mt-2 text-[14px] leading-6 text-slate-700">
              Sterling Studios Ltd<br/>
              8th Floor, Pinetree Plaza<br/>
              Kaburu Dr, Off Ngong Rd<br/>
              Nairobi, Kenya
            </div>
            <a href="https://maps.google.com/?q=Pinetree+Plaza+Kaburu+Dr+Nairobi" target="_blank" className="mt-4 inline-block text-[13px] font-semibold underline">Open in Google Maps →</a>
          </div>

          <div className="rounded-[20px] border border-slate-200 p-6">
            <div className="font-bold">Contact Direct</div>
            <div className="mt-3 space-y-3 text-[14px]">
              <div className="flex justify-between"><span className="text-slate-500">WhatsApp / Call</span><a href="https://wa.me/254722114098" className="font-semibold">+254722114098</a></div>
              <div className="flex justify-between"><span className="text-slate-500">Email</span><a href="mailto:info@sterlingstudios.com" className="font-semibold">info@sterlingstudios.com</a></div>
              <div className="flex justify-between"><span className="text-slate-500">Hours</span><span className="font-medium">Mon-Sat, 9AM-6PM EAT</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Payments</span><span className="font-medium">M-Pesa • Bank • Stripe • PayPal</span></div>
            </div>
            <a href="https://wa.me/254722114098" className="mt-6 w-full inline-flex justify-center px-5 py-3 rounded-full bg-green-500 text-white font-bold text-sm">Chat on WhatsApp — 2h Reply</a>
          </div>

          <div className="rounded-[20px] bg-sterlingNavy p-6 text-white">
            <div className="text-[11px] tracking-widest opacity-60 font-bold">NEXT SLOT</div>
            <div className="mt-2 font-bold leading-tight">We take 3 projects/month. Kickoff Monday. Fixed price, 2-6 weeks, daily updates.</div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="rounded-[24px] border border-slate-200 p-8 bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.12)]">
          <h3 className="text-[20px] font-bold">Start your project</h3>
          <p className="mt-2 text-[13px] text-slate-500">Fill this, we reply in 2 hours on WhatsApp with fixed quote.</p>

          <form className="mt-6 space-y-4" onSubmit={(e)=>{e.preventDefault(); window.open('https://wa.me/254722114098?text=Hi%20Sterling%20Studios%20-%20I%20want%20to%20start%20a%20project','_blank')}}>
            <div className="grid md:grid-cols-2 gap-4">
              <input required placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-sterlingBlue" />
              <input required placeholder="Phone / WhatsApp" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-sterlingBlue" />
            </div>
            <input required placeholder="Business / Company" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-sterlingBlue" />
            <div className="grid md:grid-cols-2 gap-4">
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white">
                <option>Website That Sells — 85K</option>
                <option>Web App + Dashboard — 280K</option>
                <option>E-commerce + M-Pesa</option>
                <option>Android & iOS App</option>
                <option>AI + Automations</option>
                <option>Custom</option>
              </select>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white">
                <option>Budget: 85K KES</option>
                <option>Budget: 280K KES</option>
                <option>Budget: 85K-280K</option>
                <option>Budget: 300K+ Custom</option>
              </select>
            </div>
            <textarea required placeholder="Tell us about your business, customers, M-Pesa needs..." rows="5" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-sterlingBlue"></textarea>
            <button type="submit" className="w-full px-6 py-3 rounded-full bg-sterlingNavy text-white font-bold text-sm hover:bg-black transition">Send → Get Quote on WhatsApp</button>
            <div className="text-[11px] text-center text-slate-400">By sending, you agree to be contacted on WhatsApp. No spam. Invoices from Sterling Studios Ltd.</div>
          </form>
        </div>
      </section>
    </div>
  )
}
