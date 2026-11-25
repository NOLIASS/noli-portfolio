'use server';
import {db} from '@/lib/db';import {isAdmin,checkPassword,startSession} from '@/lib/auth';
import {cookies} from 'next/headers';import {redirect} from 'next/navigation';import {revalidatePath} from 'next/cache';
const guard=()=>{if(!isAdmin())redirect('/admin')};
const done=()=>{['/','/catalog','/admin'].forEach(p=>revalidatePath(p))};
const KINDS=['land','biz','shop','tool'];
export async function login(fd){await new Promise(r=>setTimeout(r,700));if(!checkPassword(fd.get('p')))redirect('/admin?e=1');startSession();redirect('/admin')}
export async function logout(){cookies().delete('adm');redirect('/admin')}
export async function saveItem(fd){guard();const id=Number(fd.get('id'));
 const data={kind:KINDS.includes(fd.get('kind'))?fd.get('kind'):'biz',title:String(fd.get('title')||'').trim()||'Без назви',description:String(fd.get('description')||''),features:String(fd.get('features')||''),position:Number(fd.get('position'))||0,published:fd.get('published')==='on'};
 if(id)await db.item.update({where:{id},data});else await db.item.create({data});done()}
export async function deleteItem(fd){guard();await db.item.delete({where:{id:Number(fd.get('id'))}});done()}
export async function toggleOpen(fd){guard();const v=fd.get('open')==='on'?'1':'0';await db.setting.upsert({where:{key:'open'},update:{value:v},create:{key:'open',value:v}});done()}
export async function deleteLead(fd){guard();await db.lead.delete({where:{id:Number(fd.get('id'))}});done()}
