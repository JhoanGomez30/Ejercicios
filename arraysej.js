let array = [-1, 4, 8, 2, 6];

function ordenar(){
    for(let i = 0; i < array.length; i++){
        if(array[i] > array[-1-i]){
            let newN = array[-1-i];
             array[-1] = array[i];
             array[i] = newN;
        }
    }
}

ordenar();
console.log(array);

//Ejercicio 2
let cadena = "Hola generation";

console.log(cadena.length);

//Ejercicio 4
let chain = "hola mundo"

function charsAts(texto, indice){
    return texto.charAt(indice);
}
console.log(charsAts("hola mundo", 0));

//Ejercicio 6
function permiso(old){
    if(old < 18){
        let faltan = 18 - old ;
        return console.log("Estas muy pelado, te faltan "+ faltan + " años, \nlos cumpliras en " + (2024 + faltan));
    }else{
        return console.log("Puedes ingresar");
    }
}

permiso(15);

//ejercicio 8
let texto = prompt("ingresa un texto");

let opcion = parseInt(prompt("Elige la opcion que quieres realizar: 1. Mayusculas    2. Minusculas"));

function format(opt) {
    if(opt == 1){
        console.log(texto.toUpperCase());
    }else{
        console.log(texto.toLowerCase());
    }
}

format(opcion);

//ejercicio 10

//PREGUNTA PROFESOR, parse INT SOLO TOMA EL VALOR NUMERICO DE UNA ENTRADA, ASI SE INGRESEN LETRAS DESPUES
//VA A TOMAR EL PRIMER NUMERO
let number = parseInt(prompt("ingresa un numero"));

let bol = Number.isInteger(number);

console.log(number);
if(Number.isInteger(number)){
    console.log("El valor ingresado es numero");
}else{
    console.log("El valor ingresado no es numero");
}


