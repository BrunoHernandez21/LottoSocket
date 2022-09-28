// Load Server config
require('dotenv').config();
// instance webSock
const {server} = require('./src/websock/websock');
// db conection
const conexion = require('./src/db/db');
//Start Database
conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Identificador de la base de datos ' + conexion.threadId);
    //StartServer
    server.listen(process.env.PORT, (err) => {
        if (err) throw new Error(err);
        console.log("Server run on Port: %d",process.env.PORT)    
    });
});

////
// list rutes 
// http://187.213.28.214:25567/api/v1/emit/send/message
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
