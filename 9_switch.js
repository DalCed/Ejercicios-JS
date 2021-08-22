/* 

Con la funcion prompt() envia un mensaje al usuario mostrandole un menu como el siguiente:

Bienvenido al menu de opciones, seleccione una opcione y de clic en continuar
a.Sumar
b.Restar
c.Multiplicar
d.Dividir
?.Salir

la funcion prompt guardara lo que el usuario escribio.*/
let opcion=window.prompt("Bienvenido al menu de opciones, seleccione una opcione y de clic en continuar\n"+"a. Sumar\n"+"b. restar\n"+"c. Multiplicar\n"+"d. Dividir\n" +"s. Salir\n");
/*Mediante la estructura de control switch si el usuario coloca cualquiera de las opciones validas
(a, b, c, d) le mostraras mendiante un alert() el siguiente mensaje:
a -> Has seleccionado la Suma
b -> Has seleccionado la Resta
c -> Has seleccionado la Multiplicacion
d -> Has seleccionado la División
*/
switch(opcion){
    case "a": alert("Hs seleccionado la suma");
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



/*En caso de poner cualquier otra cosa mostraras en siguiente mensaje:
Opción invalida, gracias por usar el programa

*/
