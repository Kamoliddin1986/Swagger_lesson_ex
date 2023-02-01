const {userValidation, getOneUserValidation} = require("../validation/user.validation")


let userValidate = function(req,res,next){

    const {error} = userValidation(req.body)
    
    if(error){

        return res.status(400).json({msg: error.details[0].message})
    }
    next()
}

let getOneUserValidate = function(req,res,next){

    const {error} = getOneUserValidation({id: req.params.id})
    if(error){
        return res.status(400).json({msg: error.details[0].message})
    }
    next()
}

module.exports = {
    userValidate,
    getOneUserValidate
}