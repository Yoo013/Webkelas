
const express = require("express")

const router = express.Router()
exports.router = router


const  Joi  = require("joi")



//validate function which will validate our req.body or email.......

const validateSchema = (data) => {
    //schema is a Joi object which will validate email and password
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password")
    })
    return schema.validate(data)
}
exports.validateSchema = validateSchema


module.exports = router