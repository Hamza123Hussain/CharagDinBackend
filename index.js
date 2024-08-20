import express from 'express'
import cors from 'cors'
import { Port } from './Config.js'
const app = express()

app.use(express.json())
app.use(cors())

app.listen(Port, () => {
  console.log('RUNNING ON PORT 8000')
})
