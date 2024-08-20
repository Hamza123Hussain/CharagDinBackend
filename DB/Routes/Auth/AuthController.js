import { Router } from 'express'
import { SignUpController } from '../../Controllers/Auth/SignUp.js'
import { LoginController } from '../../Controllers/Auth/Login.js'
import { SignOutController } from '../../Controllers/Auth/SignOut.js'
const AuthRouter = Router()

AuthRouter.post('/Register', SignUpController)
AuthRouter.post('/Login', LoginController)
AuthRouter.get('/Signout', SignOutController)

export default AuthRouter
