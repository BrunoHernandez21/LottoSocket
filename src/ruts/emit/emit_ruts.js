const express = require('express');
const routes = express();
const metods = require('./emit_controller'); 


// Rutes
routes.get("/send/estadisticas",metods.send_all);
routes.post("/send/notificacion",metods.sned_to);

module.exports = routes;