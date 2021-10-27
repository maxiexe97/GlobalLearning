/*  COMPLETO
    Hay un arreglo con varios números donde todos son iguales excepto uno. Haga una función que lo identifique
*/
const array=[1,1,1,1,1,8];
findUnique(array);

function findUnique(array){
    const element=array.find(item=> array.indexOf(item)==array.lastIndexOf(item));
    console.log(element);
}