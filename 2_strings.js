/* Crea dos variables que tengan guardada una cadena de texto (string) */
let cadena1= "hola mundo";
let cadena2="como les va?";
/* Busca en internet para que sirve cada uno de los siguientes métodos (y una propiedad) y realiza un ejemplo de cada uno */

//length
//La propiedad length de un objeto String representa la longitud de una cadena, en unidades de código
console.log(cadena1.length);
console.log(cadena2.length);
//indexOf()
//El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
var array = [2, 9, 9];
console.log(array.indexOf(2));     // 0
console.log(array.indexOf(7));     // -1
console.log(array.indexOf(9, 2));  // 2
console.log(array.indexOf(2, -1)); // -1
console.log(array.indexOf(2, -3)); // 0
console.log(array.indexOf(9, 1,)); // 1
//includes()

//El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false