import {db} from '@/lib/db';import Catalog from '@/components/Catalog';
export const dynamic='force-dynamic';export const metadata={title:'Каталог сайтів — NOLI'};
export default async function Page(){const items=await db.item.findMany({where:{published:true},orderBy:[{position:'asc'},{id:'asc'}]});
 return <div className="w pg"><h1 style={{fontSize:'clamp(36px,6vw,68px)'}}>Каталог <em>сайтів</em></h1><p className="mut" style={{marginTop:14}}>Оберіть тип, що ближчий до вашої справи. Вартість залежить від обсягу, тож називаю її після розмови.</p><Catalog items={items} filters/><p className="note">Частина прикладів — мої навчальні й демо-проєкти, а не готові роботи для клієнтів.</p></div>}
