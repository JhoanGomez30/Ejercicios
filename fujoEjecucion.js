//Funcion 1

// const areaRec = (base, altura) =>{
//     return (base*altura)
// }

// console.log(areaRec(20, 10))

//Ejercicio 2

//EJERCICIO 3
// const numero = (num) =>{
    
//     if(num > 0){
//         return "numero es positivo"
//     }
//     else if(num < 0){
//         return "el numero es negativo"
//     }else{
//         return  "el numero es 0"
//     }
// }

// console.log(numero(0))

//EJERCICIO 4
// const numero = (num1, num2) =>  num1 >num2 ? "el numero 1 es mayor": "el numero 2 es mayor"

// console.log(numero(2, 15))


//EJERCICIO 5

// const diaLaboral = (dia) =>{

//     switch(dia){
//         case "lunes":
//         case "martes":
//         case "miercoles":
//         case "jueves":
//         case "viernes":
//             return "dia laboral"
//         case "sabado":
//         case "domingo":
//             return "dia no laborable"
//     }
// }

// console.log(diaLaboral("lunes"))

//EJERCICIO 6
// let ay = [1, 5, 7, 3, 2, 4, 9, 6, 8, 10]

// const suma = (array) => {

//     let cont = 0
//     let sum = 0;
//     while(cont < array.length ){
//         sum += array[cont]
//         cont++
//     }
//     return sum
// }

// console.log(suma(ay))

//EJERCICIO 7
// let student = {
//     nombre : "jhoan",
//     edad : 20,
//     grado : "junior",
//     institucion : "generation",
// }

// const saludo = (estu) => {
//     console.log("Bienvenido "+ estu.nombre+" al bootcamp java V de" +
//     "${stu.institucion}")
// }

// saludo(student)


//Ejercicio 8

// function cadena(str){
//     return str.trim().length
// }

// console.log(cadena("hola    "))


//EJERCICIO 9

// const obtenerValorAbsoluto = (numero) => Math.abs(numero);

// console.log("Valor ab es: " + obtenerValorAbsoluto(-3))


//EJERCICIO 10
// let array = [1, 5, 7, 3, 2, 4, 10, 9, 6, 8]

// function mayor(ay){
//     let mayor = 0;
//     if(ay !== null){
//         let i= 0;
//         if(ay[i] > mayor){
//             mayor = ay[i]
//         }
//         i++
//         let del = ay.shift
//         return mayor()
//     }
// }

// console.log(mayor(array))


//EJERCICIO 11


//EJERCICIO 12

// function diaWeek(fecha){
//     const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
//     const dia = fecha.getDay(); // Obtenemos el número del día de la semana (0 para Domingo, 1 para Lunes, etc.)
//     return diasSemana[dia];
// }

// var date = new Date("May 6, 2024 17:15:30");

// console.log(diaWeek(date))


//EJERCICIO 13
// let articulos = [
//     {
//         nombre: "peras",
//         cant: 5
//     },
//     {
//         nombre: "leche",
//         cant: 1
//     },
//     {
//         nombre: "arroz",
//         cant: 2
//     },

// ] 

// function contar(lista){
//     return articulos.length    
// }

// console.log(contar(articulos))


//EJERCICIO 14

let array = [1, 5, 7, 3, 2, 4, 10, 9, 6, 8]

const num = array.reduce((acumular, valorActual) => acumular + valorActual)

const n = (nm) =>{
    if(nm % 2 === 0){
        return "el numero es par"
    }else {
        return "el numero es impar"
    }
}


console.log(n(num))