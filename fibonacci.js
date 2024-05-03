
/*let array = [0, 1];

*function fibonacci(limite){

    for(let i = 2; i < limite; i++){

        if(array[array.length-1] + array[array.length-2] <= limite){
            array[i] = array[i-1] + array[i-2];
        }else{
            break;
        }
        
    }
}

fibonacci(10)

console.log(array);*/


let  filas = 5;

function dibujarPiramide(nFilas){

    for(let i = 1; i <= nFilas; i++){    
        
        let linea = "";
        for(let n = 1; n <= nFilas-i; n++){
            linea += " ";
        }

        for(let j = 1; j <= 2*i -1; j++){
            linea += "*";
        }

        console.log(linea)
    }
}

dibujarPiramide(filas);



function imprimirPiramide(filas) {
    // Iterar a través de las filas
    for (let i = 1; i <= filas; i++) {
        let linea = '';

        // Agregar espacios en blanco a la izquierda para alinear los asteriscos
        for (let j = 1; j <= filas - i; j++) {
            linea += ' ';
        }

        // Agregar asteriscos
        for (let k = 1; k <= 2 * i - 1; k++) {
            linea += '*';
        }

        // Imprimir la línea
        console.log(linea);
    }
}

// Llamar a la función e imprimir una pirámide de 5 filas
imprimirPiramide(5);