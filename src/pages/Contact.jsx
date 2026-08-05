import SEO from '../components/SEO.jsx'
import { useState } from 'react'
export default function Contact(){
  const [sent,setSent]=useState(false)
  return (
    <div className="bg-white">
      <SEO title="Contact - Sterling Studios" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-10 grid lg:grid-cols-[1fr_0.9fr] gap-12">
        <div>
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#D4A017]">CONTACT</div>
          <h1 className="mt-4 text-[44px] lg:text-[56px] font-extrabold leading-[0.95] tracking-tight">Tell me what is breaking.<br/><span className="text-slate-400">I reply in 2h on WhatsApp.</span></h1>
          <p className="mt-5 text-[14px] leading-7 text-slate-600 max-w-[48ch]">No forms that go to spam. WhatsApp-first, Nairobi time 8am-9pm EAT.</p>
          <div className="mt-10 space-y-4 text-[13px]">
            <div><div className="font-bold">WhatsApp - fastest</div><a href="https://wa.me/254722114098" target="_blank" className="underline">+254 722 114 098</a></div>
            <div><div className="font-bold">Email</div><div>hello@sterlingstudios.com</div></div>
            <div><div className="font-bold">Location</div><div>Nairobi, Kenya - IG @davidtoywa, FB davidmtoywa, Threads @davidtoywa</div></div>
          </div>
          <div className="mt-10 rounded-[20px] border bg-[#F8FAFC] p-6 text-[12px]">M-Pesa: Till 543543 - PayBill 400200 - 50 percent upfront.</div>
        </div>
        <div className="rounded-[28px] border p-8">
          {!sent ? (
            <form onSubmit={(e)=>{e.preventDefault(); setSent(true)}} className="space-y-4">
              <input required placeholder="Your name" className="w-full px-4 py-3 rounded-full border text-[13px]" />
              <input required placeholder="WhatsApp or Email" className="w-full px-4 py-3 rounded-full border text-[13px]" />
              <textarea required placeholder="What is breaking?" rows={5} className="w-full px-4 py-3 rounded-[20px] border text-[13px]" />
              <button className="w-full py-3 rounded-full bg-[#0F1F35] text-white text-[13px] font-bold">Send</button>
            </form>
          ) : (<div className="text-center py-12"><div className="text-[16px] font-bold">Received.</div><div className="mt-2 text-[13px] text-slate-600">Reply in 2 hours EAT.</div></div>)}
        </div>
      </div>
    </div>
  )
}
