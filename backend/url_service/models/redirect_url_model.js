const url_schema = require('../db_schema/url_schema');

const redirect_url_model = async({url_code, user_id})=>{
try{
const url_data = await url_schema.findOne({where : {short_code : url_code, user_id : user_id}});
console.log('url data');

if(!url_data){
    return {status_code : 404, message : 'URL Not found'}
}

return {status_code : 200, message : 'URL retrive succesfully', data : {url : url_data.url}}
}
catch(err){
    throw err;
}
}

module.exports = redirect_url_model;