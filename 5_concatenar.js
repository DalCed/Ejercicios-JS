/* crea dos variables y guarda dentro de la primera tu nombre y en la seguda tu correo (strings) */
let nombre= "Oscar Dalai";
let correo= "dalaicedillo@hotmail.com";

/*Busca como concatenar en Javascript*/
    //Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.

/*finalmente imprime una cadena concatenada que de como resultado el siguiente mensaje en consola:

Hola mundo, mi nombre es: (tu nombre guaradado en la primera variable) y mi correo es: (variable que tiene tu correo)
*/
console.log("hola mundo, mi nombre es: " + nombre + "y mi correo es: " + correo);



/* investiga que es un template string  y realiza el ejercicio anterior con una template string */
    //Las plantillas de texto (o Template Strings) son cadenas literales de texto incrustadas en el código fuente que permiten su interpolación mediante expresiones. 
    
    //Las plantillas de cadena de caracteres pueden contener marcadores, identificados por el signo de dólar y envueltos en llaves (${expresión}). Las expresiones contenidas en los marcadores, junto con el texto entre ellas, son enviados como argumentos a una función.
    console.log('hola mundo, mi nombre es:  ${nombre} y mi correo es: ${correo}');