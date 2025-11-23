const {v4 : uuidv4} = require('uuid');

const uuid_code = (length)=>{
const hash_code = uuidv4();
return hash_code.replace(/-/g, '').slice(0, length);
}

module.exports = uuid_code;