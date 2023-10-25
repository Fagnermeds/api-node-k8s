require('dotenv').config();
const http = require('node:http');

const PORT = process.env.PORT;
const server = http.createServer((req, res) => {
  res.end('Hello K8s');
});

server.listen(PORT, console.log(`Running at ${PORT}`));