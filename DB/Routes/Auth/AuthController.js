import { Router } from 'express'
import { SignUpController } from '../../Controllers/Auth/SignUp.js'
import { LoginController } from '../../Controllers/Auth/Login.js'
import { SignOutController } from '../../Controllers/Auth/SignOut.js'
import { upload } from '../../../MulterConfig.js'
const AuthRouter = Router()

AuthRouter.post('/Register', upload.single('image'), SignUpController)
AuthRouter.post('/Login', LoginController)
AuthRouter.get('/Signout', SignOutController)

export default AuthRouter
