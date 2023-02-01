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

let UserIdValidation = (id) => {
    const schema = Joi.object({
        id: Joi.string().required().min(4).max(50)
    })
    return schema.validate(id)
}

let updateUserValidation =(UpdateUser) => {
    const scheme = Joi.object({
        username: Joi.string().min(3).max(10).required(),
        email: Joi.string().min(5).max(30).required().email(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        id: Joi.string().min(4).max(50)
    })
    return scheme.validate(UpdateUser)
}

module.exports = {
    userValidation,
    UserIdValidation,
    updateUserValidation
}