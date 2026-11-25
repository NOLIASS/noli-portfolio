'use client';
import {useState} from 'react';
export default function Audience(){const [m,setM]=useState(0);
 return <div className="tr"><div className="sw" data-m={m} role="tablist">
  {['Я підприємець','Я роботодавець'].map((t,i)=><button key={i} role="tab" aria-selected={m===i} onClick={()=>setM(i)}>{t}</button>)}</div>
  <div className={'pn'+(m===0?' on':'')}><h3>Що ви отримаєте</h3><ul><li><b>Готовий сайт.</b> Тексти, дизайн і запуск в одній людині.</li><li><b>Заявки в чат чи на пошту.</b> Ви бачите, хто написав.</li><li><b>Зручне керування.</b> Самі змінюєте ціни й товари.</li><li><b>Чесні терміни й ціна.</b> Домовляємось наперед.</li></ul></div>
  <div className={'pn'+(m===1?' on':'')}><h3>Junior fullstack, готовий до росту</h3><p className="mut" style={{marginTop:8}}>Junior-рівень без комерційного стажу, зате багато власних проєктів: сайт залу, лендінг із трьома мовами, сайт із конструктором, адмін-панелі. Працюю як junior frontend і junior fullstack, ціль — стажування й ріст до middle.</p><ul><li><b>Рівень:</b> Junior, ціль — Middle</li><li><b>Напрям:</b> Frontend і Backend, тобто Fullstack</li><li><b>Підхід:</b> адаптивність, доступність, швидкість</li><li><b>Шукаю:</b> стажування чи роль junior</li></ul><div className="tags"><span>Junior</span><span>Middle (ціль)</span><span>Frontend</span><span>Backend</span><span>Fullstack</span></div></div></div>}
