const Joi = require("joi")

let carValidation = (carInfo) => {

    const schema = Joi.object({
        name: Joi.string().min(3).max(10).required(),
        price: Joi.number().min(3).required(),
        brand: Joi.string().min(3).max(10).required()            
    })
    return schema.validate(carInfo)
}

let CarIdValidation = (id) => {
    const schema = Joi.object({
        id: Joi.string().required().min(4).max(50)
    })
    return schema.validate(id)
}

let updateCarValidation =(UpdateCar) => {
    const scheme = Joi.object({
        name: Joi.string().min(3).max(10).required(),
        price: Joi.number().min(3).required(),
        brand: Joi.string().min(3).max(10).required(),
        id: Joi.string().min(4).max(50)
    })
    return scheme.validate(UpdateCar)
}

module.exports = {
    carValidation,
    CarIdValidation,
    updateCarValidation
}