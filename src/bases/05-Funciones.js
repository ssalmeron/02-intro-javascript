//DEfinir funcion
function saludar(nombre) {
    return `Hola, ${nombre}`
}

console.log(saludar('Sergio'))


//Mejor forma de definir funcion. asignar a una funcion

const saludo = function (nombre) {
    return `Hola, ${nombre}`
}

console.log(saludo)


//Funcion de flecha , simplificado

const saludo2 = (nombre) => `Hola, ${nombre}`;

console.log(saludo('Sergio'))
console.log(saludo2('Sergio'))

//Sin argumentos

const saludo3 = () => `Hola Mundo`;
console.log(saludo3())

//para regresar objecto se envuelve en paretesis
const saludo4 = () => ({
    uid: '12345',
    username: 'salmito'
});

console.log(saludo4());

//Ejercicio

function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC',
        username: nombre,
    }
}

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);


//1.Transformar a funcion de flecha
//2.Tiene que retornar un objecto implicito
//3. PRobar

//Resultado


const getUsuarioActivo2 = (nombre) => ({
    uid: 'ABC',
    username: nombre,
})

console.log(getUsuarioActivo2('Fernando'));


