/*  COMPLETO
    Dado un arreglo de números enteros, encuentre la menos suma posible entre ellos
*/
array= [3,6,4,1,7,2,2,7];
minSum(array);

function minSum(array){
    const value1=Math.min(...array);
    array.splice(array.indexOf(Math.min(...array)),1);
    
    const value2=Math.min(...array);

    console.log("La suma mínima es: "+ (value1+value2));
}

//Math.max(...array)    MAXIMO
//Math.min(...array)    MINIMO