const leer = require("prompt-sync")();

function main() {
    let nombreIngresado = "def nombre";
    let colorIngresado = "def color"

    console.log("Ingresa tu nombre");
    nombreIngresado = leer();
    console.log("Ingresa un color favorito");
    colorIngresado = leer();

    console.log("Hola "+ nombreIngresado +"! tu color fav es "+colorIngresado);
}

main();