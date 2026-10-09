import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Hola desde Node');
});

server.listen(9360, '127.0.0.1', () => {
  console.log('Servidor en http://127.0.0.1:9360/');
});
