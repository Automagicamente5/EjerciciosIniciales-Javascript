const leer = require("prompt-sync")();

const MAX_INTENTOS = 10;
const NUMERO_SECRETO_DEF = 4;
const MAX_NUM_ALEATORIO = 30;

function main() {
    let numeroIngresado = 0;
    let numeroSecreto = NUMERO_SECRETO_DEF;

    numeroSecreto = azar(MAX_NUM_ALEATORIO);

    console.log("El numero secreto esta entre 0 y "+ MAX_NUM_ALEATORIO);

    for (let i = 0; i < MAX_INTENTOS; i++) {
        console.log("Intenta adiviar el numero secreto");
        numeroIngresado = Number(leer());
        switch (numeroIngresado) {
            case numeroSecreto:
                console.log("ADIVINASTE!");
                i = MAX_INTENTOS;//corte interno
                break;
            default:
                /* if (i === MAX_INTENTOS - 1) {
                    console.log("Perdiste! :(");
                } else {
                    console.log("Intenta otra vez!");
                } */
                switch (i) {
                    case (MAX_INTENTOS - 1):
                        console.log("Perdiste! :(");
                        break;
                    default:
                        console.log("Intenta otra vez!");
                        break;
                }
        }
    }
}

main();

function azar(max) {
    return Math.floor(Math.random() * (max + 1));
}