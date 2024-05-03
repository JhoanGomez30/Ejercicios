//Camila acaba de comenzar su nuevo rol como Desarrolladora Java Junior
//en un banco. Ella está trabajando en cuentas de clientes para una nueva
//aplicación de banca móvil. Se le pide que implemente una función que
//muestre la cantidad mayor de tres cantidades en la pantalla de inicio.
 


while(true){
    let cantidad1 = parseFloat(prompt("Ingresá la primer cantidad: "))
    let cantidad2 = parseFloat(prompt("Ingresá la segunda cantidad: "))
    let cantidad3 = parseFloat(prompt("Ingresá la tercer cantidad: "))

    if(Number.isInteger(cantidad1) && Number.isInteger(cantidad2) && Number.isInteger(cantidad3)){
        
        break;

    }else{
        console.log("Los valores ingresados no es correcto");
    }
}
 
let cantidades = [cantidad1, cantidad2, cantidad3]
 
console.log(cantidades)
 
function mostrarMayor(cantidades) {

    if (cantidades[0] > cantidades[1] && cantidades[0] > cantidades[2]) {
        return "La cantidad mayor es: " + cantidades[0]
    } else if (cantidades[1] > cantidades[0] && cantidades[1] > cantidades[2]) {
            return "La cantidad mayor es: " + cantidades[1]
    } else {
    return "La cantidad mayor es: " + cantidades[2]
    }
}
 
console.log(mostrarMayor(cantidades))




//ejercicio 1
let incremento = 0;

function duplicados(array, valorBuscar){
    for(let i = 0; i< array.length; i++){
        if(array[i] == valorBuscar){
            incremento++;
        }else{
            continue;
        }
    }
    
    return incremento
}   

let array = ["Mateo", "Edwars", 3, 6, 9, 3];

console.log("valor buscado se repite:" + duplicados(array, "Mateo"))