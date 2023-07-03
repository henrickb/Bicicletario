import express from 'express'
import sessionController from '../controller/session.controller.js'

const routeSession = express.Router()


routeSession.post('/', sessionController.login)

export default routeSession