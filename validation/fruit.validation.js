
const Joi = require("joi")

let FruitValidation = (FruitInfo) => {

    const schema = Joi.object({
        name: Joi.string().min(3).max(10).required(),
        color: Joi.string().min(2).max(30)
 
    })
    return schema.validate(FruitInfo)
}

let FruitIdValidation = (id) => {
    const schema = Joi.object({
        id: Joi.string().required().min(4).max(50)
    })
    return schema.validate(id)
}

let updateFruitValidation =(UpdateFruit) => {
    const scheme = Joi.object({
        name: Joi.string().min(3).max(10).required(),
        color: Joi.string().min(2).required(),
       id: Joi.string().min(4).max(50)
    })
    return scheme.validate(UpdateFruit)
}

module.exports = {
    FruitValidation,
    FruitIdValidation,
    updateFruitValidation
}