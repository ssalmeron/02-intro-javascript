//Arreglos en JS

//Forma de declarar arreglos y definir un tamanio inicial
const arreglo = new Array(100);

console.log(arreglo.length);
//agrega una posicion al arreglo
arreglo.push(1);
console.log(arreglo.length);


//otra forma de declarar arreglos es con []
const arreglo2 = [];
//Agrega los valores al arreglo
arreglo2.push(1);
arreglo2.push(2);
arreglo2.push(3);
arreglo2.push(4);


let arreglo3 = [...arreglo2, 5, 6];

//La funcion map crea un nuevo arreglo, no hace referencia al arrelgo3
const arregloDuplicado = arreglo3.map(function (numero) {
    return numero * 2
});




