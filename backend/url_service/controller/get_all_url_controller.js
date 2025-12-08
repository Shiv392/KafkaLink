const get_url_list_model = require('../models/get_url_list_model');
const redis_client = require('../config/redis_config');

const get_url_list_controller = async(req, res)=>{
const user_id = req.user_id;
const {offset, limit} = req.query;
try{
const {status_code, data} = await get_url_list_model({user_id : user_id, offset : offset, limit : limit});

if(status_code == 200){
    const name = await redis_client.get('name');
    console.log('name--->', name);
    return res.status(200).json({
        success : true,
        data : data,
        url : name
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