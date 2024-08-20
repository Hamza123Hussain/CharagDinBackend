import express from 'express'
import cors from 'cors'
import { Port } from './Config.js'

import AuthRouter from './DB/Routes/Auth/AuthController.js'
import ProductRouter from './DB/Routes/Product/ProductRouter.js'
import CategoryRouter from './DB/Routes/Catorgory/Category.js'
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/category', CategoryRouter)
app.use('/api/Product', ProductRouter)
app.use('/api/Auth', AuthRouter)
app.listen(Port, () => {
  console.log('RUNNING ON PORT 8000')
})
