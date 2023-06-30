import Bike from '../models/Bike.js'

const createService = (body) => Bike.create(body) // this way a ´return´ is not necessary => desta maneira não é necessário um `return`

const findAllService = () => Bike.find()

const findByCategory = async (category) => await Bike.find({categoria_bike: category})

const updateService = (
    id, 
    categoria_bike
    ) => 
    Bike.findOneAndUpdate(
        {_id: id},
        {categoria_bike}
        )

export default {

    createService,
    findAllService,
    findByCategory,
    updateService,
}