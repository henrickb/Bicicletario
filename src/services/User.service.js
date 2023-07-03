import User from '../models/User.js'

const createService = (body) => User.create(body) // this way a `return` is not necessary => desta maneira não é necessário um `return`

const findAllService = () => User.find()

const findByIdService = (id) => User.findById(id)

const findByIdAndRemove = (id) => User.findByIdAndRemove(id)

const purchaseById = (idBike, idUser)=> {
  User.find({id: idUser})
  
}

const updateService = (
    id,
    alturaInfo,
) => 
  User.findOneAndUpdate(
    {_id: id}, 
    {altura: alturaInfo}
  )

export default 
{
    createService,
    findAllService,
    findByIdService,
    updateService,
    findByIdAndRemove,
    purchaseById
}