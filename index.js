import express from 'express'
import connectDatabase from './src/database/db.js'
import routeBike from './src/route/bike.route.js'
const port = 5000
const app = express()

connectDatabase()
app.use(express.json())
app.use('/bike', routeBike)

app.listen(port, () => {console.log(`Server running on port ${port}`)})



/*import mongoose from 'mongoose' 
const route = express.Router()


const port = 3000
const app = express()
const connectDatabase = ()=>{

    console.log('Wait connecting to the database')
    // mongodb+srv://root:root@servidor.c5smsq0.mongodb.net/
    mongoose.connect("mongodb+srv://suelybessa2002:ppb4bZs3YPfZDnPE@cluster0.39p0ydt.mongodb.net/", 
    {
     useNewUrlParser: true, 
     useUnifiedTopology: true
    }
    ).then(() => console.log('MongoDB Atlas connected')).catch((error)=> console.log(error))
}

connectDatabase()
app.use(express.json())
app.use('/bike', BikeRoute)

app.listen(port, () => {console.log(`Server running on port ${port}`)})


route.post("/", BikeController.create)

function BikeController(){
    
}
*/



