import userService from "../services/user.service.js"


const create = async (req, res) =>{

 try{
   const {name, phone, email, altura, password} = req.body
   if(!name ||!phone ||!email ||!altura || !password){
       res.status(400).send({
         message: 'Submit all fields for registration'
      })
   }

   const user = await UserService
   .createService(req.body)
   .catch((err) => console.log(err.message))
 
   if (!user){
      return res.status(400).send({
         message: 'Error creating User'
      })
   }

   res.status(201).send({
       message: 'User created',
      user: {
         id: user._id,
         name,
         phone,
         email,
         altura
      }
    })
   } catch(err){
      res.status(500).send({
         message: err.message
      })
   }
}

const findAll = async (req, res) => {
  try{ 
      const users = await UserService.findAllService()

      if(users.length === 0){
         return res.status(400).send({
            message: 'There are no registered users'
         })
      }
      res.send(users)
   } catch(err){
      res.status(500).send({
         message: err.message
      })
   }
} 

const findById = async (req, res) =>{
   try{
      res.status(200).json(req.user).end()
   } catch(err){
      res.status(500).send({
         message: err.message
      })   
   }
}

const update = async (req, res) =>{
   try {
      const {altura} = req.body
   
      if(!altura){
          res.status(400).send({
            message: 'Submit at least one field for update'
         })
      } 
      
      const user = UserService.updateService(
         req.user[0]._id,    
         altura
      )

      if(user){
         res.status(201).json({message: 'User successfully update!'}).end()
      }
    
   } catch (err){
      res.status(500).send({
         messege: err.message
      }).end()
   }
}

const Delete = async (req, res) => {
   try {
      const usuarioRemovido = await UserService.findByIdAndRemove(req.user[0]._id)
       if (usuarioRemovido) {
         res.status(200).json({
            message: 'Usuário deletado com sucesso'
         }).end()
      } else {
         res.status(404).send({
            message: 'Usuário não encontrado'
         })
      }
   } catch (err) {
      res.status(500).send({
         message: err.message
      })
   }
}

const purchase = async (req, res) =>{
   try{
      
      const buy = await userService.purchaseById(
         req.params.id,
         req.user[0]._id
      )
      if(buy){
         res.status(200).json(buy).end()
      }

   }catch(err){
      res.status(500).send({
         message: err.message
      })
   }
   


}


export default { 
   create, 
   findAll, 
   findById,
   update,
   Delete,
   purchase,
}