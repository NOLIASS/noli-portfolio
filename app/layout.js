import './globals.css';import Link from 'next/link';import Theme from '@/components/Theme';import Fx from '@/components/Fx';
export const metadata={title:'NOLI — сайти для бізнесу',description:'Веб-розробник Назар (NOLI): лендінги, сайти компаній, магазини й адмін-панелі під ключ.'};
const TG='https://t.me/NOLI';
export default function Root({children}){return <html lang="uk"><head>
 <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,500&family=Onest:wght@400;500;600&display=swap" rel="stylesheet"/>
 <script dangerouslySetInnerHTML={{__html:"try{var t=localStorage.getItem('th');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}"}}/></head>
 <body><header><div className="w"><nav><Link className="logo" href="/">NOLI</Link>
  <div className="pill"><Link href="/#about">Про мене</Link><Link href="/#how">Як працюю</Link><Link href="/catalog">Каталог</Link><Link href="/#stack">Стек</Link><Link href="/#faq">FAQ</Link></div>
  <div className="right"><Theme/><Link className="btn" href="/#contact">Обговорити сайт <i>↗</i></Link></div></nav></div></header>
 <main>{children}</main><Fx/>
 <footer className="w"><span>© 2026 Назар Кривов’язюк (NOLI). Сайти для бізнесу. <a href={TG}>@NOLI</a></span><Link href="/admin">Для власника</Link></footer></body></html>}
