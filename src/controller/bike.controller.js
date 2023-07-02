import BikeServices from '../services/bike.service.js'

const create = async (req, res) =>{

    try{
      const {marca_bike, cor_bike, categoria_bike, tamanho_bike, status} = req.body
      
   
      const bike = await BikeServices
      .createService(req.body)
      .catch((err) => console.log(err.message))
    
      if (!bike){
         return res.status(400).send({
            message: 'Error creating Bicicleta'
         }).end()
      }
   
      res.status(201).send({
         message: 'Bicicleta created',
         bike: {
            id: bike._id,
            marca_bike, 
            cor_bike,
            categoria_bike,
            tamanho_bike,
            status
         }
       }).end()
      } catch(err){
         res.status(500).send({
            message: err.message
         }).end()
      }

   }
const findAll = async (req, res)=>{
   try{
      const bikes = await BikeServices.findAllService()

      if(bikes.length === 0)
      {
         return res.status(400).send({
            message: 'There are no registered bikes'
         }).end()
      }
      res.status(200).json(bikes).end()
   } catch(err){
      res.status(500).send({
         message: err.message
      }).end()
   }
}

const  findByCategory = async (req, res)=>{
    try{
      const {category} = req.params 
      console.log(category)
      const bike = await BikeServices.findByCategory(category)
      console.log(bike)
      if(bike.length === 0)
      {
         return res.status(400).send({
            message: 'There are no category bikes'
         }).end()
      }
      res.status(200).json(bike).end()

   } catch(err){
      res.status(500).send({
         message: err.message
      }).end()
   }
} 
const update = async (req, res) =>{
   try {
      const {categoria_bike} = req.body
      const {id} = req.params
      console.log(id)
      if(!categoria_bike){
          res.status(400).send({
            message: 'Submit at least one field for update'
         })
      } 
      await BikeServices.updateService(
         id,
         categoria_bike,
      )
    res.send({message: 'Biker successfully update!'})
   } catch (err){
      res.status(500).send({
         messege: err.message
      })
   }
}

const Delete = async (req, res) => {
   try {
      const biker = req.params.id

      const bikeRemovida = await BikeServices.findByIdAndRemove(biker)
      
      console.log(bikeRemovida)

      if (bikeRemovida) {
         res.status(200).send({
            message: 'Bike deleted successfully',
            biker: bikeRemovida
         })
      } else {
         res.status(404).send({
            message: 'Bike not found not found'
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
   findByCategory,
   update,
   Delete
}