
//----------------------------------Nombre----------------------------//

let nombreIngresado = prompt("Ingrese su nombre a continuacion:");

while (nombreIngresado === null || nombreIngresado === "" ) {
    if (nombreIngresado === null) {
        alert("Cancelaste la operacion \nIntenta nuevamente completando el campo.");
        nombreIngresado = prompt("Ingrese su nombre a continuación:");
    } else {
        alert("Recibimos el campo vacio. \nIntenta nuevamente completando el campo.");
        nombreIngresado = prompt("Ingrese su nombre a continuación:");
    }
}

alert("Excelente " + nombreIngresado + "\nProsigamos con verificación");

//--------------------------------Edad-----------------------------//

let edad = prompt("Ingrese su edad");

 while (isNaN(edad) || edad === "") {
        alert("Por favor, ingrese su edad en números.");
        edad = prompt("Ingrese su edad.\nIntente una vez mas o actualize la pagina.");
    }
    if (edad === null) {
        alert("Cancelaste la operacion \nIntenta nuevamente completando el campo.");
        edad = prompt("Ingrese su edad.\nIntente una vez mas o actualize la pagina.");
        } 

    if (edad >= 18) {
        alert("Excelente tiene la edad necesaria para seguir.");
    } 
    else {
        alert("Eres menor para proseguir, vuelve cuando seas mayor de edad.");
        prompt = ("")
    }

    //--------------------------------LISTA-----------------------------//
       
const productos = ["Glock", "M4", "Knife", "Bomb", "SALIR"];

let lista;

while (true) {
    lista = prompt("Por favor, elige un producto:\n1- Glock\n2- M4\n3- Knife\n4- Bomb\n5- SALIR ");

    if (isNaN(lista)) {
        alert("Por favor, utiliza números para continuar");
        continue;
    }

    lista = parseInt(lista);

    if (lista < 1 || lista > 5) {
        alert("Por favor elige SOLO entre las opciones 1 y 5 de la lista");
        continue;
    }
    break;
}

//----------------Cree variable MENSAJE para no repetir el mensaje -----------------------------//


let mensaje = `Elegiste una de estas armas ${productos[lista - 1]}`;

switch (lista) {
    case 1:
        alert(mensaje);
        break;
    case 2:
        alert(mensaje);
        break
    case 3:
        alert(mensaje);
        break
    case 4:
        alert(mensaje);
        break
    case 5:
        alert("Gracias por Ingresar");
    default:
        break;
}