const joi = require('joi');

const login_schema = joi.object({
    email : joi.string().email().pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')).required(),
    password : joi.string().min(8).max(20).required().messages({
        'string.min' : 'Password must be 8 character long',
        'string.max' : 'Password must be less than 20 character long',
        'string.required' : 'Password is required'
    })
})

module.exports = login_schema;