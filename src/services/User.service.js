import User from '../models/User.js'

const createService = (body) => User.create(body) // this way a `return` is not necessary => desta maneira não é necessário um `return`

const findAllService = () => User.find()

const findByIdService = (id) => User.findById(id)

const findByIdAndRemove = (id) => User.findByIdAndRemove(id)

const updateService = (
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
) => 
  User.findOneAndUpdate(
    {_id: id}, 
    {id,name,username,email,password,avatar,background}
  )

export default 
{
    createService,
    findAllService,
    findByIdService,
    updateService,
    findByIdAndRemove,
}