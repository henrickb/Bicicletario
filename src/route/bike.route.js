import express from 'express'
import bikeController from '../controller/bike.controller.js'

const routeBike = express.Router()

routeBike.post('/', bikeController.create)

routeBike.get('/', bikeController.findAll)

routeBike.get('/:category', bikeController.findByCategory)

routeBike.patch('/:id', bikeController.update)

export default  routeBike
