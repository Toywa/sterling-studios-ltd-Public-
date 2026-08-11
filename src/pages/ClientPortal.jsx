import { useState } from 'react'
import SEO from '../components/SEO.jsx'

export default function ClientPortal(){
  const [showInvoice,setShowInvoice]=useState(false)

  const downloadInvoice = async () => {
    // npm install jspdf
    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF()
    doc.setFontSize(16); doc.text('Sterlings Studio Limited â€” Invoice', 20, 20)
    doc.setFontSize(11); doc.text('Invoice #: INV-AURORA-001', 20, 30)
    doc.text('Client: AURORA Wealth', 20, 36)
    doc.text('Project: AURORA â€” Strategic Wealth. Elevated.', 20, 42)
    doc.text('Amount: KES 85,000', 20, 52)
    doc.text('Paid: KES 42,500 (50%) via M-Pesa QGH7T8', 20, 58)
    doc.text('Balance: KES 42,500', 20, 64)
    doc.text('M-Pesa Till: 123456 | Paybill: 522522 Acc: 123456', 20, 74)
    doc.text('Thank you for choosing Sterlings Studio!', 20, 90)
    doc.save('Invoice-AURORA-KES-85000.pdf')
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <SEO title="Client Portal â€” AURORA" description="Client portal" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex justify-between"><div><h1 className="text-[28px] font-extrabold">Client Portal â€” AURORA â€¢ 80%</h1><div className="text-[13px] text-slate-500">Secure â€¢ Code: AURORA-80 â€¢ M-Pesa enabled</div></div><button onClick={()=>{localStorage.removeItem('sterling_client'); window.location.href='/client-login'}} className="h-fit px-3 py-1 rounded-full border text-[12px]">Logout</button></div>

        <div className="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
          <div className="bg-white rounded-[20px] border p-6">
            <div className="font-bold">Invoice & M-Pesa Payment</div>
            <div className="mt-4 p-4 rounded-xl bg-slate-50 border text-[13px]">
              <div className="flex justify-between"><span>Total</span><span className="font-bold">KES 85,000</span></div>
              <div className="flex justify-between"><span>Paid 50% â€¢ QGH7T8</span><span className="text-green-600">KES 42,500</span></div>
              <div className="flex justify-between font-bold border-t mt-2 pt-2"><span>Balance</span><span>KES 42,500</span></div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button onClick={()=>alert('STK Push sent! Check phone â€” same flow as /m-pesa-demo')} className="py-3 rounded-full bg-green-500 text-white font-bold text-sm">Pay KES 42,500 M-Pesa â†’</button>
              <button onClick={downloadInvoice} className="py-3 rounded-full border font-bold text-sm">Download PDF Invoice â†“</button>
            </div>
            <div className="mt-3 text-[11px] text-slate-400">PDF generated with jsPDF â€” real invoice for KRA, auto M-Pesa code</div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-[20px] border p-6">
              <div className="font-bold">Project Progress</div>
              <div className="mt-3 h-2 bg-slate-100 rounded-full"><div className="h-2 bg-[#0F1F35] w-[80%] rounded-full"></div></div>
              <div className="mt-3 text-[12px] text-slate-600">80% â€” Build stage â€¢ Staging: aurora.sterling.co.ke â€¢ 95+ Lighthouse</div>
            </div>
            <div className="bg-[#0F1F35] rounded-[20px] p-6 text-white">
              <div className="font-bold">Need help?</div>
              <div className="mt-2 text-[13px] opacity-70">WhatsApp daily updates 9AM & 5PM. Reply in 2h.</div>
              <a href="https://wa.me/254722114098" className="mt-4 inline-flex px-4 py-2 rounded-full bg-white text-[#0F1F35] text-sm font-bold">WhatsApp â†’</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

