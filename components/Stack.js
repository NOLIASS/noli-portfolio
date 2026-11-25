'use client';
import {useEffect,useRef,useState} from 'react';
// [назва, напис на клавіші, що роблю, колір]. Змініть список під себе.
const K=[['HTML','HTML','Каркас кожної сторінки','#E5532D'],['CSS','CSS','Верстка, теми й анімації','#6C4BD6'],['JavaScript','JS','Логіка на сторінці й на сервері','#E9A21B'],['React','React','Інтерфейс із компонентів','#1FA7B8'],['Next.js','Next','Сторінки, маршрути й сервер в одному проєкті','#2B2F3A'],['Node.js','Node','Серверна частина','#2E9A4F'],['Prisma','Prisma','Робота з базою даних','#2A6FDB'],['PostgreSQL','PG','База для каталогу й заявок','#3E7CB8'],['Git','Git','Історія змін у коді','#D8402F'],['GitHub','GH','Код і автоматичний деплой','#3A3F4B'],['Vercel','Vercel','Хостинг сайту','#14161C'],['Neon','Neon','Хмарна Postgres-база','#12A07A']];
const HK='qwertyuiopas';
export default function Stack(){
 const [dn,setDn]=useState(-1),[cap,setCap]=useState(-1),t=useRef();
 const press=i=>{setDn(i);setCap(i);clearTimeout(t.current);t.current=setTimeout(()=>setDn(-1),170)};
 useEffect(()=>{const h=e=>{if(e.metaKey||e.ctrlKey||e.altKey||e.key.length!==1)return;const el=e.target;if(el&&(/^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)||el.isContentEditable))return;const i=HK.indexOf(e.key.toLowerCase());if(i>=0&&i<K.length)press(i)};window.addEventListener('keydown',h);return()=>{window.removeEventListener('keydown',h);clearTimeout(t.current)}},[]);
 return <div className="kb rv"><div className="keys">{K.map(([n,l,,c],i)=><button type="button" key={n} className={'key'+(dn===i?' dn':'')} style={{'--k':c,'--i':i}} onClick={()=>press(i)} aria-label={n}><span className="hk" aria-hidden="true">{HK[i]}</span><span className="kl">{l}</span></button>)}</div>
  <p className="kcap" aria-live="polite">{cap<0?<span>hint: press a key</span>:<><b>{K[cap][0]}</b> — {K[cap][2]}</>}</p></div>}
