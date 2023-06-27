import mongoose from 'mongoose'

const connectDatabase = ()=>{

    console.log('Wait connecting to the database')
    //  mongodb+srv://suelybessa2002:<password>@cluster0.39p0ydt.mongodb.net/  
    mongoose.connect("mongodb+srv://suelybessa2002:RWf020IbkNa7XDpX@cluster0.39p0ydt.mongodb.net/", 
    {
     useNewUrlParser: true, 
     useUnifiedTopology: true
    }
    ).then(() => console.log('MongoDB Atlas connected')).catch((error)=> console.log(error))
}

export default connectDatabase