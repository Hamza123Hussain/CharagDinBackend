import express from 'express'
import { CategoryMaker } from '../../Controllers/Create/CreatingCategory.js'

const CategoryRouter = express.Router()

CategoryRouter.post('/', CategoryMaker)

export default CategoryRouter
