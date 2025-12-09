const url_schema = require('../db_schema/url_schema');
const redis_client = require('../config/redis_config');
const uuid_code = require('../utils/uuid_generate');

const edit_url_model = async({new_url, user_id, url_id})=>{
try{
//first find the url with the user id and url ---->
const url = await url_schema.findOne({
    where : {user_id : user_id, url_id : url_id}
});

//if url not exits then nothing to edit
if(!url){
return {status : 404, message : 'URL not found'}
}

const previous_short_code = url.short_code;
const new_short_code = uuid_code(15);
await url_schema.update({
    url : new_url,
    short_code : new_short_code
},{where : {url_id : url_id}});

//delete the previous redis key
await redis_client.del(`url:count:${previous_short_code}`);
//add the new redis_key
await redis_client.set(`url:count:${new_short_code}`,0);

return {status : 200, message : 'URL has been updated'};
}
catch(err){
    throw err;
}
}
module.exports = edit_url_model;