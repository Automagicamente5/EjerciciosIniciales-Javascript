const leer = require("prompt-sync")();

const MULTIPLICADOR = 2;

function main() {
     let numeroIngresado = 0;

     console.log("Ingresa un numero a duplicar");
     numeroIngresado = Number(leer());
     console.log( numeroIngresado * MULTIPLICADOR );
}

main();