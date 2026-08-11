import SEO from '../../components/SEO.jsx'
export default function PostDaraja(){
  return (
    <div className="bg-white">
      <SEO title="M-Pesa Daraja Integration Nairobi: STK Push Guide 2026 | Sterlings Studio" description="Complete M-Pesa Daraja STK Push integration guide Nairobi. BusinessShortCode, Lipa Na M-Pesa, callback, Postgres, auto SMS receipt. Used for LuminaPay KES 12.4M weekly. By Sterlings Studio." canonical="https://sterlingsstudio.com/blog/m-pesa-daraja-integration-nairobi" ogImage="/prod-fintech.webp" />
      <article className="max-w-3xl mx-auto px-6 lg:px-8 pt-16 pb-20">
        <div className="text-[11px] tracking-widest font-bold text-green-600">M-PESA DARAJA â€¢ NAIROBI â€¢ 2026 GUIDE</div>
        <h1 className="mt-4 text-[36px] lg:text-[44px] font-extrabold leading-[0.95]">M-Pesa Daraja Integration Nairobi: STK Push Guide 2026</h1>
        <div className="mt-4 text-[13px] text-slate-500">By David Toywa â€¢ Founder, Sterlings Studio â€¢ 8 min read â€¢ Updated Jan 2026</div>
        <img src="/prod-fintech.webp" className="mt-8 w-full h-[380px] object-cover rounded-[20px] border" />
        <div className="mt-10 space-y-6 text-[16px] leading-8 text-slate-700">
          <p><b>We built LuminaPay to process KES 12.4M weekly via M-Pesa Daraja.</b> 8,932 transactions, 1,284 active users, 96.4% success, 8s average STK Push. This guide shows exactly how we did it for clients in Nairobi.</p>
          <h2 className="text-[22px] font-bold text-slate-900 mt-10">1. What is Daraja STK Push?</h2>
          <p>Lipa Na M-Pesa Online. Customer enters phone on your site (like SokoMart KE checkout KES 1,250), you trigger STK Push, customer enters PIN on phone, you get callback, you save to Postgres, send SMS receipt via Africa's Talking.</p>
          <h2 className="text-[22px] font-bold text-slate-900 mt-8">2. Requirements (Kenya)</h2>
          <ul className="list-disc pl-6"><li>Paybill or Till (from Safaricom)</li><li>Daraja portal keys: Consumer Key + Secret</li><li>Callback URL: https://yourdomain.co.ke/api/mpesa/callback (must be HTTPS)</li><li>BusinessShortCode: 174379 (sandbox) or your Paybill</li></ul>
          <h2 className="text-[22px] font-bold text-slate-900 mt-8">3. Code (Node.js) â€” Production</h2>
          <pre className="p-4 rounded-xl bg-[#0F1F35] text-green-200 text-[12px] overflow-x-auto">{`const token = (await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', { auth: { username: KEY, password: SECRET } })).data.access_token

await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
  BusinessShortCode: 174379,
  Password: Buffer.from('174379'+passkey+timestamp).toString('base64'),
  Timestamp: timestamp,
  TransactionType: 'CustomerPayBillOnline',
  Amount: 1,
  PartyA: '254722114098',
  PartyB: 174379,
  PhoneNumber: '254722114098',
  CallBackURL: 'https://sterlingsstudio.com/api/mpesa/callback',
  AccountReference: 'LuminaPay',
  TransactionDesc: 'Payment'
}, { headers: { Authorization: 'Bearer '+token } })`}</pre>
          <h2 className="text-[22px] font-bold text-slate-900 mt-8">4. Callback handling</h2>
          <p>Callback contains ResultCode 0 = success. Save CheckoutRequestID, MpesaReceiptNumber, Amount, PhoneNumber to Postgres. Update order status, send SMS.</p>
          <h2 className="text-[22px] font-bold text-slate-900 mt-8">5. Common pitfalls in Nairobi</h2>
          <ul className="list-disc pl-6"><li>Callback must be HTTPS + public, not localhost</li><li>Till vs Paybill: Till uses TransactionType CustomerBuyGoodsOnline</li><li>Timeout: handle 1032 (customer cancelled) and 1037 (timeout)</li><li>Reconciliation: log everything, auto match via BillRefNumber</li></ul>
          <div className="mt-10 p-6 rounded-[20px] bg-green-50 border border-green-100"><div className="font-bold">Want us to integrate Daraja for you?</div><div className="mt-2 text-[14px]">We did it for LuminaPay (KES 12.4M) and SokoMart KE (92% M-Pesa). Fixed price, 2 weeks. <a href="https://wa.me/254722114098?text=I%20want%20Daraja%20integration%20Nairobi" className="underline font-bold">WhatsApp us â†’</a></div></div>
        </div>
      </article>
    </div>
  )
}

