//Ejercicio 1

let numero = 5;

if(numero % 2 == 0){
    console.log("el numero es par");
}else{
    console.log("el numero es impar");
}


//Ejercicio 2

let num1 = 9;
let num2 = 8;
let num3 = 10;

let numMayor;
if((num1 > num2) && (num1 > num3)){
    numMayor = num1;
}else if ((num3 > num1) && (num3 > num2)){
    numMayor = num3;
}else{
    numMayor = num2;
}

console.log("el numero mayor es: " + numMayor);

//Ejercicio 3
let year = 2006;

if((year % 4 == 0) && !(year % 100 == 0) || (year % 400 == 0)){
    console.log("El año " +year+" es bisciesto");
}else{
    console.log("El año no es bisciesto")
}

//Ejercicio 4
let numeroAc4 = 0;

if(numeroAc4 > 0){
    console.log("el numero es positivo");
}else if(numeroAc4 < 0){
    console.log("el numero es negativo");
}else{
    console.log("el numero es cero");
}

//ejercicio 5
let edad = 45;
let monto = 500000;
let totalCompra = 0;

if(edad < 18){

    console.log("El descuento es del 10% "+monto*0.10 + " ,el valor total es " + (monto - (monto*0.10)));
}
else if(18 > edad < 65){
    console.log("El descuento es del 15% "+monto*0.15 + " ,el valor total es " + (monto - (monto*0.15)));
}else{
    console.log("Usted no tiene descuento. El valor total es: "+ monto);
}

//Ejercicio 6
let num = 6;
let numA6 = 3;

if(num % numA6 == 0){
    console.log("El numero "+num+" es multiplo de "+numA6);
}else if (numA6 % num == 0){
    console.log("El numero "+numA6+" es multiplo de "+num);
}else{
    console.log("los numeros no son multiplos");
}

// Ejercicio 7
let numero7 = 18;

if((numero7 % 3 == 0) && (numero7 % 5 == 0)){
    console.log("El numero es divisible por 3 y 5");
}else{
    console.log("el numero no es divisible por 3 ni por 5");
}

//Ejercicio 8
let edad1 = 17;

if(16 < edad1 < 18){

    console.log("Puede ingresar acompañado de alguien mayor");
}
else if(edad < 16){
    console.log("Puede ingresar");
}else if (edad > 18){
    console.log("Puede ingresar");
}
