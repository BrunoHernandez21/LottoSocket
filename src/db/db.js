var mysql = require('mysql');
var conexion= mysql.createConnection({
    host : process.env.DB_HOST|| "",
    database : process.env.DB_NAME|| "",
    port: process.env.DB_PORT|| "",
    user : process.env.DB_USER|| "",
    password : process.env.DB_PASSWORD|| "",
    timezone :"-05:00",
});
module.exports = conexion;