const delete_url_model = require('../models/delete_url_model');

const delete_url_controller = async(req, res)=>{
const user_id = req.user_id;
const {url_id} = req.query;
try{
const {status, message} = await delete_url_model({url_id : Number(url_id), user_id : Number(user_id)});
if(status == 404){
    return res.status(404).json({
        success : false,
        error : message
    })
}

if(status == 200){
    return res.status(200).json({
        success : true, 
        message : message
    })
}
}
catch(err){
    console.log('delete url controller erro---->', err);
    return res.status(502).json({error : 'Server Error'});
}
}

module.exports = delete_url_controller;