export default function SEO({title="Sterling Studios LTD - Nairobi", description="Nairobi studio shipping Next.js + Supabase + Daraja. 0.8s load, 96.4 percent STK success. WhatsApp-first.", ogImage="/og-image.jpg"}){
  if(typeof document !== 'undefined'){
    document.title = title;
    const setMeta = (n,c)=>{
      let el = document.querySelector(`meta[name="${n}"]`) || document.querySelector(`meta[property="${n}"]`);
      if(!el){ el = document.createElement('meta'); el.setAttribute(n.includes(':')?'property':'name', n); document.head.appendChild(el); }
      el.setAttribute('content', c);
    };
    setMeta('description', description);
    setMeta('og:title', title);
    setMeta('og:description', description);
    setMeta('og:image', ogImage);
  }
  return null;
}
