const jwt = require('jsonwebtoken');

const jwt_verify = (token)=>{
return new Promise((resolve, reject)=>{
try{
const verify =  jwt.verify(token, process.env.JWT_SECRET_KEY);
resolve(verify);
}
catch(err){
    reject(err);
}
})
}

module.exports = jwt_verify;