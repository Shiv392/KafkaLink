const jwt = require('jsonwebtoken');

const jwt_sign = ({payload, expire_time = '24h'})=>{
return new Promise((resolve, reject)=>{
try{
const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn : expire_time});
 resolve(token)
}
catch(err){
    resolve(err);
}
})
}
module.exports = jwt_sign;