const jwt = require('jsonwebtoken');

const jwt_encrypt = ({payload, expire_time='24h'})=>{
return new Promise((resolve, reject)=>{
    try{
     const encryption = jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn : expire_time});

     resolve(encryption);
    }
    catch(err){
        reject(err);
    }
})
}

module.exports = jwt_encrypt;