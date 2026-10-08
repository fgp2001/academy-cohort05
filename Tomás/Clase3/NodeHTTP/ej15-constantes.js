// No necesita servidor
const http = require('node:http');

console.log(http.STATUS_CODES[404]);
console.log(http.STATUS_CODES[201]);
console.log(http.METHODS.length, 'métodos, por ejemplo:', http.METHODS.slice(0, 5));
console.log('Tamaño máximo de headers:', http.maxHeaderSize, 'bytes');
