const get_url_list_model = require('../models/get_url_list_model');

const get_url_list_controller = async(req, res)=>{
const user_id = req.user_id;
const {offset, limit} = req.query;
try{
const {status_code, data} = await get_url_list_model({user_id : user_id, offset : offset, limit : limit});

if(status_code == 200){
    return res.status(200).json({
        success : true,
        data : data
    })
}
}
catch(err){
    console.log('get all url list controller error-->', err);
    return res.status(500).json({
        success : false,
        error : err
    })
}
}

module.exports = get_url_list_controller;