import express from 'express'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import pool from '../db/pool.js'

const router = express.Router()

router.post('/login', async (req, res) => {

  const { email, password } = req.body
  const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email])
  const user = rows[0]



  if (!user) {
    return res.status(401).json({ error: 'Невірний пароль' })
  }


  const isValid = await bcrypt.compare(password, user.password_hash)



  if (!isValid) {
    return res.status(401).json({ error: 'Невірний пароль' })
  }



  const token = jsonwebtoken.sign({ id: user.id }, process.env.JWT_SECRET)
  // повертає true або false

  res.json({ token })
})



export default router