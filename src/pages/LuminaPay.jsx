export default function LuminaPay(){
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="text-[11px] tracking-widest font-bold text-slate-400">CASE STUDY • FINTECH • LUMINAPAY</div>
        <h1 className="mt-4 text-[44px] lg:text-[56px] font-extrabold leading-[0.9]">LuminaPay — <span className="text-sterlingBlue">KES 12.4M weekly</span> via M-Pesa.</h1>
        <p className="mt-4 text-[17px] text-slate-600 max-w-[640px]">Fintech dashboard for SME collections. Problem: manual till reconciliation, 12h delay, no visibility. Solution: Daraja STK Push + callbacks + auto receipts + real-time dashboard like you saw: 8,932 txns, 1,284 active users, 72% M-Pesa.</p>
        <div className="mt-8 grid grid-cols-3 gap-4 max-w-[520px] text-[13px]">
          <div className="p-4 rounded-xl bg-green-50 border border-green-100"><div className="text-[20px] font-bold text-green-800">KES 5.24M</div><div className="text-green-700 text-[12px]">This week</div></div>
          <div className="p-4 rounded-xl bg-slate-50 border"><div className="text-[20px] font-bold">96.4%</div><div className="text-slate-500 text-[12px]">Success rate</div></div>
          <div className="p-4 rounded-xl bg-slate-50 border"><div className="text-[20px] font-bold">8s</div><div className="text-slate-500 text-[12px]">Avg STK Push</div></div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-8"><img src="/prod-fintech.webp" className="w-full h-[520px] object-cover rounded-[24px] border" /></section>
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 grid lg:grid-cols-[0.7fr_1.3fr] gap-10">
        <div className="space-y-6 text-[13px]">
          <div><div className="font-bold">Client</div><div className="text-slate-600 mt-1">LuminaPay • Collections • 1,284 active users</div></div>
          <div><div className="font-bold">Stack</div><div className="mt-2 flex flex-wrap gap-2"><span className="px-2.5 py-1 rounded-full bg-slate-50 border text-[11px]">Node.js</span><span className="px-2.5 py-1 rounded-full bg-slate-50 border text-[11px]">Postgres</span><span className="px-2.5 py-1 rounded-full bg-slate-50 border text-[11px]">Daraja</span><span className="px-2.5 py-1 rounded-full bg-slate-50 border text-[11px]">M-Pesa</span></div></div>
          <div><div className="font-bold">Features</div><div className="text-slate-600 mt-1 text-[12px] leading-5">STK Push, Till/Paybill, callbacks, auto SMS receipts, admin logs, revenue trend 6 months, active users, M-Pesa 72% pie.</div></div>
          <a href="https://wa.me/254722114098?text=I%20want%20a%20dashboard%20like%20LuminaPay" className="mt-4 inline-flex px-5 py-2.5 rounded-full bg-sterlingNavy text-white text-sm font-bold">Start Similar →</a>
        </div>
        <div className="space-y-8 text-[15px] leading-7 text-slate-700">
          <div><h3 className="font-bold text-[18px] text-slate-900">Challenge</h3><p className="mt-2">Finance team spent 3h daily reconciling Tills on Excel. No real-time view, fraud risk, customer support "where is my payment?" 40+ calls/day.</p></div>
          <div><h3 className="font-bold text-[18px] text-slate-900">Solution</h3><p className="mt-2">Built Daraja integration: STK Push initiated from dashboard, callback verified, Postgres logged, auto receipt SMS via Africa's Talking, dashboard shows Overview (KES 12.4M, transactions, active users), M-Pesa Transactions table (MPesa Code, phone, status), Analytics (revenue trend, M-Pesa vs others).</p></div>
          <div><h3 className="font-bold text-[18px] text-slate-900">Result</h3><p className="mt-2">Reconciliation from 3h → 8 min, 96.4% success, 8s avg STK, support calls -60%, finance team now focuses on growth.</p></div>
        </div>
      </section>
    </div>
  )
}
