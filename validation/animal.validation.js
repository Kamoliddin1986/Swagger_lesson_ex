const Joi = require("joi")

let AnimalValidation = (AnimalInfo) => {

    const schema = Joi.object({
        name: Joi.string().min(2).max(10).required(),
        type: Joi.string().min(2).max(30).required(),      
    })
    return schema.validate(AnimalInfo)
}

let AnimalIdValidation = (id) => {
    const schema = Joi.object({
        id: Joi.string().required().min(4).max(50)
    })
    return schema.validate(id)
}

let updateAnimalValidation =(UpdateAnimal) => {
    const scheme = Joi.object({
        name: Joi.string().min(2).max(10).required(),
        type: Joi.string().min(2).max(10).required(),
        id: Joi.string().min(4).max(50)
    })
    return scheme.validate(UpdateAnimal)
}

module.exports = {
    AnimalValidation,
    AnimalIdValidation,
    updateAnimalValidation
}