

const http = require('http');
const {usersController} = require('./usersController');

process.on('unhandledRejection', function(reason, p) {
    debugger
    console.log(reason, p);
});
const cors = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return true
    }
    return false
};

const server = http.createServer( (req, res) => {

    if (cors(req, res)) return;

    switch (req.url) {
        case '/':
            res.write('HOME');
            break;
        case '/users':
            usersController(req, res);
            break;
        case '/lessons':
            res.write('LESSONS');
            break;
        default:
            res.write('PAGE NOT FOUND');
    }

});

server.listen(3001);