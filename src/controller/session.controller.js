import sessionService from '../services/session.service'
import User from '../models/user'

const login = async (req, res)=>{
    try
    {
    
        const {name, password} = req.body

        if(!name || !password){
            return res.status(400).json({message: 'Invalid User Or password'}).end()
        }
        
        const user = async(name) = await User.find({name: name})
        
        if(!user){
            return res.status(404).json({message: 'User not found'})
        }
        
        const token = sessionService.authentication(user)
        
        return res.status(200).json({autorization: token}).end()

    }catch(err){
        return res.status(500).json({message: err.message}).end()
    }
}

export default{
    login
}