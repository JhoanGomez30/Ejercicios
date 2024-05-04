/*let arr = [5, 3, 8]
let contador = 0;
let posicion = 0;

let sumArr = (array) =>{
    let variable = 0;

    for(let i = array.length-1; i >=0; i--){
        variable += array[i]  
    }
    return variable
}*/

//console.log(sumArr(arr))

let arr = [5, 3, 8]
let contador = 0;
let suma = 0;

let sumArr = (array) =>{
    if(array.length === 0){
        return suma
    }else{
        let cloneArray = array.slice(0, array.length)
        suma += array[contador] 

        let quitar = cloneArray.shift()
        return sumArr(cloneArray)
    }
    
}

console.log(sumArr(arr))