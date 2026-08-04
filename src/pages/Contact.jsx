export default function Contact(){
  return (
    <div className="bg-white">
      {/* HERO - human founder */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[11px] tracking-widest font-bold text-slate-400">CONTACT • REPLY IN 2 HOURS • WHATSAPP FIRST</div>
            <h1 className="mt-4 text-[44px] lg:text-[56px] font-extrabold leading-[0.9] tracking-tight">Let's build <span className="text-sterlingBlue">your next product</span>.</h1>
            <p className="mt-5 text-[17px] leading-7 text-slate-600 max-w-[520px]">Fixed price, 14 days to live, daily WhatsApp updates. Tell us your business in one message — we reply in 2 hours with scope and quote.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://wa.me/254722114098?text=Hi%20Sterling%20Studios%20-%20I%20want%20to%20start%20a%20project" className="px-7 py-3 rounded-full bg-green-500 text-white text-sm font-bold hover:bg-green-600 transition">Chat on WhatsApp — 2h Reply</a>
              <a href="mailto:info@sterlingstudios.com" className="px-7 py-3 rounded-full border border-slate-200 text-sm font-semibold">info@sterlingstudios.com</a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 text-[13px]">
              <div className="p-4 rounded-xl bg-slate-50 border"><div className="font-semibold">WhatsApp / Call</div><div className="mt-1 text-slate-600">+254 722 114 098<br/>Mon-Sat 9AM-6PM EAT</div></div>
              <div className="p-4 rounded-xl bg-slate-50 border"><div className="font-semibold">Office</div><div className="mt-1 text-slate-600">8th Floor, Pinetree Plaza<br/>Kaburu Dr, Nairobi</div></div>
            </div>
          </div>
          <div className="relative">
            <img src="/human-founder.webp" className="w-full h-[520px] object-cover rounded-[24px] border border-slate-100" alt="Founder" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-xl border p-4 flex justify-between items-center">
              <div><div className="font-bold text-[13px]">David Toywa • Founder</div><div className="text-[11px] text-slate-500">Replies in 2h on WhatsApp</div></div>
              <a href="https://wa.me/254722114098" className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center">↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
        <div className="rounded-[24px] border border-slate-200 p-8 bg-white">
          <h3 className="text-[20px] font-bold">Start your project</h3>
          <p className="mt-2 text-[13px] text-slate-500">We reply on WhatsApp with fixed quote. No spam.</p>
          <form className="mt-6 space-y-4" onSubmit={(e)=>{e.preventDefault(); const d=new FormData(e.target); const name=d.get('name'); const msg=d.get('msg'); window.open(`https://wa.me/254722114098?text=Hi%20Sterling,%20I'm%20${encodeURIComponent(name)}%20-%20${encodeURIComponent(msg)}`,'_blank')}}>
            <div className="grid grid-cols-2 gap-3">
              <input name="name" required placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-sterlingBlue" />
              <input name="phone" required placeholder="WhatsApp number" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-sterlingBlue" />
            </div>
            <select name="project" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white">
              <option>Website That Converts — From 85K</option>
              <option>Fintech + M-Pesa Dashboard — From 280K</option>
              <option>E-commerce + M-Pesa Checkout — Custom</option>
              <option>Mobile App iOS + Android — Custom</option>
              <option>AI + Automations — Custom</option>
            </select>
            <textarea name="msg" required placeholder="Tell us about your business, customers, M-Pesa needs..." rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-sterlingBlue"></textarea>
            <button type="submit" className="w-full py-3 rounded-full bg-sterlingNavy text-white font-bold text-sm">Send → Get Quote on WhatsApp</button>
            <div className="text-[11px] text-center text-slate-400">M-Pesa • Bank • Stripe • PayPal • Invoices from Sterling Studios Ltd</div>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-[24px] overflow-hidden border border-slate-200 h-[340px] bg-slate-50">
            <iframe 
              title="Pinetree Plaza"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8516!2d36.789!3d-1.295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e0b3e5e5e5%3A0x1!2sPinetree%20Plaza%2C%20Kaburu%20Dr%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
          <div className="rounded-[20px] bg-[#0F1F35] text-white p-6 flex justify-between items-center">
            <div><div className="text-[12px] opacity-60 tracking-widest font-bold">NEXT SLOT</div><div className="mt-1 font-bold">3 projects/month • Kickoff Monday • Fixed price</div></div>
            <a href="https://wa.me/254722114098" className="px-5 py-2.5 rounded-full bg-white text-sterlingNavy text-sm font-bold">Book Slot →</a>
          </div>
        </div>
      </section>
    </div>
  )
}
