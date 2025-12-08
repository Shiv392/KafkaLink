const redis_client = require('./config/redis_config');

const connect_redis = async()=>{
try{
await redis_client.connect();
console.log('redis connection done ✌️✌️✌️✌️')
}
catch(err){
    console.log('redis connection err--->', err);
}
}
if(!redis_client.isOpen){
connect_redis();
}

redis_client.on('error', ()=>{
    console.log('redis connection error');
})