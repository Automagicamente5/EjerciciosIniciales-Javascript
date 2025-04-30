const leer = require("prompt-sync")();

function main() {
     let numeroIngresado1 = 0;
     let numeroIngresado2 = 0;
     let opcIngresada = "def opc ingresada";

     console.log("Queres:\t [M]multplicar o D-dividir?");
     opcIngresada = leer().toUpperCase();
     
     if ( opcIngresada === "M" ) {
          console.log("Ingresa un numero");
          numeroIngresado1 = Number(leer());
          console.log("Ingresa otro numero");
          numeroIngresado2 = Number(leer());
          console.log("Multiplicando");
          console.log("Resultado: "+ (numeroIngresado1 * numeroIngresado2));
     }else if(opcIngresada === "D"){
          console.log("Ingresa un numero");
          numeroIngresado1 = Number(leer());
          console.log("Ingresa otro numero");
          numeroIngresado2 = Number(leer());
          console.log("Dividiendo");
          console.log("Resultado: "+ (numeroIngresado1 / numeroIngresado2));
     }else{
          console.log("Error: opcion no valida");
     }
}

main();