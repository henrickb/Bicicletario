import express from 'express'
import connectDatabase from './src/database/db.js'
import routeBike from './src/route/bike.route.js'
import routeSession from './src/route/session.route.js'
import routeUser from './'

const port = 5000
const app = express()
connectDatabase()
app.use(express.json())

app.use('/user', )
app.use('/bike', routeBike)
app.use('/login', routeSession)

app.listen(port, () => {console.log(`Server running on port ${port}`)})