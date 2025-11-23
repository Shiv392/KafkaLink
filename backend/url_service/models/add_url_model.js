const url_schema = require('../db_schema/url_schema');
const uuid_code = require('../utils/uuid_generate');

const add_url_model = async ({ url, password, user_id }) => {
    try {
        const url_exits = await url_schema.findOne({
            where: { url: url, user_id: user_id },
            attributes: ['url_id']
        });
        if (url_exits) {
            return { status_code: 409, message: 'URL already exists' };
        }
         
        const url_code = uuid_code(15);
        const new_url = await url_schema.create({
            url : url,
            url_password: password || '',
            short_code: url_code,
            user_id : user_id
        });
        if (new_url) {
            return {
                status_code: 201,
                message: 'URL has been added',
                data: { url_id: new_url.url_id }
            };
        }

         return { status_code: 500, message: "URL not created" };
    }
    catch (err) {
        console.log('error---->', err);
       if (err.name === 'SequelizeUniqueConstraintError') {
            return { status_code: 409, message: 'URL already exists' };
        }
        return { status_code: 500, message: err.message };
    }
};

module.exports = add_url_model;
