// 1. Importamos el módulo http
const http = require('node:http');

// 2. Creamos el servidor. La función se ejecuta cada vez que llega una petición.
//    req = lo que pidió el cliente; res = lo que le vamos a responder
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ mensaje: 'Hola mundo' }));
});

// 3. Lo ponemos a escuchar en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
