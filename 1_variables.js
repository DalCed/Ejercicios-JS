/* 
    Escribe por lo menos 5 variables con diferentes identificadores (nombre)
    3 constantes con diferentes identificadores
    
    asignales un valor diferente a cada una, recuerda que existen diferentes tipos de datos y de cosas que puedes guardar en una variable
    intenta por lo menos guardar uno de las siguientes cosas:
    -un entero
    -un flotante (o real) 5.15
    -un booleano
    -una cadena
    -un arreglo
    -un objeto

    imprime tus variables y constantes en la consola

    finalmente modifica el valor de dos variables y vuelvelas a mostrar en consola
*/
/******Programa FCII */
//Escribe por lo menos 5 variables con diferentes identificadores (nombre)
let nombre ="Dalai";
let edad=27;
let estadoCivil=false;
let estatura = 1.80;
let calificaciones =[8,6,9,10,10];

//3 constantes con diferentes identificadores
const nacionalidad ="mex";
const sexo= "masculino";
const datos ={
    nombre: "Oscar Dalai",
    edad: 27,
    estadoCivil: false,
    estatura: 1.80,
    calificaciones: [8,6,9,10,10]
}

// imprime tus variables y constantes en la consola

let consola=[nombre, edad, estadoCivil,estatura, calificaciones, nacionalidad,sexo, datos];

for (i=0;i<consola.length;i++){
    console.log(consola[i]);
}

/*
console.log(consola[0]);
console.log(consola[1]);
console.log(consola[2]);
console.log(consola[3]);
console.log(consola[4]);
console.log(consola[5]);
console.log(consola[6]);
console.log(consola[7]);
*/
//finalmente modifica el valor de dos variables y vuelvelas a mostrar en consola
edad =28;
estadoCivil=true;

console.log(edad);
console.log(estadoCivil);
