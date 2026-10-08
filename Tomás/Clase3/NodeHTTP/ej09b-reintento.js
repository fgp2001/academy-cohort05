// Necesita servidor-pruebas.js corriendo en otra terminal
const http = require('node:http');

const agent = new http.Agent({ keepAlive: true });

function peticionConReintento(intentos = 3) {
  const req = http.get('http://localhost:3000/', { agent }, (res) => {
    console.log('Respuesta OK, código', res.statusCode);
    res.resume();
    res.on('end', () => agent.destroy());
  });

  req.on('error', (err) => {
    // Solo reintentamos si la conexión era reutilizada y el servidor la cortó
    if (req.reusedSocket && err.code === 'ECONNRESET' && intentos > 1) {
      console.log('La conexión vieja estaba cerrada, reintento...');
      peticionConReintento(intentos - 1);
    } else {
      console.error('Error:', err.message);
    }
  });
}

peticionConReintento();
