
export default function Work(){
  return (
    <div className="bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="text-[11px] font-bold tracking-widest text-slate-500">SELECTED WORK</div>
        <h1 className="mt-3 text-[46px] font-extrabold leading-[0.9]">We build products<br/><span className="text-slate-400">that teams actually use.</span></h1>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-24 grid gap-8">
        <div className="rounded-[28px] border overflow-hidden grid lg:grid-cols-[1.1fr_0.9fr]">
          <img src="/human_female_founder.webp" alt="Corporate platform founder" className="w-full h-[420px] object-cover object-top" />
          <div className="p-8 lg:p-10">
            <div className="text-[11px] font-bold tracking-widest text-slate-500">CORPORATE PLATFORM • NAIROBI</div>
            <h3 className="mt-3 text-[24px] font-bold leading-7">From 4.2s WordPress to 0.8s Next.js — leads 3x in 60 days</h3>
            <p className="mt-4 text-[13px] leading-6 text-slate-600">The old site was slow, hard to update, and didn't rank. We rebuilt it hard-coded with Next.js on the edge, proper schema, and secure headers. No WordPress, no page builders.</p>
            <div className="mt-6 text-[11px] text-slate-500">Stack: Next.js, Tailwind, Vercel Edge • 0.8s • 95+ Lighthouse</div>
          </div>
        </div>

        <div className="rounded-[28px] border overflow-hidden grid lg:grid-cols-[1.1fr_0.9fr]">
          <img src="/human_dev_coding.webp" alt="Developer working on fintech" className="w-full h-[420px] object-cover object-top" />
          <div className="p-8 lg:p-10 bg-[#F8FAFC]">
            <div className="text-[11px] font-bold tracking-widest text-slate-500">FINTECH DASHBOARD • ROLES & AUDITS</div>
            <h3 className="mt-3 text-[24px] font-bold leading-7">Replaced spreadsheets with a secure dashboard — 80% less manual work</h3>
            <p className="mt-4 text-[13px] leading-6 text-slate-600">Built with roles, permissions, audit logs, and real-time updates. M-Pesa Daraja and Stripe integrated where needed, but the product is the dashboard, not the payment.</p>
            <div className="mt-6 text-[11px] text-slate-500">Stack: React, Node.js, Postgres, Redis</div>
          </div>
        </div>

        <div className="rounded-[28px] border overflow-hidden grid lg:grid-cols-[1.1fr_0.9fr]">
          <img src="/human_team_standup.webp" alt="Retail team standup" className="w-full h-[420px] object-cover object-top" />
          <div className="p-8 lg:p-10">
            <div className="text-[11px] font-bold tracking-widest text-slate-500">RETAIL • WEB + ANDROID • OFFLINE-FIRST</div>
            <h3 className="mt-3 text-[24px] font-bold leading-7">Web + Android retail system that works offline — checkout 2x faster</h3>
            <p className="mt-4 text-[13px] leading-6 text-slate-600">One backend, two frontends. Offline SQLite sync for low connectivity, fast checkout, and accurate stock. Built for East African retail realities.</p>
            <div className="mt-6 text-[11px] text-slate-500">Stack: React Native, SQLite, Node.js</div>
          </div>
        </div>
      </div>
    </div>
  )
}
