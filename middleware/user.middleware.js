const {userValidation} = require("../validation/user.validation")


module.exports.userValidate = function(req,res,next){

    const {error} = userValidation(req.body)
    
    if(error){

        return res.status(400).json({msg: error.details[0].message})
    }
    next()
}