/*  COMPLETO
    Haga una función que reciba un número y retorne un arreglo que tenga el tamaño del número recibido.
    El contenido del arreglo deben ser números desde el 0 hasta el número recibido -1 (0 al n-1) 
*/
const n=6;
console.log(">> Number received: "+n);
createArray(n);

function createArray(n){
    const array=[];
    for(var i=0; i<n; i++){
        array.push(i);
    }
    console.log("Array: ");                                                              
    console.log(array);
}
