const login_model  = require('../models/login_model');

const login_controller = async(req, res)=>{
const {email, password} = req.body;
if(!email || !password){
    return res.status(400).json({error : 'Email and password required'});
}

try{
const {status} = await login_model(email, password);

if(status==200){
    return res.status(200).json({
        message : 'Login Successfull'
    })
}
else if(status == 404){
    return res.status(404).json({
        message : 'User not exists'
    })
}
else if(status == 401){
    return res.status(401).json({
        message : 'Password not matched '
    })
}
}
catch(err){
    return res.status(500).json({
        error : err
    })
}
}

module.exports = login_controller;