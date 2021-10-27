/* Ejercicio 2: Hubo una conferencia de programación hace poco y necesitamos saber quienes fueron las personas que estuvieron en el evento.
Sabemos que la información está guardada en un array de objetos.
Necesitamos saber cuántas personas de “Europa” asistieron */
// LISTO

const list = [
    { firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Maria', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];
  
  let count=0;
 list.forEach(function(item){
        if(item.continent=='Europe') count++;
 })

 if(count==0) console.log("No asisitieron personas de Europa");
 else console.log("Cantidad de personas de Europa: "+count);