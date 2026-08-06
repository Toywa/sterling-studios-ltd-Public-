
export default function Testimonials(){
  return (
    <div className="bg-white max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
      <h2 className="text-[24px] font-extrabold">What clients say</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="rounded-[20px] border bg-[#F8FAFC] p-6"><div className="text-[13px]">"Our old site was slow and didn't convert. New one loads instantly and leads tripled."</div><div className="mt-4 text-[12px] font-bold">Wanjiku M. — CEO</div></div>
        <div className="rounded-[20px] border bg-[#F8FAFC] p-6"><div className="text-[13px]">"They shipped our fintech dashboard in 3 weeks. Secure, fast, and our team loves using it."</div><div className="mt-4 text-[12px] font-bold">James K. — Founder</div></div>
        <div className="rounded-[20px] border bg-[#F8FAFC] p-6"><div className="text-[13px]">"Retail app works offline — huge for us. Checkout is now twice as fast."</div><div className="mt-4 text-[12px] font-bold">Amina O. — Retail Founder</div></div>
      </div>
    </div>
  )
}
