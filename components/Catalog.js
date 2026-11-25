'use client';
import {useState} from 'react';
const KIND={land:'Лендінг',biz:'Сайт',shop:'Магазин',tool:'Інструмент'},COL=['var(--g1)','var(--g2)','var(--g3)'];
const F=[['all','Усе'],['land','Лендінги'],['biz','Сайти компаній'],['shop','Продаж онлайн'],['tool','З інструментами']];
export default function Catalog({items,filters}){const [f,setF]=useState('all'),[o,setO]=useState({});
 const list=items.filter(x=>f==='all'||x.kind===f);
 return <>{filters&&<div className="flt">{F.map(([k,t])=><button key={k} className={f===k?'on':''} onClick={()=>setF(k)}>{t}</button>)}</div>}
  <div className="grid" key={f}>{list.map((x,i)=><article key={x.id} className={'item'+(o[x.id]?' open':'')} style={{'--c':COL[i%3],animationDelay:i*70+'ms'}}>
   <div className="th"/><div className="bd"><span className="kind">{KIND[x.kind]||'Сайт'}</span><h3>{x.title}</h3><p>{x.description}</p>
   <div className="more"><div><ul>{x.features.split('\n').filter(Boolean).map((l,j)=><li key={j}>{l}</li>)}</ul></div></div>
   <button className="tgl" aria-expanded={!!o[x.id]} onClick={()=>setO({...o,[x.id]:!o[x.id]})}>Що входить</button></div></article>)}</div></>}
