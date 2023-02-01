const Joi = require("joi")

let userValidation = (userInfo) => {

    const schema = Joi.object({
        username: Joi.string().min(3).max(10).required(),
        email: Joi.string().min(5).max(30).required().email(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        confirm_password: Joi.ref("password"),        
    })
    return schema.validate(userInfo)
}

let getOneUserValidation = (id) => {
    const schema = Joi.object({
        id: Joi.string().required()
    })
    return schema.validate(id)
}

module.exports = {
    userValidation,
    getOneUserValidation
}