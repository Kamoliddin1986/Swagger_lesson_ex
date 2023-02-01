const {userValidation, UserIdValidation,updateUserValidation} = require("../validation/user.validation")


let userValidate = function(req,res,next){

    const {error} = userValidation(req.body)
    
    if(error){

        return res.status(400).json({msg: error.details[0].message})
    }
    next()
}

let UserIdValidate = function(req,res,next){

    const {error} = UserIdValidation({id: req.params.id})
    if(error){
        return res.status(400).json({msg: error.details[0].message})
    }
    next()
}

let updateUserValidate = function(req,res,next) {
    const {error} = updateUserValidation({...req.body,id: req.params.id})
    if(error){
        return res.status(400).json({msg: error.details[0].message})
    }
    next()
}

module.exports = {
    userValidate,
    UserIdValidate,
    updateUserValidate
}