import jwt from 'jsonwebtoken'
//import dotenv from 'dotenv'
//dotenv.config()

const authentication = (user)=> {    

   return jwt.sign({user}, 'banana', { expiresIn: '1h' })
    
}

export default {
    authentication
}