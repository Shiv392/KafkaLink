const signup_model = require('../models/signup_model');
const{signup_schema} = require('../validations/index')

const signup_controller = async(req, res)=>{
const validate_schema = signup_schema.validate(req.body);
if(validate_schema.error){
    return res.status(400).json({
        error : validate_schema.error.details[0].message
    })
}

const {name, email, password} = req.body;
try{
const {user_exits, new_user} = await signup_model(name, email, password);
if(user_exits){
    return res.status(409).json({
    error : 'User already exists'
    })
}

if(new_user){
    return res.status(201).json({
        message : 'New user created'
    })
}
}
catch(err){
    return res.status(500).json({error : err})
}
}

module.exports = signup_controller;