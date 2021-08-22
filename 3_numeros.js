/*Numeros
Declara dos variables y guarda en una de ellas un numero entero y en la otra uno flotante
crea una tercera variable en donde guardaras los resultados de las operaciones realizadas con tus dos primeras variables
imprime el resultado de cada operacion
las operaciones a realizar son: +,-,*,/ y % (escribe un comentario explicando que hace esta ultima operación)
*/
let entero=3;
let decimal =3.1416;
let resultado=[];
//suma
resultado[0]= entero + decimal;
//resta
resultado[1]= entero - decimal;
//Multiplicación
resultado[2]= entero * decimal;
//división
resultado[3]= entero/decimal;
//Módulo
    //La operación modulo devuelve el residuo de una división
resultado[4]= entero %decimal;
//Imprimir en pantalla
for(let i=0; i<resultado.length;i++){
    console.log(resultado[i]);
}
