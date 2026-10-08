const http = require('node:http');

// Creamos el servidor sin función...
const server = http.createServer();

// ...y escuchamos el evento 'request' por separado. Hace exactamente lo mismo.
server.on('request', (req, res) => {
  res.end('ok');
});

server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
