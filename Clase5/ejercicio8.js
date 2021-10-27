/*  COMPLETO
    Tenemos un grupo de ovejas amenazadas por un lobo y necesitamos saber a cual se está por comer. 
    Consideramos que tenemos a las ovejas y al lobo en un arreglo y que en ese mismo consideramos al último elemento como el primero.
    El lobo solo puede comer a la oveja que tiene a su derecha
*/
const array=["sheep","sheep","sheep","wolf"];
warnSheep(array);

function warnSheep(array){
    const wolfIndex=array.indexOf("wolf");
    const sheepNumber = (array.length-1)- wolfIndex; 

    if(sheepNumber==0) console.log("No sigas comiendo ovejas!");
    else
    console.log("Hey! Oveja número "+sheepNumber+"! El lobo está cerca!");    
}