import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';

console.log('Iniciando servidor...');

const html = readFileSync(new URL('index.html', import.meta.url), 'utf8');
const array = [{
  nombre: 'Juan',
  edad: 30
}, {
  nombre: 'María',
  edad: 25
}];

const server = createServer((req, res) => {
  console.log('Petición recibida: ', req.method, req.url);

  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
  } else if (req.method === 'GET' && req.url === '/personas') {
    res.writeHead(200, { 'Content-Type': 'text/json; charset=utf-8' });
    res.end(JSON.stringify(array));
  } else if(req.method === 'POST' && req.url === '/personas'){
    const nuevaPersona = {
      nombre: 'Pedro',
      edad: 28
    };
    array.push(nuevaPersona);
    res.writeHead(201 , { 'Content-Type': 'text/json; charset=utf-8' });
    res.end(JSON.stringify(nuevaPersona))
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Ruta no encontrada')
  }

  console.log('Despues de END');
});




server.listen(9360, '127.0.0.1', () => {
  console.log('Servidor en http://127.0.0.1:9360/');
});
