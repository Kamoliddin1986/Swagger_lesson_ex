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

module.exports = {
    userValidation
}