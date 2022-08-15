//SocServer
// instance seerver
const app = require('./../app');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const controller = require('./websock_controller');
//ResponseSock
io.on('connection', client => {
    // here you would do socket authentication
    console.log("Persona Conectada");
    //event disconect
    client.on('disconnect', () => {
        console.log("cliente desconectado");
    });
    //event message
    client.on('mensaje', (payload) => {
        console.log("cliente emitiendo",payload);
        io.emit('mensaje',{admin:"Nuevo Mensaje"});
    });
});
controller.io = io;
module.exports = {
    server,
};
