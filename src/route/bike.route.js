import express from 'express'
import bikeController from '../controller/bike.controller.js'

const routeBike = express.Router()

routeBike.post('/', bikeController.create)

routeBike.get('/', bikeController.findAll)

export default  routeBike
