const user_schema = require('../db_schema/user_schema');
const bcrypt_compare = require('../utils/bcrypt_compare');

const login_model = async(email, password)=>{
try{
const user = await user_schema.findOne({where : {user_email : email}});

//user not found with email
if(!user){
return {status : 404}
}

const user_password = user.dataValues.user_password;
const match = await bcrypt_compare(password, user_password);
if(match){
    return {status : 200, user : {name : user.user_name, user_id : user.user_id, email : user.user_email}};
}
else {
    return {status : 401};
}
}
catch(err){
    throw err;
}
}

module.exports = login_model;