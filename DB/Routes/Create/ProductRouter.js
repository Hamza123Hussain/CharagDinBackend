import express, { Router } from 'express'
import { ProductMaker } from '../../Controllers/Create/Product.js'
const ProductRouter = Router()

ProductRouter.post('/Create', ProductMaker)

export default ProductRouter
