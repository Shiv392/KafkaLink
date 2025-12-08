const url_schema = require('../db_schema/url_schema');
const redis_client = require('../config/redis_config');

const redirect_url_model = async({url_code, user_id})=>{
try{
const url_data = await url_schema.findOne({where : {short_code : url_code, user_id : user_id}});
if(!url_data){
    return {status_code : 404, message : 'URL Not found'}
}

const url_redis_key = `url:count:${url_data.short_code}`;
//increment visited count
await redis_client.incr(url_redis_key);
return {status_code : 200, message : 'URL retrive succesfully', data : {url : url_data.url}}
}
catch(err){
    throw err;
}
}

module.exports = redirect_url_model;