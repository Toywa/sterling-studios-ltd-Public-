import SEO from '../components/SEO.jsx'
import { Link } from 'react-router-dom'

const items=[
  {
    name:"James Mwangi",
    firm:"AURORA Wealth Management",
    loc:"Westlands, Nairobi",
    quote:"We had a WordPress site that looked okay on desktop but took 6 seconds on mobile. Our partners in London were embarrassed to share it. HNW clients would call asking if we were still in business because the site felt cheap. David did not just redesign - he sat with us, mapped our partner profiles, understood how wealth clients actually vet firms. Now when we send a proposal, clients reply saying the site feels trustworthy.",
    before:"Slow WordPress, low trust, partners embarrassed to share",
    after:"Clean, fast, partner-owned story that closes HNW enquiries",
    work:"AURORA - 200 plus partner profiles, private wealth positioning"
  },
  {
    name:"Sarah Kiptoo",
    firm:"LuminaPay",
    loc:"Westlands, Nairobi",
    quote:"Our biggest nightmare was M-Pesa callbacks failing silently. A customer would pay, we would not get confirmation, support would get 40 WhatsApp messages. We had no logs, no way to prove payment. David built a full transactions table in Supabase, proper Daraja webhook handling, and a dashboard where we can see every STK, retry failed ones, and auto-mark invoices paid. He even added SMS receipts. For the first time we sleep without worrying about money disappearing.",
    before:"Callback failures, no logs, many support tickets daily",
    after:"Every shilling tracked, support calm, finance can reconcile",
    work:"LuminaPay - fintech dashboard, STK plus C2B plus B2C"
  },
  {
    name:"Brian Mutiso",
    firm:"SokoMart KE",
    loc:"Eastlands, Nairobi",
    quote:"I was doing COD because I did not trust online payments. Riders would be called, customer changes mind, we lose fuel. David convinced me to go M-Pesa-first. He built Till flow that even mama mboga can follow - no confusing paybill steps, just STK push in 8 seconds. He tested it on Tecno, not iPhone. Now repeat customers do not ask COD. They just pay.",
    before:"COD chaos, rider fuel loss, no trust in online checkout",
    after:"Customers pay before dispatch, team self-serves, less phone calls",
    work:"SokoMart - retail checkout, 0.8s load on Tecno"
  },
]

export default function Testimonials(){
  return (
    <div className="bg-white">
      <SEO title="Client Stories - Sterling Studios" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        <div className="text-[11px] font-bold tracking-[0.2em] text-[#D4A017]">CLIENT STORIES</div>
        <h1 className="mt-4 text-[44px] lg:text-[56px] font-extrabold leading-[0.95] tracking-tight">Not just sites.<br/><span className="text-slate-400">Real founder problems, solved.</span></h1>
        <p className="mt-5 text-[14px] leading-7 text-slate-600 max-w-[58ch]">I work WhatsApp-first from Nairobi. Founders tell me what keeps them up - lost leads, failed M-Pesa, slow sites. These are their words, not my pitch.</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-20 space-y-10">
        {items.map(t=>(
          <div key={t.name} className="rounded-[28px] border bg-[#F8FAFC] p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
              <div className="lg:max-w-[62%]">
                <div className="text-[17px] leading-8 font-medium text-[#0F1F35]">"{t.quote}"</div>
                <div className="mt-8 flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0F1F35] text-white flex items-center justify-center text-[12px] font-bold">{t.name[0]}</div>
                  <div><div className="text-[13px] font-bold">{t.name} - {t.firm}</div><div className="text-[11px] text-slate-500">{t.loc} - {t.work}</div></div>
                </div>
              </div>
              <div className="lg:w-[32%] space-y-4">
                <div className="rounded-2xl bg-white border p-5"><div className="text-[11px] font-bold tracking-widest opacity-50">BEFORE</div><div className="mt-2 text-[13px] leading-5 text-slate-600">{t.before}</div></div>
                <div className="rounded-2xl bg-[#0F1F35] text-white p-5"><div className="text-[11px] font-bold tracking-widest opacity-60">AFTER STERLING</div><div className="mt-2 text-[13px] leading-5 text-slate-200">{t.after}</div></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-[24px] bg-[#0F1F35] text-white p-10 flex flex-col lg:flex-row justify-between gap-6">
          <div><div className="text-[20px] font-bold">Have a similar headache?</div><div className="mt-2 text-[13px] text-slate-300 max-w-[40ch]">Tell me what is breaking - slow site, M-Pesa failing, leads not converting. I will reply on WhatsApp in 2 hours with a plain plan.</div></div>
          <Link to="/contact" className="self-start lg:self-center px-6 py-3 rounded-full bg-white text-[#0F1F35] text-[13px] font-bold">Start on WhatsApp</Link>
        </div>
      </div>
    </div>
  )
}
