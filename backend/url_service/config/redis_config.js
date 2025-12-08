const {createClient} = require('redis');

const redis_client = createClient({
    url : 'redis://localhost:6379'
});

module.exports = redis_client;