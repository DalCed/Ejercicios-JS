/* Busca la sintaxis de una funcion y realiza el ejemplo de una */

let opcion=window.prompt("Bienvenido al menu de opciones, seleccione una opcione y de clic en continuar\n"+"a. Sumar\n"+"b. restar\n"+"c. Multiplicar\n"+"d. Dividir\n" +"s. Salir\n");
//opciones
switch(opcion){
    case "a": alert("Has seleccionado la sumaa");
                suma();        
    break;
    case "b": alert("Has seleccionado la Resta");
    break;
    case "c": alert("Has seleccionado la Multiplicacion");
    break;
    case "d": alert("Has seleccionado la División");
    break;
    default: alert("Opción invalida, gracias por usar el programa");
    break;
}
//Función
function suma(){
    let elemento1=window.prompt("ingrese el primer elemento");
    let elemento2=window.prompt("ingrese el segundo elemento");
    let resultadoSuma= parseInt(elemento1)+ parseInt(elemento2);
    alert("El resultado de la suma es: "+ resultadoSuma);
}


/* Bonus */
