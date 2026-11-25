'use client';
import {useFormState,useFormStatus} from 'react-dom';
import {submitLead} from '@/app/actions';
function Go(){const {pending}=useFormStatus();return <button className="btn" disabled={pending}>{pending?'Надсилаю…':'Записатись'} <i>↗</i></button>}
export default function Contact(){const [s,act]=useFormState(submitLead,null);
 if(s&&s.ok)return <div className="toast" role="status">Записано! Відповім протягом дня.</div>;
 return <form action={act}><label>Ім’я<input name="n" required maxLength={80} autoComplete="name"/></label>
  <label>Що потрібно<select name="t"><option>Лендінг</option><option>Сайт компанії</option><option>Магазин</option><option>Адмін-панель</option><option>Ще не знаю</option></select></label>
  <label>Коротко про справу<textarea name="m" maxLength={1500}/></label>
  <label>Як з вами зв’язатись<input name="c" required maxLength={120} placeholder="Telegram або телефон"/></label>
  <input name="website" tabIndex={-1} autoComplete="off" style={{position:'absolute',left:'-9999px'}} aria-hidden="true"/>
  <Go/>{s&&s.error&&<div className="toast" style={{color:'#ffb4b4'}}>{s.error}</div>}</form>}
