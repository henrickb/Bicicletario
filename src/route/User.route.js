import express from 'express'
import userController from '../controller/user.controller.js'

const routeUser = express.Router()

routeUser.post('/', userController.create)
routeUser.get('/', userController.findAll)
routeUser.get('/:id', userController.findById)
routeUser.patch('/:id',userController.update)
routeUser.delete('/:id', userController.Delete)

export default
{
    routeUser
} 