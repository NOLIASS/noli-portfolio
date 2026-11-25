'use server';
import {db} from '@/lib/db';
export async function submitLead(_,fd){
 if(fd.get('website'))return {ok:true};
 const n=String(fd.get('n')||'').trim().slice(0,80),c=String(fd.get('c')||'').trim().slice(0,120);
 if(!n||!c)return {error:'Вкажіть ім’я й контакт.'};
 await db.lead.create({data:{name:n,contact:c,kind:String(fd.get('t')||'').slice(0,60),message:String(fd.get('m')||'').slice(0,1500)}});
 return {ok:true}}
