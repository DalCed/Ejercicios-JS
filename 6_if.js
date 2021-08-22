/* utilizando la estructura de control if - else desarrolle

un pequeño programa que le pida su edad al usuario (investigar funcion prompt() para pedir datos)
//El método Window.prompt() muestra un diálogo con mensaje opcional, que solicita al usuario que introduzca un texto.


si la edad que coloca el usuario es mayor a 18 mandara un mensaje (con la funcion alert()) que diga "Ya eres mayor de edad"
en caso contrario mandara un mensaje que diga "Tu aun no cumples la mayoria de edad"*/
while(1){
    let edad=window.prompt("ingrese su edad");
    if(edad<0||edad>100){
        alert("ingrese una edad válida");
    }
    else{
        if (edad<18){
            alert("Tu aun no cumples la mayoria de edad");
        }
        else{
            alert("Ya eres mayor de edad");
        }
    }
    console.log(edad);
}
/*PLUS: mejora el codigo para que el usuario solamente pueda colocar valores entre 0 y 100
*/