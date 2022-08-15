const express = require('express');
const routes = express();
const metods = require('./emit_controller'); 


// Rutes
routes.get("/send/message",metods.send_all);

module.exports = routes;