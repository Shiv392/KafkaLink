const bcrypt = require('bcrypt');

const bcrypt_compare = async(str1, str2)=>{
    try{
    const match = await bcrypt.compare(str1, str2);
    return match;
    }
    catch(err){
        throw err;
    }
}

module.exports = bcrypt_compare;