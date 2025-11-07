const bcrypt = require('bcrypt');

const bcrypt_hash = async(value)=>{
    try{
    const hash_value = await bcrypt.hash(value, Number(process.env.BCRYPT_HASHVALUE));

    return hash_value;
    }
    catch(err){
        throw err;
    }
}

module.exports = bcrypt_hash;