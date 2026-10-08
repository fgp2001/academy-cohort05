// Necesita servidor-pruebas.js corriendo en otra terminal
const http = require('node:http');

const agent = new http.Agent({
  keepAlive: true,     // guardar conexiones para reutilizarlas
  maxSockets: 10,      // como máximo 10 conexiones simultáneas por servidor
  maxFreeSockets: 5,   // como máximo 5 conexiones libres guardadas
  timeout: 30000,      // 30 segundos
});

// Hace una petición y espera a que termine
function pedir(numero) {
  return new Promise((resolve) => {
    const req = http.get('http://localhost:3000/', { agent }, (res) => {
      res.resume();
      res.on('end', () => {
        console.log(`Petición ${numero}: ¿reutilizó la conexión? ${req.reusedSocket}`);
        resolve();
      });
    });
    req.on('error', (e) => { console.error(e.message); resolve(); });
  });
}

async function main() {
  await pedir(1);
  await pedir(2);
  await pedir(3);
  agent.destroy(); // liberamos las conexiones guardadas
}

main();
