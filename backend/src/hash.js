import bcrypt from 'bcrypt'




const hash = await bcrypt.hash("PoRtfolio_NOLI-67", 10)

console.log(hash)