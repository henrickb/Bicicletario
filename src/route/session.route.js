import express from 'express'
import session from '../controller/session.controller.js'

const routeSession = express.Router()


routeSession.post('/', session.login)

export default {
    routeSession
}