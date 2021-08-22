console.log("Nuevo archivo: " + 2);


const nombre = "Sergio";
const apellido = "Salmeron";

const nombreCompleto = nombre + " " + apellido;

const nombreCompleto2 = 'Hola Mundo';
const nombreCompletoModerno = `${nombre} ${apellido}`;  //Signo como de acento. no comillas simple o doble
//Se llama String template

console.log(nombreCompletoModerno);
console.log(nombreCompleto2);
console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola Mundo ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);