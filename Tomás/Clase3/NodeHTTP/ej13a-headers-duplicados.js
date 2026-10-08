const http = require('node:http');

const server = http.createServer((req, res) => {
  console.log('headers:        ', req.headers);
  console.log('headersDistinct:', req.headersDistinct);
  console.log('rawHeaders:     ', req.rawHeaders);
  console.log('-----');
  res.end('mirá la terminal');
});

server.listen(3000, () => console.log('http://localhost:3000'));
