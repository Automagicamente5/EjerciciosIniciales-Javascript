const leer = require("prompt-sync")();

function main() {
    let numeroIngresado = 0;
    let resultadoActual = 0;

    for (let i = 0; i < 10; i++) {
        console.log("Ingresa un numero a sumar");
        numeroIngresado = Number(leer());
        //resultadoActual = resultadoActual + numeroIngresado;
        resultadoActual += numeroIngresado;
        console.log("Resultado actual es: " + resultadoActual);
    }
}

main();