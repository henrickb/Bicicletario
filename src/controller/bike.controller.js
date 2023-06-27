import BikeServices from '../services/bike.services.js'

const create = async (req, res) =>{

    try{
      const {cod_bike, marca_bike, cor_bike} = req.body
      if(!cod_bike ||!marca_bike ||!cor_bike){
          res.status(400).send({
            message: 'Submit all fields for registration'
         }).end()
      }
   
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
         user: {
            id: bike._id,
            cod_bike, 
            marca_bike, 
            cor_bike
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

const findByCategory = async (req, res)=>{
   try{
      const bikes = BikeServices.findByCategory()
      
   } catch(err){
      res.status(500).send({
         message: err.message
      }).end()
   }
} 

export default {
   create,
   findAll,
}