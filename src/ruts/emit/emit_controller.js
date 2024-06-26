//functions
const db = require('./../../db/db');
var controller = require('./../../websock/websock_controller');
const send_all = async (req, res) => {
    try {
         await db.query("SELECT * FROM videos_estadisticas ORDER BY fecha", function (error, results, _fields) {
            if (error) {
                res.json({"resp":error});
            };
            controller.io.emit('estadisticas',{items:results});
            res.json({"resp":"emitido correctamente"});
          });          
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};
const send_to = async (req, res) => {
    var body = req.body;
    var user = body.user || 0;
    if(user==0){
        res.json({"resp":"Usuario es requerido"});
        return;
    }
    var titulo = body.titulo || '';
    var des = body.descripcion || '';
     controller.io.to(user).emit('notificaciones',{titulo:titulo,descripcion:des});
     res.json({"resp":"emitido correctamente"});
};

module.exports = {
    send_all,
    send_to,
};