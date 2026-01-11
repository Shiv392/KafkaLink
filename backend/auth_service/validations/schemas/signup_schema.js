const joi = require('joi');

const signup_schema = joi.object({
    name : joi.string().min(1).max(20).required(),
    email : joi.string().email().pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')).required(),
    password : joi.string().min(8).max(20).required()
})

module.exports = signup_schema;