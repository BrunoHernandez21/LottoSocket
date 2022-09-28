//SocServer
// instance seerver
const app = require('./../app');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const controller = require('./websock_controller');


//ResponseSock
io.on('connection', client => {
    console.log("Persona conectada");
    //event disconect
    var id = 0;    
    client.on('onInitLoad', (payload) => {
        id = payload['usuario_id'];
        client.join(id);   
    });
    client.on('disconnect', () => {
        console.log("cliente desconectado "+id);
    });
});
controller.io = io;
module.exports = {
    server,
};
