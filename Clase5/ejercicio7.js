/*  COMPLETO
    Dado un arreglo de números entero, encuentre el mayor producto posible dado a partir de números adyacentes
*/

array=[6,4,8,1,2,7];
mayPro(array);

function mayPro(array){
    var prod;
    for(var i=0; i<array.length;i++){
        if(i<2) prod = array[0] * array[1];
        else{
            if( (array[i]*array[i-1]) > prod) prod = (array[i]*array[i-1]);
        }
    }
    console.log(prod);
}

