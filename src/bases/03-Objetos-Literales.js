const persona = {

    nombre: "Sergio",
    apellido: "Salmeron",
    edad: 30,
    direccion: {
        ciudad: 'Mexico',
        zip: 1523,
    }
};

console.log(persona);

console.log(persona.nombre);
console.log(persona.edad);
console.log({persona: persona});
console.table(persona);


//Esto es una copia de referencia en memoria
const persona2 = persona;


persona2.nombre = 'Omar';

console.table(persona);
console.table(persona2)


//Esto es una clonacion de objecto

const persona3 = {...persona};
persona3.nombre = 'Omar Cloned';

console.table(persona);
console.table(persona3)





