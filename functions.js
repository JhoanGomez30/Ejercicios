//Ejercicio 4

function crearNombreCompleto (nombre, apellido){

    if(nombre === null && apellido === null){
        alert("ingrese su nombre y apellido")
    }else if(apellido === null){
        return nombre
    }else if(nombre === null){
        return apellido
    }else{
        return nombre+ " " + apellido
    }
}

console.log(crearNombreCompleto("", "Gomez"))

//EJERCICIO 6 FUNCION FLECHA
const nombre = (nombre)=> console.log("Hola " + nombre)
nombre("Yulieth")

//EJERCICIO 7
const areaTriangulo = (base, altura) => (base*altura)/2;

console.log(areaTriangulo(10, 15))

//EJERCICIO 8

const esMayorEdad = (edad) => {
    if(edad >= 18){
        return true
    }else{
        return false
    }
}

console.log(esMayorEdad(50))


//EJERCICIO 9
const factorial = (numero) => {
    if(numero > 0){
        return numero * factorial(numero - 1);
    }else{
        return 1
    }
}

console.log("el factorial de 5 es: " + factorial(5))

//Ejercicio 10

const contadorRegresivo = (num) => {
    while(num > 0){
        console.log(num)
        return contadorRegresivo(num-1)
    }
}

contadorRegresivo(10)