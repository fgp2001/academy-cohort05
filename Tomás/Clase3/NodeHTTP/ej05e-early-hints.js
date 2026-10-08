const http = require('node:http');

const server = http.createServer((req, res) => {
  // 103 Early Hints: le avisa al navegador que vaya bajando el CSS
  res.writeEarlyHints({ link: '</estilos.css>; rel=preload; as=style' });

  // Después mandamos la respuesta real
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>Hola</h1>');
});

server.listen(3000, () => console.log('http://localhost:3000'));
