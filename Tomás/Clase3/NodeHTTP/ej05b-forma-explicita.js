const http = require('node:http');

const server = http.createServer((req, res) => {
  const cuerpo = 'hola mundo';

  // writeHead manda el código y los headers de una sola vez
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Content-Length': Buffer.byteLength(cuerpo),
  });
  res.end(cuerpo);
});

server.listen(3000, () => console.log('http://localhost:3000'));
