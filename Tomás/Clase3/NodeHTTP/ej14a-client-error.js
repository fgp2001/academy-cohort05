const http = require('node:http');

const server = http.createServer((req, res) => res.end('ok'));

// Se dispara cuando llega algo que no es una petición HTTP válida
server.on('clientError', (err, socket) => {
  console.log('Petición malformada:', err.code);

  if (err.code === 'ECONNRESET' || !socket.writable) {
    return; // el cliente ya se fue
  }
  // Acá no hay req ni res: escribimos la respuesta HTTP "a mano" en el socket
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(3000, () => console.log('http://localhost:3000'));
