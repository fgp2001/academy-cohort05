const http = require('node:http');

const server = http.createServer((req, res) => {
  // Vamos configurando la respuesta; Node la envía recién en res.end()
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Set-Cookie', ['a=1', 'b=2']); // array = el header se envía dos veces
  res.end('No encontrado');
});

server.listen(3000, () => console.log('http://localhost:3000'));
