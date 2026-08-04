
import React, { useState } from 'react'
import logo from './logo.png'

const projects = [
  {
    id: 'alkebula',
    tag: 'EdTech Platform',
    title: 'The Alkebula School',
    domain: 'alkebulaschool.com',
    url: 'https://alkebulaschool.com',
    desc: 'Premium online tutoring marketplace for Cambridge, Edexcel, A-Level, IB & homeschool families. Parent accounts, tutor matching, bookings, lesson records and global access built for scale.',
    stack: ['Next.js','Supabase','Tailwind','Parent Dashboard'],
    gradient: 'from-[#7AB8E6] to-[#5A9BD5]',
    category: 'EdTech',
    results: 'Live platform with global families'
  },
  {
    id: 'akashi',
    tag: 'E-commerce / Web App',
    title: 'Akashi Designs',
    domain: 'akashidesigns.com',
    url: 'https://akashidesigns.com',
    desc: 'Instant-download marketplace for architectural house plans - 1000+ CAD & SketchUp files, cart, checkout, instant delivery. $99-$299 products, optimized for conversion.',
    stack: ['WooCommerce','React','Instant Delivery','E-commerce SEO'],
    gradient: 'from-[#E8C268] to-[#D4A853]',
    category: 'E-commerce',
    results: '$99-$299 avg order, instant delivery'
  },
  {
    id: 'sunscape',
    tag: 'Booking Website + SEO',
    title: 'Sunscape Car Rentals',
    domain: 'sunscape.co.ke',
    url: 'https://sunscape.co.ke',
    desc: 'Premium car hire in Syokimau & JKIA - Mazda CX5, CX8, Prado fleet. Fast WhatsApp bookings to +254722114098, clean premium UI, local SEO dominating Nairobi car hire searches.',
    stack: ['Next.js','WhatsApp API','Local SEO','Booking System'],
    gradient: 'from-[#7AB8E6] to-[#E8C268]',
    category: 'Booking',
    results: 'Top 3 for Nairobi car hire keywords'
  }
]

export default function App(){
  const [filter, setFilter] = useState('All')
  const [menuOpen, setMenuOpen] = useState(false)
  const [toast, setToast] = useState(false)
  const filtered = filter==='All' ? projects : projects.filter(p=>p.category===filter)

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-black/[0.06]">
        <div className="max-w-[1220px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0F1A2E] flex items-center justify-center p-2">
              <img src={logo} alt="Sterling Studios" className="w-full h-full object-contain" />
            </div>
            <div className="leading-none">
              <div className="font-bold tracking-tight font-display text-[15px]">STERLING STUDIOS LTD</div>
              <div className="text-[11px] text-black/50 tracking-wide">sterlingstudios.com</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium">
            <a href="#services" className="hover:text-brandBlue transition">Services</a>
            <a href="#work" className="hover:text-brandBlue transition">Work</a>
            <a href="#process" className="hover:text-brandBlue transition">Process</a>
            <a href="#pricing" className="hover:text-brandBlue transition">Pricing</a>
            <a href="#contact" className="bg-brandBlue text-white px-5 py-2.5 rounded-full hover:bg-[#5AA0C8] transition shadow-[0_4px_16px_rgba(122,184,230,0.35)]">Start Project</a>
          </nav>
          <button onClick={()=>setMenuOpen(!menuOpen)} className="md:hidden w-9 h-9 rounded-full border flex items-center justify-center">☰</button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t bg-white px-6 py-4 space-y-3 text-sm">
            <a href="#services" onClick={()=>setMenuOpen(false)} className="block py-2">Services</a>
            <a href="#work" onClick={()=>setMenuOpen(false)} className="block py-2">Work</a>
            <a href="#process" onClick={()=>setMenuOpen(false)} className="block py-2">Process</a>
            <a href="#contact" onClick={()=>setMenuOpen(false)} className="block mt-2 bg-brandBlue text-white px-4 py-3 rounded-full text-center font-semibold">Start Project</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F8FBFF]">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-[#7AB8E6]/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-32 -left-24 w-[500px] h-[500px] bg-[#E8C268]/25 rounded-full blur-[80px]" />
        </div>
        <div className="max-w-[1220px] mx-auto px-6 py-20 md:py-28 relative grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-black/10 rounded-full px-3.5 py-1.5 text-[12px] font-medium shadow-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> Available for Q3 2026 • Nairobi HQ + Global Remote
            </div>
            <h1 className="font-display font-bold text-[40px] md:text-[58px] leading-[0.95] tracking-tight mt-6">
              We Build Websites, Web Apps & <span className="bg-gradient-to-r from-[#7AB8E6] to-[#E8C268] bg-clip-text text-transparent">AI Products That Grow</span> Your Business
            </h1>
            <p className="mt-5 text-[17px] leading-[1.6] text-black/65 max-w-[60ch]">
              Sterling Studios Ltd is a product studio at <strong className="text-black">8th Floor, Pinetree Plaza, Kaburu Drive Off Ngong Rd, Nairobi</strong>. 
              We build high-converting websites, scalable web apps, Android & iOS apps, digital marketing systems, and AI-powered products for ambitious brands.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="bg-brandBlue text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#5AA0C8] transition shadow-[0_8px_24px_rgba(122,184,230,0.35)]">Start Your Project →</a>
              <a href="https://wa.me/254722114098" target="_blank" rel="noreferrer" className="bg-[#E8C268] text-[#0F1A2E] px-7 py-3.5 rounded-full font-semibold hover:bg-[#D4AF5A] transition flex items-center gap-2">
                <span>💬</span> WhatsApp +254722114098
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-black/10 pt-6 max-w-[560px]">
              <div><div className="font-display font-bold text-[20px]">3</div><div className="text-[12px] text-black/60 leading-tight">Live Platforms Shipped</div></div>
              <div><div className="font-display font-bold text-[20px]">100%</div><div className="text-[12px] text-black/60 leading-tight">Client-Owned Code on Vercel</div></div>
              <div><div className="font-display font-bold text-[20px]">M-Pesa</div><div className="text-[12px] text-black/60 leading-tight">+ Stripe + WhatsApp Ready</div></div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-[28px] shadow-[0_24px_64px_rgba(15,26,46,0.08)] border border-black/5 p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-1.5"><span className="w-3 h-3 rounded-full bg-red-400"/><span className="w-3 h-3 rounded-full bg-yellow-400"/><span className="w-3 h-3 rounded-full bg-green-400"/></div>
                <div className="text-[12px] text-black/40 ml-2">sterlingstudios.com — build log</div>
              </div>
              <pre className="text-[13px] leading-7 font-mono text-[#0F1A2E]/80 bg-[#F8FBFF] rounded-xl p-4 overflow-x-auto">
