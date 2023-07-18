const jsonServer = require('json-server');
const server = jsonServer.create();

const { PORT = 8080 } = process.env;

server.use(jsonServer.defaults());
server.use(jsonServer.router('data/db.json'));

server.listen(PORT);
