const http = require('node:http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');

  // writeHead gana: el Content-Type final es text/plain.
  // X-Foo se mantiene porque writeHead no lo pisa.
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('ok');
});

server.listen(3000, () => console.log('http://localhost:3000'));
