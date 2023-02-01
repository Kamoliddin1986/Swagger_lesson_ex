const {carValidation, CarIdValidation,updateCarValidation} = require("../validation/car.validation")


let carValidate = function(req,res,next){

    const {error} = carValidation(req.body)
    
    if(error){

        return res.status(400).json({msg: error.details[0].message})
    }
    next()
}

let CarIdValidate = function(req,res,next){

    const {error} = CarIdValidation({id: req.params.id})
    if(error){
        return res.status(400).json({msg: error.details[0].message})
    }
    next()
}

let updateCarValidate = function(req,res,next) {
    const {error} = updateCarValidation({...req.body,id: req.params.id})
    if(error){
        return res.status(400).json({msg: error.details[0].message})
    }
    next()
}

module.exports = {
    carValidate,
    CarIdValidate,
    updateCarValidate
}