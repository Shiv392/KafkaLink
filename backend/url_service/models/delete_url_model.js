const redis_client = require('../config/redis_config.js');
const url_schema = require('../db_schema/url_schema.js');

const delete_url_model = async({url_id, user_id})=>{
try{
//find the url with url_id and user_id;
const find_url = await url_schema.findOne({where : {user_id : user_id, url_id : url_id}});
if(!find_url){
    return {status : 404, message : 'URL Not Exists'}
}

const delet_url = await url_schema.destroy({
    where : {
        url_id : url_id,
        user_id : user_id
    }
});
if(delet_url){
    //delete from redis key 
    const url_redis_key = `url:count:${find_url.short_code}`;
    await redis_client.del(url_redis_key);
}

return {status : 200, message : 'URL has been deleted successfuly'}
}
catch(err){
    throw err;
}
}
module.exports = delete_url_model;