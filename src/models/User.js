import mongoose from 'mongoose'
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: false,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    altura: {
        type: Number,
        require: true,

    }
})

const User = mongoose.model('User', UserSchema)

export default User