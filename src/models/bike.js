import mongoose from "mongoose";

const BikeSchema = new mongoose.Schema({
    cod_bike: {
        type: String,
        required: true,
    },
    marca_bike: {
        type: String,
        required: true,
    },
    cor_bike: {
        type: String,
        required: true,
        unique: true,
    }
})

const Bike = mongoose.model('Bike', BikeSchema)

export default Bike