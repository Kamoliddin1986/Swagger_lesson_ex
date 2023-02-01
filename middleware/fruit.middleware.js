const {FruitValidation, FruitIdValidation,updateFruitValidation} = require("../validation/fruit.validation")


let FruitValidate = function(req,res,next){

    const {error} = FruitValidation(req.body)
    
    if(error){

        return res.status(400).json({msg: error.details[0].message})
    }
    next()
}

let FruitIdValidate = function(req,res,next){

    const {error} = FruitIdValidation({id: req.params.id})
    if(error){
        return res.status(400).json({msg: error.details[0].message})
    }
    next()
}

let updateFruitValidate = function(req,res,next) {
    const {error} = updateFruitValidation({...req.body,id: req.params.id})
    if(error){
        return res.status(400).json({msg: error.details[0].message})
    }
    next()
}

module.exports = {
    FruitValidate,
    FruitIdValidate,
    updateFruitValidate
}