<span className="text-[#7AB8E6] font-bold">const</span> sterling = {'{'}
  {'\n'}  domain: <span className="text-[#D4A853]">'sterlingstudios.com'</span>,
  {'\n'}  email: <span className="text-[#D4A853]">'info@sterlingstudios.com'</span>,
  {'\n'}  hq: <span className="text-[#D4A853]">'Pinetree Plaza, Ngong Rd'</span>,
  {'\n'}  whatsapp: <span className="text-[#D4A853]">'+254722114098'</span>,
  {'\n'}  stack: [<span className="text-[#7AB8E6]">'Next.js','Flutter','Node','Python AI'</span>],
  {'\n'}  focus: <span className="text-[#7AB8E6]">'speed • SEO • conversion'</span>
  {'\n'}{'}'}
  {'\n\n'}<span className="text-black/30">// Ship fast. Iterate faster.</span>
  {'\n'}sterling.<span className="text-[#7AB8E6] font-bold">launch</span>()
              </pre>
              <div className="mt-4 flex items-center gap-2 text-[12px] text-black/60">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> Deploying to Vercel • sterlingstudios.com
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-[1220px] mx-auto px-6 py-24">
        <div className="max-w-[720px]">
          <div className="text-[12px] tracking-widest font-semibold text-brandBlue">WHAT WE DO</div>
          <h2 className="font-display text-[32px] md:text-[46px] font-bold tracking-tight leading-[1.05] mt-3">Full-stack product studio — from idea to launch to growth</h2>
          <p className="text-black/60 mt-4">We design, build and market products that users love and Google ranks.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {[
            {t:'Websites', d:'Lightning-fast, SEO-optimized websites that convert visitors to inquiries.', list:['Next.js + Tailwind','SEO Score 95+','M-Pesa / Stripe / PayPal','WhatsApp Integration'], accent:'blue'},
            {t:'Web Apps', d:'Scalable SaaS, dashboards, marketplaces and admin panels.', list:['React, Next.js, Supabase','Auth, Roles, Payments','APIs & Automations','Vercel Deploy'], accent:'gold'},
            {t:'Android & iOS Apps', d:'Flutter & React Native apps shipped to Play Store & App Store.', list:['Cross-platform','Push, Maps, Camera','M-Pesa SDK','Store Deployment'], accent:'blue'},
            {t:'Digital Marketing', d:'SEO, Google Ads, Meta Ads & content that drives bookings.', list:['Local SEO Nairobi','Google Ads + Meta','WhatsApp Marketing','Content + Analytics'], accent:'gold'},
            {t:'AI Apps', d:'Custom AI chatbots, automations, AI search & OpenAI integrations.', list:['AI Chatbots','Workflow Automation','AI Search','OpenAI API'], accent:'blue'},
          ].map(s=>(
            <div key={s.t} className="group rounded-[20px] border border-black/10 p-7 hover:border-brandBlue/40 hover:shadow-[0_12px_32px_rgba(122,184,230,0.15)] transition bg-white">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${s.accent==='blue'?'bg-[#7AB8E6]/15 text-[#3A8CC0]':'bg-[#E8C268]/20 text-[#A37E2A]'}`}>✦</div>
              <h3 className="font-display font-bold text-[18px] mt-4">{s.t}</h3>
              <p className="text-[14px] text-black/60 mt-2 leading-relaxed">{s.d}</p>
              <ul className="mt-4 space-y-1.5">{s.list.map(l=><li key={l} className="text-[12px] text-black/70 flex gap-2"><span className="text-brandBlue">•</span>{l}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="bg-brandLight border-y border-black/5">
        <div className="max-w-[1220px] mx-auto px-6 py-20">
          <h2 className="font-display font-bold text-[26px]">How we ship in 4 weeks from Pinetree Plaza</h2>
          <div className="grid md:grid-cols-4 gap-5 mt-8 relative">
            <div className="hidden md:block absolute top-[28px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-brandBlue to-brandGold" />
            {[
              {n:'01',t:'Discovery',d:'Goals, users, revenue model. We map your product at our Nairobi studio.'},
              {n:'02',t:'Design',d:'Figma UI, prototype, copy that converts.'},
              {n:'03',t:'Build',d:'Next.js/Flutter, M-Pesa, SEO, QA on real devices.'},
              {n:'04',t:'Launch & Grow',d:'Deploy to Vercel, analytics, ads, iterate weekly.'},
            ].map(p=>(
              <div key={p.n} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm relative">
                <div className="w-8 h-8 rounded-full bg-brandNavy text-white flex items-center justify-center text-xs font-bold">{p.n}</div>
                <div className="font-semibold mt-3">{p.t}</div>
                <div className="text-[13px] text-black/60 mt-1 leading-relaxed">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH MARQUEE */}
      <div className="overflow-hidden border-y py-4 bg-white">
        <div className="flex gap-8 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...Array(2)].map((_,i)=>(
            <div key={i} className="flex gap-8 items-center">
              {['React','Next.js','Node.js','Python','Flutter','React Native','Supabase','Firebase','AWS','OpenAI','Tailwind','M-Pesa API','Stripe','WhatsApp API'].map(t=>(
                <span key={t} className="text-[13px] font-semibold tracking-wide text-black/40 uppercase">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* WORK */}
      <section id="work" className="bg-brandNavy text-white py-24">
        <div className="max-w-[1220px] mx-auto px-6">
          <div className="flex flex-wrap justify-between gap-4 items-end">
            <div>
              <div className="text-[12px] tracking-widest text-brandGold">SELECTED WORK</div>
              <h2 className="font-display text-[34px] md:text-[48px] font-bold tracking-tight leading-[0.95] mt-2">Built and shipped<br/>by Sterling Studios</h2>
            </div>
            <div className="flex gap-2">
              {['All','EdTech','E-commerce','Booking'].map(c=>(
                <button key={c} onClick={()=>setFilter(c)} className={`px-4 py-2 rounded-full text-[13px] border transition ${filter===c?'bg-brandGold text-brandNavy border-brandGold font-semibold':'border-white/15 hover:border-brandGold/50 text-white/70'}`}>{c}</button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {filtered.map(p=>(
              <div key={p.id} className="rounded-[24px] overflow-hidden border border-white/10 bg-white/[0.04] hover:border-brandGold/40 hover:bg-white/[0.06] transition group">
                <div className={`h-[220px] bg-gradient-to-br ${p.gradient} p-6 flex flex-col justify-between text-brandNavy`}>
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] bg-black/15 backdrop-blur px-3 py-1 rounded-full font-semibold tracking-wide text-white">{p.tag}</span>
                    <span className="text-[11px] bg-white/90 px-2.5 py-1 rounded-full">{p.results}</span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-[22px] leading-tight text-white">{p.title}</div>
                    <div className="text-[13px] text-white/80">{p.domain}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[14px] text-white/65 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.stack.map(s=><span key={s} className="text-[11px] bg-white/10 border border-white/10 rounded-full px-2.5 py-1 text-white/70">{s}</span>)}
                  </div>
                  <a href={p.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex bg-white text-brandNavy px-4 py-2 rounded-full text-[13px] font-semibold group-hover:bg-brandGold transition">Visit Live →</a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-[13px] text-white/50">Want to be next? <a href="#contact" className="text-brandGold underline">Start your project</a> — we reply in 2 hours on WhatsApp.</div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-[1220px] mx-auto px-6 py-24">
        <h2 className="font-display text-[34px] md:text-[46px] font-bold tracking-tight">Straight pricing, no surprises</h2>
        <p className="text-black/60 mt-2">KES and USD pricing • Pay via M-Pesa, Bank, Stripe or PayPal • Invoices from Sterling Studios Ltd</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="rounded-[24px] border border-black/10 p-8">
            <div className="font-bold">Starter — Website</div>
            <div className="mt-2"><span className="text-[32px] font-bold font-display">85K KES</span><span className="text-black/50 text-sm"> / $800</span></div>
            <ul className="mt-6 space-y-2 text-[13px] text-black/70">
              <li>• 5-page Next.js website</li><li>• SEO + Speed 95+</li><li>• M-Pesa + WhatsApp + Forms</li><li>• 2 weeks delivery</li><li>• Hosting on Vercel</li>
            </ul>
            <a href="#contact" className="mt-6 block text-center border border-black/15 rounded-full py-3 text-[14px] font-semibold hover:bg-black hover:text-white transition">Choose Starter</a>
          </div>
          <div className="rounded-[24px] border-2 border-brandBlue p-8 shadow-[0_16px_40px_rgba(122,184,230,0.18)] relative bg-white">
            <div className="absolute -top-3 left-6 bg-brandBlue text-white text-[11px] px-3 py-1 rounded-full font-semibold">Most Popular</div>
            <div className="font-bold">Growth — Web App + Marketing</div>
            <div className="mt-2"><span className="text-[32px] font-bold font-display">280K KES</span><span className="text-black/50 text-sm"> / $2,500</span></div>
            <ul className="mt-6 space-y-2 text-[13px] text-black/70">
              <li>• Web App + Dashboard</li><li>• Auth, Payments, Roles</li><li>• SEO + Google Ads setup</li><li>• WhatsApp API + M-Pesa</li><li>• 4 weeks + growth support</li>
            </ul>
            <a href="#contact" className="mt-6 block text-center bg-brandBlue text-white rounded-full py-3 text-[14px] font-semibold hover:bg-[#5AA0C8] transition">Choose Growth</a>
          </div>
          <div className="rounded-[24px] bg-brandNavy text-white p-8">
            <div className="font-bold">Scale — Full Product</div>
            <div className="mt-2 text-[32px] font-bold font-display">Custom</div>
            <ul className="mt-6 space-y-2 text-[13px] text-white/70">
              <li>• Web + Mobile + AI</li><li>• Custom AI + Automations</li><li>• Full growth team (SEO/Ads)</li><li>• Priority support from Nairobi HQ</li>
              <li>• Location: Pinetree Plaza</li>
            </ul>
            <a href="https://wa.me/254722114098" target="_blank" className="mt-6 block text-center bg-brandGold text-brandNavy rounded-full py-3 text-[14px] font-bold hover:bg-[#D4AF5A] transition">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-brandLight border-t">
        <div className="max-w-[1220px] mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-[36px] md:text-[44px] font-bold leading-[0.95] tracking-tight">Let's build something amazing at <span className="text-brandBlue">sterlingstudios.com</span></h2>
            <p className="text-black/60 mt-4">We reply within 2 hours on WhatsApp. Prefer email? <a href="mailto:info@sterlingstudios.com" className="text-brandBlue font-semibold">info@sterlingstudios.com</a></p>
            
            <div className="mt-8 space-y-4 bg-white rounded-2xl p-6 border border-black/5">
              <div className="flex gap-3"><div className="w-8 h-8 rounded-full bg-brandBlue/10 flex items-center justify-center text-sm">📍</div><div><div className="text-[12px] text-black/50 uppercase tracking-wide font-semibold">Headquarters</div><div className="text-[14px] font-medium">8th Floor, Pinetree Plaza, Kaburu Drive Off Ngong Rd, Nairobi, Kenya</div></div></div>
              <div className="flex gap-3"><div className="w-8 h-8 rounded-full bg-brandGold/20 flex items-center justify-center text-sm">✉️</div><div><div className="text-[12px] text-black/50 uppercase tracking-wide font-semibold">Email</div><div className="text-[14px] font-medium"><a href="mailto:info@sterlingstudios.com" className="hover:text-brandBlue">info@sterlingstudios.com</a></div></div></div>
              <div className="flex gap-3"><div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-sm">💬</div><div><div className="text-[12px] text-black/50 uppercase tracking-wide font-semibold">WhatsApp</div><div className="text-[14px] font-medium"><a href="https://wa.me/254722114098" target="_blank" className="hover:text-brandBlue">+254 722 114 098 — Fast replies</a></div></div></div>
              <div className="flex gap-3"><div className="w-8 h-8 rounded-full bg-brandBlue/10 flex items-center justify-center text-sm">🌐</div><div><div className="text-[12px] text-black/50 uppercase tracking-wide font-semibold">Website</div><div className="text-[14px] font-medium">https://sterlingstudios.com</div></div></div>
            </div>
          </div>

          <form onSubmit={(e)=>{e.preventDefault(); setToast(true); setTimeout(()=>setToast(false),4000)}} className="bg-white rounded-[24px] border border-black/10 p-7 shadow-[0_16px_48px_rgba(15,26,46,0.06)]">
            <h3 className="font-display font-bold text-[18px]">Start your project</h3>
            <p className="text-[13px] text-black/60 mt-1">We’ll get back via WhatsApp +254722114098 or info@sterlingstudios.com</p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <input required placeholder="Your Name" className="border border-black/10 rounded-xl px-4 py-3 text-[14px] outline-none focus:border-brandBlue focus:ring-2 focus:ring-brandBlue/20" />
              <input placeholder="Company" className="border border-black/10 rounded-xl px-4 py-3 text-[14px] outline-none focus:border-brandBlue" />
            </div>
            <select className="w-full mt-4 border border-black/10 rounded-xl px-4 py-3 text-[14px] outline-none focus:border-brandBlue">
              <option>Website</option><option>Web App</option><option>Android & iOS App</option><option>AI App</option><option>Digital Marketing</option><option>Full Product (Web + App + AI + Marketing)</option>
            </select>
            <select className="w-full mt-4 border border-black/10 rounded-xl px-4 py-3 text-[14px] outline-none focus:border-brandBlue">
              <option>Budget: 50K-100K KES</option><option>100K-300K KES</option><option>300K+ KES</option><option>$800 - $2,500</option><option>$2,500+</option>
            </select>
            <textarea required placeholder="Tell us about your project, timeline, and goals..." rows={4} className="w-full mt-4 border border-black/10 rounded-xl px-4 py-3 text-[14px] outline-none focus:border-brandBlue" />
            <button className="w-full mt-5 bg-brandBlue text-white py-3.5 rounded-full font-semibold hover:bg-[#5AA0C8] transition shadow-[0_8px_24px_rgba(122,184,230,0.35)]">Send Message →</button>
            {toast && <div className="mt-4 bg-brandNavy text-white text-[13px] px-4 py-3 rounded-xl text-center">✅ Message sent! We’ll reply within 2 hours on WhatsApp +254722114098 and info@sterlingstudios.com</div>}
            <div className="mt-4 text-[11px] text-black/50 text-center">By sending, you agree to be contacted at +254722114098 and info@sterlingstudios.com</div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brandNavy text-white/70 py-10 border-t border-white/10">
        <div className="max-w-[1220px] mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center p-1.5"><img src={logo} alt="logo" className="object-contain" /></div>
            <div>
              <div className="text-white font-bold text-[14px] font-display">STERLING STUDIOS LTD</div>
              <div className="text-[11px]">sterlingstudios.com • info@sterlingstudios.com</div>
            </div>
          </div>
          <div className="text-[12px] leading-relaxed max-w-[420px]">
            © 2026 Sterling Studios Ltd • 8th Floor, Pinetree Plaza, Kaburu Drive Off Ngong Rd, Nairobi, Kenya<br/>
            WhatsApp: +254722114098 • Building websites, web apps, Android & iOS apps, digital marketing & AI apps.<br/>
            <span className="text-brandGold">Light Blue #7AB8E6 • Gentle Gold #E8C268</span>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a href="https://wa.me/254722114098" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(0,0,0,0.25)] flex items-center justify-center text-white text-[22px] hover:scale-105 transition">💬</a>
    </div>
  )
}
