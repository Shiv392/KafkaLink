const redirect_url_model = require('../models/redirect_url_model');

const redirect_url_controller = async(req, res)=>{
    const user_id = req.user_id;
    const url_code = req.params.url_code;
    try{
    const {status_code, data, message} = await redirect_url_model({url_code : url_code, user_id : user_id});
    if(status_code == 404){
        return res.status(404).json({success : false, error : message});
    }
    if(status_code == 200){
        return  res.redirect(302, data.url)
    }
    }
    catch(err){
        console.log('redirect url controller error---->', err);
        return res.status(500).json({error : 'Server error'});
    }
}

module.exports = redirect_url_controller;