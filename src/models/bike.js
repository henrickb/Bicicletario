import mongoose from "mongoose";

const BikeSchema = new mongoose.Schema({
    marca_bike: {
        type: String,
        required: true,
    },
    cor_bike: {
        type: String,
        required: true,
    },
    categoria_bike: {
        type: String, // GRANDE|MEDIO|PEQUENO
        required: true,
    },
    tamanho_bike:{
        type: Number, 
        required: true,
    }
})

const Bike = mongoose.model('Bike', BikeSchema)

export default Bike
