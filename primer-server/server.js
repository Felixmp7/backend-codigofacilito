const http = require('http');

// crear server

const responderPetición = (request,response) => {
  response.end('Hola Mundo')
}

let server = http.createServer(responderPetición);

server.listen(3000);