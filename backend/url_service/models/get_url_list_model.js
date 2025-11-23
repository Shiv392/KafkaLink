const url_schema = require('../db_schema/url_schema');

const get_url_list_model = async({user_id, offset = 0, limit = 10})=>{
try{
const url_data = [];
const url_list = await url_schema.findAll({where : {user_id : user_id}, limit : Number(limit), offset : Number(offset)});
if(url_list.length>0){
url_list.forEach(element => {
    url_data.push({
        url_id : element.url_id,
        short_code : element.short_code,
        url : element.url,
        updated : element.updatedAt
    })
});
}
return {status_code : 200, data : url_data};
}
catch(err){
    throw err;
}
}

module.exports = get_url_list_model