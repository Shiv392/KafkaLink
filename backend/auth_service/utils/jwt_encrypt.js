const jwt = require('jsonwebtoken');

const jwt_encrypt = (payload)=>{
return new Promise((resolve, reject)=>{
    try{
     const encryption = jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn : '24h'});

     resolve(encryption);
    }
    catch(err){
        reject(err);
    }
})
}

module.exports = jwt_encrypt;