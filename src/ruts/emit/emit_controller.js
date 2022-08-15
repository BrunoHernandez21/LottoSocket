//functions
const db = require('./../../db/db');
var controller = require('./../../websock/websock_controller');
const send_all = async (req, res) => {
    try {
         await db.query("SELECT * FROM eventos_videos", function (error, results, _fields) {
            if (error) throw error;
            controller.io.emit('videos',{items:results});
            res.json({"resp":"emitido correctamente"});
          });          
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

module.exports = {
    send_all,
};