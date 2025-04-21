const leer = require("prompt-sync")();

function main() {
     let contenedor = "def contenido";
     //leer
     contenedor = leer();
     //escribir
     console.log("Mensaje ingresado:" + contenedor );
}

main();