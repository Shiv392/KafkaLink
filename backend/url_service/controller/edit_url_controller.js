const edit_url_model = require("../models/put_url_model");

const edit_url_controller = async(req, res)=>{
const user_id = req.user_id;
const {new_url, url_id} = req.body;
try{
const {status, message} = await edit_url_model({url_id : Number(url_id), user_id : Number(user_id), new_url : new_url});
if(status!=200){
    return res.status(status).json({
        success : false,
        error : message
    })
}

return res.status(200).json({
    success:true,
    message : message
})
}
catch(err){
    console.log('edit url controller err', err);
    return res.status(500).json({
        success : false,
        error : err
    })
}
}

module.exports = edit_url_controller;