const http = require('node:http');

const server = http.createServer({
  headersTimeout: 3000,          // 3 s para recibir los headers
  requestTimeout: 5000,          // 5 s para recibir la petición entera
  keepAliveTimeout: 10000,       // 10 s de conexión inactiva antes de cerrarla
  connectionsCheckingInterval: 1000, // revisar los timeouts cada 1 s (default: 30 s)
}, (req, res) => {
  // Esperamos a recibir el cuerpo completo antes de responder
  req.resume();
  req.on('end', () => res.end('Recibí la petición completa'));
});

server.maxRequestsPerSocket = 100;

server.listen(3000, () => {
  console.log('Servidor con timeouts en http://localhost:3000');
});
