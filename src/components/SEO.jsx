import { useEffect } from 'react'
export default function SEO({ title, description, canonical, ogImage='/prod-fintech.webp' }){
  useEffect(()=>{
    document.title = title
    let metaDesc = document.querySelector('meta[name="description"]')
    if(!metaDesc){ metaDesc=document.createElement('meta'); metaDesc.name='description'; document.head.appendChild(metaDesc) }
    metaDesc.content=description
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if(!ogTitle){ ogTitle=document.createElement('meta'); ogTitle.setAttribute('property','og:title'); document.head.appendChild(ogTitle) }
    ogTitle.content=title
    let ogDesc = document.querySelector('meta[property="og:description"]')
    if(!ogDesc){ ogDesc=document.createElement('meta'); ogDesc.setAttribute('property','og:description'); document.head.appendChild(ogDesc) }
    ogDesc.content=description
    let ogImg = document.querySelector('meta[property="og:image"]')
    if(!ogImg){ ogImg=document.createElement('meta'); ogImg.setAttribute('property','og:image'); document.head.appendChild(ogImg) }
    ogImg.content=ogImage
    let can = document.querySelector('link[rel="canonical"]')
    if(canonical){
      if(!can){ can=document.createElement('link'); can.rel='canonical'; document.head.appendChild(can) }
      can.href=canonical
    }
  },[title,description,canonical,ogImage])
  return null
}
