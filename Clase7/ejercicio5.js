// Teniendo en cuenta la misma conferencia anterior, necesitamos saber si van a haber programadores de cierto lenguaje para poder preparar contenido específico. Por lo tanto, necesitamos una function que nos devuelva “true” o “false” cuando le preguntemos por cierto lenguaje. Por ejemplo:
//LISTO
const list = [
    { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
  ];

function Languaje(lang){
    var i=0;
    list.forEach(function(item){
        if (item.language.toLowerCase()==lang.toLowerCase()) i++;
    })
   
    if (i==0) return false; //no hay ninguno con ese lenguaje
    else return true;       // hay alguno con ese lenguaje
}

console.log(Languaje('JavaScript'));

// para la comparación usé toLowerCase para que en la busqueda de igual buscar un lenguaje escrito como 'JavaScript', 'Javascript' o 'javascript' sin importar las mayúsculas.