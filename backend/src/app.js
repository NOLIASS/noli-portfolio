import express from 'express'
import router from './routes/projects.js'
import authRouter from './routes/auth.js'
import cors from 'cors'


const app = express()

app.use(express.json())

app.use(cors())
app.use('/api/projects', router)
app.use('/api/auth', authRouter)
app.use('/admin', express.static('admin'))


app.listen(3000)