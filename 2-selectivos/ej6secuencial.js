const leer = require("prompt-sync")();

const RANGO_MAX = 10;


function main() {
    let numeroAleatorio = -1;
    let numeroIngresado = -1;

    numeroAleatorio = azar(RANGO_MAX);

    console.log("Ingresa un numero entre 0 y " + RANGO_MAX);
    numeroIngresado = Number(leer());

    if (numeroIngresado < numeroAleatorio) {
        console.log("CARA");
    } else if (numeroIngresado >= numeroAleatorio) {
        console.log("CRUZ");
    }
}



main();

function azar(max) {
    return Math.floor(Math.random() * (max + 1));
}