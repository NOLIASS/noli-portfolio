'use client';
import {useEffect} from 'react';import {usePathname} from 'next/navigation';
export default function Fx(){const p=usePathname();
 useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
  document.querySelectorAll('.rv:not(.in)').forEach(e=>io.observe(e));
  const h=document.getElementById('home');let mv;
  if(h){mv=e=>{const r=h.getBoundingClientRect();h.style.setProperty('--x',((e.clientX-r.left)/r.width-.5).toFixed(2));h.style.setProperty('--y',((e.clientY-r.top)/r.height-.5).toFixed(2))};h.addEventListener('mousemove',mv)}
  const bt=e=>{const b=e.target.closest&&e.target.closest('.btn');if(b){const r=b.getBoundingClientRect();b.style.setProperty('--ox',((e.clientX-r.left)/r.width*100)+'%')}};
  document.addEventListener('mousemove',bt);
  return()=>{io.disconnect();h&&h.removeEventListener('mousemove',mv);document.removeEventListener('mousemove',bt)}},[p]);
 return null}
