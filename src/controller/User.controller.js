import userService from '../services/user.service.js'

const create = async (req, res) =>{

 try{
   const {name, phone, email, altura, password} = req.body
   if(!name ||!phone ||!email ||!altura || !password){
       res.status(400).send({
         message: 'Submit all fields for registration'
      })
   }

   const user = await userService
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
      const users = await userService.findAllService()

      if(users.length === 0){
         return res.status(400).send({
            message: 'There are no registered users'
         })
      }
      res.status(200).send(users).end()
   } catch(err){
      res.status(500).send({
         message: err.message
      })
   }
} 

const findById = async (req, res) =>{
   try{
      const user = req.user
      res.send(user)
   } catch(err){
      res.status(500).send({
         message: err.message
      })   
   }
}

const update = async (req, res) =>{
   try {
      const {name, phone, email, altura, password} = req.body
   
      if(!name && !phone && !email && !altura && !password){
          res.status(400).send({
            message: 'Submit at least one field for update'
         })
      } 
      const {id, user} = req
      await userService.updateService(
         id,
         name,
         phone,
         email,
         altura,
      )
    res.send({message: 'User successfully update!'})
   } catch (err){
      res.status(500).send({
         messege: err.message
      })
   }
}

const Delete = async (req, res) => {
   try {
      const user = req.params.id

      const usuarioRemovido = await userService.findByIdAndRemove(user)
      
      console.log(usuarioRemovido)

      if (usuarioRemovido) {
         res.status(200).send({
            message: 'Usuário deletado com sucesso',
            usuario: usuarioRemovido
         })
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


export default { 
   create, 
   findAll, 
   findById,
   update,
   Delete,
}