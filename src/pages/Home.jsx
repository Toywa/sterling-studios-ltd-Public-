
import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ.jsx'
export default function Home(){
  return (
    <div className="bg-white text-slate-900">
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-14 pb-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border text-[11px] font-bold tracking-widest">EST. NAIROBI • BUILDING FOR AFRICA & GLOBAL</div>
            <h1 className="mt-6 text-[42px] lg:text-[64px] font-extrabold leading-[0.9] tracking-tight">Websites that load in 0.8s.<br/>Apps that scale.<br/><span className="text-slate-400">Built to last.</span></h1>
            <p className="mt-6 text-[16px] leading-7 text-slate-600 max-w-[54ch]">We are Sterling Studios — a team of developers building fast, beautiful, secure products. No WordPress, no templates. We code everything from scratch so it performs, ranks, and converts.</p>
            <div className="mt-8 flex gap-3">
              <Link to="/work" className="px-6 py-3 rounded-full bg-[#0F1F35] text-white text-[13px] font-bold">See our work</Link>
              <Link to="/services" className="px-6 py-3 rounded-full border text-[13px] font-bold">Services →</Link>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-[24px] overflow-hidden border">
              <img src="/human_boardroom_main.webp" alt="Team presenting in Nairobi boardroom" className="w-full h-[320px] object-cover object-top" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[20px] overflow-hidden border">
                <img src="/human_female_founder.webp" alt="Founder" className="w-full h-[180px] object-cover object-top" />
                <div className="p-3 text-[12px]"><div className="font-bold">Founder-led</div><div className="text-slate-500">Real founders using our products</div></div>
              </div>
              <div className="rounded-[20px] overflow-hidden border">
                <img src="/human_team_collab.webp" alt="Team collaborating" className="w-full h-[180px] object-cover object-top" />
                <div className="p-3 text-[12px]"><div className="font-bold">Team-built</div><div className="text-slate-500">Developers in Nairobi</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] border-y py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end flex-wrap gap-4">
            <h2 className="text-[28px] font-extrabold">What we do</h2>
            <Link to="/services" className="text-[13px] font-bold underline">All services →</Link>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-[24px] border bg-white overflow-hidden">
              <img src="/human_cafe_laptop.webp" alt="Website project" className="w-full h-[200px] object-cover object-top" />
              <div className="p-6"><div className="text-[11px] font-bold tracking-widest text-slate-500">WEBSITES</div><div className="mt-2 font-bold">Corporate sites and landing pages that rank and convert. 0.8s load, 95+ Lighthouse.</div></div>
            </div>
            <div className="rounded-[24px] border bg-white overflow-hidden">
              <img src="/human_dev_coding.webp" alt="Web app" className="w-full h-[200px] object-cover object-top" />
              <div className="p-6"><div className="text-[11px] font-bold tracking-widest text-slate-500">WEB APPS</div><div className="mt-2 font-bold">Dashboards, portals, and SaaS with roles, audits, and real-time data.</div></div>
            </div>
            <div className="rounded-[24px] border bg-white overflow-hidden">
              <img src="/human_team_standup.webp" alt="Mobile team" className="w-full h-[200px] object-cover object-top" />
              <div className="p-6"><div className="text-[11px] font-bold tracking-widest text-slate-500">MOBILE APPS</div><div className="mt-2 font-bold">Android and iOS apps, offline-first, one codebase. Native feel.</div></div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  )
}
