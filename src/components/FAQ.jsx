
export default function FAQ(){
  const faqs = [
    {q: "Why not WordPress?", a: "WordPress averages 3-4s load with plugins. Ours load in 0.8s, score 95+ on Lighthouse, and don't break on updates. You own the code, no license fees."},
    {q: "What do you actually build?", a: "Marketing sites and corporate platforms, web apps like dashboards, portals and SaaS, plus Android and iOS apps with React Native. Everything is hard-coded with modern stack."},
    {q: "Who is this for?", a: "Startups and growing businesses in East Africa, established companies across Africa, and global teams who want fast, well-designed, secure products. Nairobi-based, global standards."},
    {q: "How long does it take?", a: "A marketing site in 2 weeks, a web app in 3-6 weeks, mobile in 4-8 weeks. We ship in phases so you see progress early."},
  ]
  return (
    <section className="bg-[#F8FAFC] border-t">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20">
        <h2 className="text-[24px] font-extrabold">Questions we get often</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {faqs.map((f,i)=>(
            <div key={i} className="rounded-[20px] border bg-white p-6">
              <div className="font-bold text-[14px]">{f.q}</div>
              <div className="mt-2 text-[13px] leading-6 text-slate-600">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
