const {AnimalValidation, AnimalIdValidation,updateAnimalValidation} = require("../validation/animal.validation")


let AnimalValidate = function(req,res,next){

    const {error} = AnimalValidation(req.body)
    
    if(error){

        return res.status(400).json({msg: error.details[0].message})
    }
    next()
}

let AnimalIdValidate = function(req,res,next){

    const {error} = AnimalIdValidation({id: req.params.id})
    if(error){
        return res.status(400).json({msg: error.details[0].message})
    }
    next()
}

let updateAnimalValidate = function(req,res,next) {
    const {error} = updateAnimalValidation({...req.body,id: req.params.id})
    if(error){
        return res.status(400).json({msg: error.details[0].message})
    }
    next()
}

module.exports = {
    AnimalValidate,
    AnimalIdValidate,
    updateAnimalValidate
}