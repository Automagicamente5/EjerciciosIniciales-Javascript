const leer = require("prompt-sync")();

function main() {
    let numIngresado1 = 0;
    let numIngresado2 = 0;
    let resultadoSuma = 0;

    console.log("Ingresa un numero a sumar");
    numIngresado1 = Number(leer());
    console.log("Ingresa otro numero a sumar");
    numIngresado2 = Number(leer());

    resultadoSuma = numIngresado1 + numIngresado2;
    console.log("El resultado de la suma es: "+ resultadoSuma);

    // caso donde no necesito el resultado luego de esta linea
    //console.log("El resultado de la suma es: "+ (numIngresado1 + numIngresado2));
}

main();