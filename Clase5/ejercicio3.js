/*  COMPLETO
    Teniendo un arreglo numérico, tenemos que sumarle un número(por parámetro) a cada elemento de nuestro arreglo
*/
const array=[20,30,40,50];
console.log("Original array:");
console.log(array);

const newArray = array.map(item=> item +1);
console.log("Modified array:");
console.log(newArray);
 