import express, { Router } from 'express'
import { ProductMaker } from '../../Controllers/Create/Product.js'
import { ProductUpdate } from '../../Controllers/Update/UpdateProduct.js'
import { ProductDelete } from '../../Controllers/Delete/DeleteDoc.js'
const ProductRouter = Router()

ProductRouter.post('/Create', ProductMaker)
ProductRouter.put('/Update', ProductUpdate)
ProductRouter.delete('/Delete/:ProductID', ProductDelete)

//DEMO URL OF DELETE :http://localhost:8000/api/Product/Delete/a531ad55-e881-49fc-85fa-df995767375a?UserEmail=haniaaaaa@gmail.com
export default ProductRouter
