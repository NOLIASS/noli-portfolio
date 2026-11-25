import {db} from '@/lib/db';import Link from 'next/link';import Audience from '@/components/Audience';import Catalog from '@/components/Catalog';import Contact from '@/components/Contact';
export const dynamic='force-dynamic';
const S=[['Лендінг, що продає','Одна сторінка, яка веде клієнта до замовлення: торти, послуги, курси. Кілька мов, форма заявки, швидке завантаження.'],['Сайт компанії чи залу','Ціни, розклад, команда, контакти й карта. Усе зрозуміло з першого екрана.'],['Магазин і оплата','Каталог товарів чи цифрових курсів, оплата карткою й автоматична видача файлів.'],['Адмін-панель','Ви самі додаєте товари, міняєте тексти й бачите заявки. Я покажу, як користуватись.']];
const ST=[['Розмова','Розкажіть про бізнес. Я питаю простими словами й пропоную варіант.'],['Макет','Показую, як виглядатиме сайт. Ви правите, поки не сподобається.'],['Створення','Збираю сайт і перевіряю на телефоні та комп’ютері.'],['Запуск і підтримка','Публікую, навчаю користуватись і відповідаю протягом доби.']];
export default async function Home(){
 const [items,st]=await Promise.all([db.item.findMany({where:{published:true},orderBy:[{position:'asc'},{id:'asc'}],take:3}),db.setting.findUnique({where:{key:'open'}})]);const open=!st||st.value!=='0';
 return <>
 <div className="w hero" id="home">
  <svg className="orb" viewBox="0 0 120 120" aria-hidden="true"><defs><path id="c" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0"/></defs><text><textPath href="#c">САЙТИ ПІД КЛЮЧ · JUNIOR FULLSTACK · </textPath></text><path d="M60 46l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="var(--ac)"/></svg>
  <div className={'st'+(open?'':' off')}><b/><span>{open?'Беру нові проєкти':'Зараз зайнятий, пишіть — відповім про терміни'}</span></div>
  <h1><span className="l"><span>Сайт, який працює</span></span><span className="l"><span><em>на ваш бізнес.</em></span></span></h1>
  <p className="lead">Я Назар, веб-розробник із Рожища. Беру на себе все: від ідеї до готового сайту, який зручно відкривається на телефоні й приносить заявки. Без складних слів.</p>
  <div className="cta"><Link className="btn" href="/#contact">Обговорити мій сайт <i>↗</i></Link><Link className="btn sec" href="/catalog">Дивитись каталог</Link></div>
  <div className="fcs"><div className="fc a"><b>Під ключ</b>Ви розповідаєте про справу, я роблю решту.</div><div className="fc b"><b>На телефоні</b>Більшість клієнтів зайде саме з нього.</div><div className="fc c"><b>Світла й темна</b>Сайт гарний у будь-який час доби.</div></div>
  <Audience/></div>
 <section id="services"><div className="w rv"><h2>Що я роблю <em>для вас</em></h2><p className="mut">Чотири речі, з якими до мене приходять найчастіше.</p>
  <div className="sv">{S.map(([t,d],i)=><details key={t} open={i===0}><summary>{t}</summary><p>{d}</p></details>)}</div></div></section>
 <section className="band" id="how"><div className="w rv"><h2>Як ми працюємо <em>разом</em></h2><p className="mut">Чотири кроки, без зникань і сюрпризів у ціні.</p>
  <div className="steps">{ST.map(([t,d])=><div className="step" key={t}><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>
 <section><div className="w"><div style={{display:'flex',justifyContent:'space-between',alignItems:'end',gap:14,flexWrap:'wrap'}}><h2 style={{margin:0}}>Вибрані <em>напрямки</em></h2><Link className="btn sec" href="/catalog">Увесь каталог <i>↗</i></Link></div><Catalog items={items}/></div></section>
 <section id="about"><div className="w"><h2 className="rv">Про <em>мене</em></h2><div className="ab">
  <div className="box rv"><h3>Назар Кривов’язюк</h3><p className="mut" style={{marginTop:10}}>Люблю, коли сайт простий для людини й акуратний усередині. Беру проєкти, де відповідаю за результат від ідеї до запуску.</p><p className="mut">Працюю дистанційно, відповідаю протягом дня.</p></div>
  <div className="box rv"><h3>Де мене знайти</h3><p className="mut" style={{margin:'10px 0 18px'}}>Найшвидше відповідаю в Telegram.</p><a className="btn" href="https://t.me/NOLI" target="_blank" rel="noopener">@NOLI <i>↗</i></a></div></div></div></section>
 <section id="contact"><div className="w"><div className="ct rv"><div><h2>Розкажіть, <em>що потрібно</em></h2><p className="mut">Кілька слів про вашу справу. Не знаєте, як сформулювати? Опишіть як є, решту уточнимо в розмові.</p><a className="btn" href="https://t.me/NOLI" target="_blank" rel="noopener" style={{marginTop:10}}>Написати @NOLI <i>↗</i></a></div><Contact/></div></div></section></>}
