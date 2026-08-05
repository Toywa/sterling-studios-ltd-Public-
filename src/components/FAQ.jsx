import { useState } from 'react'
const faqs=[
  {
    q:"We already have a site. Why rebuild?",
    a:"Most sites I see in Nairobi look okay but they do not help the business. Wealth firms lose enquiries because the site feels cheap. Fintechs lose real money because Daraja callbacks are not logged. Retailers lose repeat buyers because checkout is confusing. I do not rebuild to make it prettier - I rebuild so when a client lands, they trust you enough to pay via M-Pesa or book a call. That means fast load on Tecno, clear copy about what you actually do, and a flow that works on Safaricom data."
  },
  {
    q:"What is it actually like working with you?",
    a:"WhatsApp-first. Based in Nairobi, I work 8am-9pm EAT. You get a WhatsApp group with me, not an account manager. Daily Loom updates - 2 min video showing what shipped. I use Next.js plus Supabase plus Vercel so you can see live link every day, not just at the end. No long emails, no Figma ping-pong for 3 weeks. If something feels off, you say on WhatsApp, I fix in hours."
  },
  {
    q:"Do you really handle M-Pesa properly, not just demo?",
    a:"Yes - real production. I have done STK Push, C2B, B2C, Transaction Status, Account Balance. The key is not just triggering STK, it is what happens after: callback hits your server, you save to mpesa_transactions table, you verify amount, you auto-mark invoice paid, you send SMS receipt, you allow finance to retry failures. I build that whole chain with RLS in Supabase so finance sees only their transactions."
  },
  {
    q:"Will my clients need to learn anything new?",
    a:"No. That is the point. I design for mama mboga to CEO. For retail, it is just Enter phone - STK - Done in 8 seconds, no paybill steps. For wealth, it is Name - Email - Book call, no 12-field forms. For fintech, it is dashboard where ops can search by phone number and see status immediately, not calling dev at midnight. I test on Tecno Spark, not MacBook Pro."
  },
  {
    q:"What happens after launch?",
    a:"30 days support included. If STK fails, if a partner profile needs edit, if Google Search Console shows error - I fix. After that, most clients stay on small retainer KES 15k-30k for content updates and Daraja monitoring. Source code is yours - I push to your GitHub and Vercel on final 50 percent payment. No lock-in."
  },
  {
    q:"Why Sterling over a big agency in Westlands?",
    a:"Big agency will give you account manager, 3-week proposal, and WordPress with 20 plugins. I give you direct access, ship in 10-14 days, and stack that will not break when you get 10k visits. I answer WhatsApp in 2 hours and I care if your Till rings."
  },
]

export default function FAQ(){
  const [open,setOpen]=useState(0)
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-[11px] font-bold tracking-[0.2em] text-[#D4A017]">FAQ - IN FOUNDERS WORDS</div>
      <h2 className="mt-3 text-[32px] lg:text-[42px] font-extrabold tracking-tight leading-[0.95]">The real questions<br/>before you send 50 percent via Till.</h2>
      <p className="mt-4 text-[13px] leading-6 text-slate-600 max-w-[55ch]">No sales pitch. Just how I work from Nairobi, what I handle, and what happens when something breaks at 9pm.</p>
      <div className="mt-10 rounded-[24px] border divide-y overflow-hidden bg-white">
        {faqs.map((f,i)=>(
          <div key={i} className={open===i?'bg-[#F8FAFC]':''}>
            <button onClick={()=>setOpen(open===i?-1:i)} className="w-full text-left px-6 lg:px-8 py-7 flex justify-between items-start gap-6">
              <span className="text-[15px] font-bold leading-6 pr-6">{f.q}</span>
              <span className="w-8 h-8 rounded-full border bg-white flex items-center justify-center text-[14px] shrink-0">{open===i?'-':'+'}</span>
            </button>
            {open===i&&<div className="px-6 lg:px-8 pb-8 text-[13px] leading-7 text-slate-600 max-w-[68ch]">{f.a}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
