const {createClient} = require('redis');

const redis_client = createClient({
    url : process.env.REDIS_URL || 'redis://127.0.0.1:6379'
});

//log error 
redis_client.on('error', (err)=> console.log('redis error ', err));

//connection
redis_client.on('connect', ()=> console.log('redis connection done'));

(async()=>{
    await redis_client.connect();
})();

module.exports = redis_client;