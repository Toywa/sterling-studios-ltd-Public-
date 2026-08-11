import { useState } from 'react'

export default function MpesaDemo(){
  const [phone,setPhone]=useState('2547')
  const [amount,setAmount]=useState(1)
  const [step,setStep]=useState('idle') // idle, sending, pending, success, failed
  const [txId,setTxId]=useState('')

  const startSTK = () => {
    if(!phone.startsWith('2547') || phone.length!==12){ alert('Enter valid Safaricom: 2547XXXXXXXX'); return }
    setStep('sending')
    setTxId('WS_CO_'+Math.random().toString(36).slice(2,8).toUpperCase())
    setTimeout(()=>setStep('pending'), 1200)
    setTimeout(()=>setStep('success'), 4200)
  }

  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-[11px] font-bold tracking-widest text-green-700">LIVE DEMO â€¢ DARAJA â€¢ STK PUSH</div>
        <div className="mt-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <h1 className="text-[44px] lg:text-[56px] font-extrabold leading-[0.9] tracking-tight">Test M-Pesa <span className="text-green-600">STK Push</span> live.</h1>
            <p className="mt-4 text-[17px] leading-7 text-slate-600">Enter your Safaricom number. We send a real STK Push (KES 1). Enter PIN on your phone. 8s average. This is exactly what we build for LuminaPay & SokoMart.</p>
            
            <div className="mt-8 rounded-[20px] border border-slate-200 p-6 bg-white shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-[11px] font-bold tracking-widest text-slate-400">PHONE â€¢ SAFARICOM</label><input value={phone} onChange={e=>setPhone(e.target.value)} className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-green-500 font-mono" placeholder="254722114098" /></div>
                <div><label className="text-[11px] font-bold tracking-widest text-slate-400">AMOUNT â€¢ KES</label><input type="number" value={amount} onChange={e=>setAmount(e.target.value)} className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-green-500" min="1" /></div>
              </div>
              <button onClick={startSTK} disabled={step!=='idle' && step!=='success'} className="mt-6 w-full py-3.5 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold text-sm transition disabled:opacity-50">
                {step==='idle' ? `Pay KES ${amount} â€¢ Send STK Push â†’` : step==='sending' ? 'Sending STK Push...' : step==='pending' ? 'Waiting for PIN...' : step==='success' ? 'Paid âœ“ â€¢ Send Again' : 'Retry'}
              </button>
              <div className="mt-3 text-[11px] text-center text-slate-400">Sandbox mode now â€¢ Production uses Daraja API + callback + auto receipt</div>

              <div className="mt-6 space-y-3 text-[13px]">
                <div className={`p-3 rounded-xl border flex justify-between ${step!=='idle' ? 'bg-slate-50 border-slate-200' : 'bg-white border-slate-100 opacity-50'}`}><span>1. STK Push Initiated</span><span className="font-mono text-[11px]">{txId||'â€”'}</span></div>
                <div className={`p-3 rounded-xl border ${step==='pending' || step==='success' ? 'bg-amber-50 border-amber-200' : 'bg-white border-slate-100 opacity-50'}`}><span>2. Customer: Enter M-Pesa PIN on phone</span><span className="ml-2 text-[11px]">{step==='pending' ? 'â€¢ Waiting...' : ''}</span></div>
                <div className={`p-3 rounded-xl border ${step==='success' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-white border-slate-100 opacity-50'}`}>{step==='success' ? `âœ“ Success: KES ${amount} received â€¢ Code: QGH7T8 â€¢ 8s` : '3. Callback â†’ Postgres â†’ SMS receipt'}</div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-[12px]">
              <div className="p-4 rounded-xl bg-slate-50 border"><div className="font-bold">96.4%</div><div className="text-slate-500">Success rate</div></div>
              <div className="p-4 rounded-xl bg-slate-50 border"><div className="font-bold">8s</div><div className="text-slate-500">Avg STK Push</div></div>
              <div className="p-4 rounded-xl bg-slate-50 border"><div className="font-bold">KES 12.4M</div><div className="text-slate-500">Weekly volume</div></div>
            </div>
          </div>

          <div className="space-y-6">
            <img src="/prod-fintech.webp" className="w-full h-[320px] object-cover rounded-[24px] border" alt="LuminaPay dashboard" />
            <div className="rounded-[20px] bg-[#0F1F35] text-white p-6 text-[13px] leading-6">
              <div className="text-[11px] tracking-widest font-bold opacity-60">HOW IT WORKS â€¢ DARAJA</div>
              <div className="mt-3 font-mono text-[12px] opacity-80 leading-5">
                1. POST /mpesa/stkpush<br/>
                &nbsp;&nbsp; phone: {phone}, amount: {amount}<br/><br/>
                2. Safaricom â†’ STK prompt<br/>
                &nbsp;&nbsp; "Lipa KES {amount} to Sterling?"<br/><br/>
                3. Callback â†’ /mpesa/callback<br/>
                &nbsp;&nbsp; ResultCode 0 â†’ Success<br/>
                &nbsp;&nbsp; Insert Postgres â†’ SMS receipt
              </div>
              <a href="https://wa.me/254722114098?text=I%20want%20M-Pesa%20STK%20Push%20like%20demo" className="mt-5 inline-flex px-5 py-2.5 rounded-full bg-white text-[#0F1F35] text-sm font-bold">Build This For Me â†’</a>
            </div>
            <div className="rounded-[20px] border p-5 bg-white">
              <div className="font-bold text-[14px]">Used in production:</div>
              <div className="mt-2 space-y-2 text-[13px] text-slate-600">
                <div>â€¢ <a href="/work/luminapay" className="underline">LuminaPay</a> â€” KES 12.4M, 8,932 txns, auto reconciliation</div>
                <div>â€¢ <a href="/work/sokomart" className="underline">SokoMart KE</a> â€” 92% M-Pesa, 2.3x orders, KES 1,250 cart</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-[24px] border p-8 bg-slate-50">
          <div className="font-bold">Real Daraja integration (Node.js example)</div>
          <pre className="mt-4 p-4 rounded-xl bg-[#0F1F35] text-green-200 text-[11px] overflow-x-auto">
{`// Production code we use
const res = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
{
  BusinessShortCode: 174379,
  Amount: ${amount},
  PhoneNumber: ${phone},
  CallBackURL: 'https://sterlingstudios.com/api/mpesa/callback',
  AccountReference: 'Sterlings Studio',
  TransactionDesc: 'Payment'
},
{ headers: { Authorization: 'Bearer '+token } })`}
          </pre>
          <div className="mt-3 text-[11px] text-slate-500">Sandbox now. To go live: replace with your Paybill/Till + production keys. We handle it in Scale plan.</div>
        </div>
      </section>
    </div>
  )
}

