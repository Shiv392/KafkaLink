const {Server} = require('socket.io');

let websocket_io;

const init_websocket = (server)=>{
websocket_io = new Server(server, {
    cors : {
        origin : '*',
        methods : ['GET', 'POST'],
        credentials : true
    }
});

websocket_io.on('connection', (socket)=>{
    console.log('web socket connection done', socket.id);

    socket.on('disconnect', ()=>{
        console.log('websocket dis-connected', socket.id);
    })
});

return websocket_io;
}

const get_websocket_io = ()=>{
    if(!websocket_io){
        throw new Error('Websocket not initialized');
    }

    return websocket_io;
}
module.exports = {init_websocket, get_websocket_io}