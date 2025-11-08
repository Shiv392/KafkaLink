const user_schema = require('../db_schema/user_schema');
const bcrypt_hash = require('../utils/bcrypt_hash');

const signup_model = async(name, email, password) =>{
    try{
     const user = await user_schema.findOne({where : {user_email : email}});
     if(user){
        return {user_exits : true};
     }

     else{
        const hash_password = await bcrypt_hash(password);
        const new_user = await user_schema.create({
            user_name : name,
            user_email : email,
            user_password : hash_password
        });

        return {new_user};
     }
    }
    catch(err){
    //throw error so that other catch can use this ---------->
    throw err;
    }
}

module.exports = signup_model;