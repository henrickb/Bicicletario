import express from 'express'
import userController from '../controller/User.controller.js'

const route = express.Router()

route.post('/', userController.create)
route.get('/', userController.findAll)
route.get('/:id', userController.findById)
route.patch('/:id',userController.update)
route.delete('/:id', userController.Delete)

export default route 