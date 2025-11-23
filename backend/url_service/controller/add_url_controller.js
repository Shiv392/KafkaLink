const add_url_model = require('../models/add_url_model');

const add_url_controller = async(req, res)=>{
const {url, url_password} = req.body;
const user_id = req.user_id;
console.log('user id--->', req.user);
try{
const result = await add_url_model({ url, user_id, password: url_password });
const { status_code, message, data } = result;
if(status_code == 409){
    return res.status(409).json({success : false, error : message});
}

if(status_code == 201){
    return res.status(201).json({success : true, message : message, data : {url_id : data.url_id}})
}
}
catch(err){
    console.log('add url catch err ---->', err);
    return res.status(500).json({error : 'Server error'})
}

}

module.exports = add_url_controller;