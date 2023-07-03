import express from 'express'
import userController from '../controller/User.controller.js'
import userMiddlewares from '../middlewares/user.middlewares.js'
const route = express.Router()

route.post('/', userController.create)
route.get('/all', userMiddlewares.Jwt, userController.findAll)
route.get('/', userMiddlewares.Jwt,userController.findById)
route.patch('/', userMiddlewares.Jwt,userController.update)
route.delete('/', userMiddlewares.Jwt,userController.Delete)
route.get('/compras/:id', userMiddlewares.Jwt,userController.purchase)

export default route 