const jsonServer = require('json-server');
const server = jsonServer.create();
// const axios = require('axios');
// const cron = require('node-cron');

const { PORT = 8080 } = process.env;

server.use(jsonServer.defaults());
server.use(jsonServer.router('data/db.json'));

server.listen(PORT);

// cron.schedule('*/14 * * * *', () => {
//   axios
//     .get('https://flashcards-backend-ju7k.onrender.com')
//     .then((response) => console.log(`Status: ${response.status}`))
//     .catch((error) => console.error(error));
// });
