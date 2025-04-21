const leer = require("prompt-sync")();

function main() {
    let rangoMaximo = -1;
    let numeroAleatorio = -1;
    
    console.log("Ingresa un rango maximo \n \tpara generar un numero aleatorio entre 0 y el maximo");
    console.log("");
    rangoMaximo = Number(leer());

    numeroAleatorio = generarEnteroAleatorio(rangoMaximo);

    console.log("Numero generado aleatoriamente: "+ numeroAleatorio);
}

main();

function generarEnteroAleatorio(max) {
    return Math.floor(Math.random() * (max + 1));
}