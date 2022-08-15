// routes are instantiated before the socket.
// The routes call the socket, for this reason a singleton was created.
class Controller {
    static io;
}

module.exports = Controller;