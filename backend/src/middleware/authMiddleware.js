import jsonwebtoken from 'jsonwebtoken'





const authMiddleware = (req, res, next) => {


  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'Немає токена' })
  }

  const token = req.headers.authorization.split(' ')[1]

  
  try {
    const data = jsonwebtoken.verify(token, process.env.JWT_SECRET)
    next()
  } catch (error) {
    res.status(401).json({ error: 'Невалідний токен' })
  }

}

export default authMiddleware
