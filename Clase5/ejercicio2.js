/*  COMPLETO
    Haga una función que solo reciba arreglos con más de 5 elementos y luego elimine los últimos 3
*/

const array=['a','b','c','d','e','f'];
//console.log(array.length);
delete3(array);

function delete3(array){
    console.log(array);
    //console.log(array.length);

    if(array.length<=5){
        console.log("El vector debe tener mas de 5 elementos");
    }else{
        console.log("Tiene mas de 5");
        array.splice(array.length-3,array.length);
        console.log("Arreglo modificado: ");
        console.log(array);
    }
}