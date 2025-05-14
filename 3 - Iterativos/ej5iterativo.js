const leer = require("prompt-sync")();

function main() {
    let numeroIngresado = 0;
    let resultadoActual = 0;
    let opcIngresada = "def opc ingresada";

    for (let i = 0; i < 3; i++) {
        console.log("Queres [+]sumar o [-]restar?");
        opcIngresada = leer();
        console.log("Ingresa un numero a sumar");
        numeroIngresado = Number(leer());
        //resultadoActual = resultadoActual + numeroIngresado;
        switch (opcIngresada) {
            case "+":
                resultadoActual = numeroIngresado + resultadoActual;
                break;
            case "-":
                resultadoActual = numeroIngresado - resultadoActual;
                break;
            default:
                console.log("Opcion no valida");
        }
        console.log("Resultado actual es: " + resultadoActual);
    }
}

main();