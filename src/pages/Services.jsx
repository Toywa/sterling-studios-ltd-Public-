
export default function Services(){
  return (
    <div className="bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="text-[11px] font-bold tracking-widest text-slate-500">SERVICES</div>
        <h1 className="mt-3 text-[46px] lg:text-[56px] font-extrabold leading-[0.9] tracking-tight">A small team that<br/>ships real products.</h1>
        <p className="mt-4 text-[15px] text-slate-600 max-w-[60ch]">We don't do WordPress or templates. Every site, web app, and mobile app is coded from scratch for speed, design, and security. Built in Nairobi, for teams across East Africa, Africa, and globally.</p>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-20 grid gap-6">
        <div className="rounded-[28px] border overflow-hidden bg-[#F8FAFC] grid lg:grid-cols-[0.9fr_1.1fr]">
          <img src="/human_female_founder.webp" alt="Marketing site" className="w-full h-[360px] object-cover object-top" />
          <div className="p-8 lg:p-10">
            <div className="text-[11px] font-bold tracking-widest">01 — MARKETING SITES & CORPORATE PLATFORMS</div>
            <h3 className="mt-3 text-[20px] font-bold leading-7">For teams who need to rank, load fast, and convert.</h3>
            <p className="mt-3 text-[13px] leading-6 text-slate-600">We rebuild slow WordPress sites into fast Next.js sites. Edge-deployed, SEO-ready with schema, sitemaps, and secure headers. No plugin updates to break your site.</p>
            <div className="mt-5 grid grid-cols-2 gap-2 text-[12px] text-slate-600">
              <div>• Next.js + Tailwind</div><div>• Edge deployment</div><div>• SEO & Schema</div><div>• 0.8s / 95+ LH</div>
            </div>
            <div className="mt-6 text-[11px] text-slate-500">Timeline: 2 weeks • From KES 180k</div>
          </div>
        </div>

        <div className="rounded-[28px] border overflow-hidden bg-[#F8FAFC] grid lg:grid-cols-[0.9fr_1.1fr]">
          <img src="/human_team_standup.webp" alt="Web app team standup" className="w-full h-[360px] object-cover object-top" />
          <div className="p-8 lg:p-10">
            <div className="text-[11px] font-bold tracking-widest">02 — WEB APPLICATIONS</div>
            <h3 className="mt-3 text-[20px] font-bold leading-7">Dashboards, portals, and internal tools that your team actually enjoys using.</h3>
            <p className="mt-3 text-[13px] leading-6 text-slate-600">Roles and permissions, audit logs, real-time updates, offline sync. Built for finance, operations, and product teams who outgrew spreadsheets.</p>
            <div className="mt-5 grid grid-cols-2 gap-2 text-[12px] text-slate-600">
              <div>• Roles & permissions</div><div>• Audit logs</div><div>• Real-time & offline</div><div>• Secure by default</div>
            </div>
            <div className="mt-6 text-[11px] text-slate-500">Timeline: 3-6 weeks • From KES 450k</div>
          </div>
        </div>

        <div className="rounded-[28px] border overflow-hidden bg-[#F8FAFC] grid lg:grid-cols-[0.9fr_1.1fr]">
          <img src="/human_pitch_boardroom.webp" alt="Mobile pitch" className="w-full h-[360px] object-cover object-top" />
          <div className="p-8 lg:p-10">
            <div className="text-[11px] font-bold tracking-widest">03 — ANDROID & iOS APPS</div>
            <h3 className="mt-3 text-[20px] font-bold leading-7">One codebase, two stores. Offline-first and ready for low connectivity.</h3>
            <p className="mt-3 text-[13px] leading-6 text-slate-600">React Native with offline SQLite sync, push notifications, biometrics, and payments. We integrate M-Pesa Daraja and Stripe only where needed — not as the whole product.</p>
            <div className="mt-5 grid grid-cols-2 gap-2 text-[12px] text-slate-600">
              <div>• React Native + Expo</div><div>• Offline-first</div><div>• Push & biometrics</div><div>• M-Pesa / Stripe minimal</div>
            </div>
            <div className="mt-6 text-[11px] text-slate-500">Timeline: 4-8 weeks • From KES 600k</div>
          </div>
        </div>
      </div>
    </div>
  )
}
