import Bike from '../models/bike.js'

const createService = (body) => Bike.create(body) // this way a ´return´ is not necessary => desta maneira não é necessário um `return`

const findAllService = () => Bike.find()

const findByCategory = () => Bike.find()

export default {

    createService,
    findAllService,
    findByCategory,

}