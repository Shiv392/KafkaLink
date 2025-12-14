const http = require('http');
const app = require('./config/server_config');
const {init_websocket} = require('./config/websocket_config');

const server = http.createServer(app);

init_websocket(server);

server.listen(Number(process.env.SERVER_PORT), () => {
    console.log(`🚀 Server started at http://localhost:${process.env.SERVER_PORT}`);
});