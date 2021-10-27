/*  COMPLETO
    Haga una función que siempre elimine el primer elemento del arreglo
*/

const array=[11,22,33,44,55,66];
deleteElem(array);

function deleteElem(miArray){
    console.log("Arreglo original: "+ miArray);
    miArray.shift();
    console.log("Arreglo modificado: "+ miArray);
}