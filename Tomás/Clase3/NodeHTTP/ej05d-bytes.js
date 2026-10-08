// Este ejemplo no usa servidor: se ejecuta y termina.
const texto = 'Canción 🎵';

console.log('Caracteres:', texto.length);
console.log('Bytes:     ', Buffer.byteLength(texto)); // este va en Content-Length
