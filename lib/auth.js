import crypto from 'crypto';import {cookies} from 'next/headers';
const sign=v=>crypto.createHmac('sha256',process.env.AUTH_SECRET||'dev-secret').update(v).digest('hex');
const same=(a,b)=>{const x=Buffer.from(String(a)),y=Buffer.from(String(b));return x.length===y.length&&crypto.timingSafeEqual(x,y)};
export function isAdmin(){const c=cookies().get('adm')?.value;if(!c)return false;const [ts,sig]=c.split('.');return !!sig&&Date.now()-Number(ts)<604800000&&same(sig,sign(ts))}
export function checkPassword(p){const w=process.env.ADMIN_PASSWORD;return !!w&&w!=='change-me'&&same(sign(String(p)),sign(w))}
export function startSession(){const ts=String(Date.now());cookies().set('adm',ts+'.'+sign(ts),{httpOnly:true,sameSite:'lax',secure:process.env.NODE_ENV==='production',path:'/',maxAge:604800})}
