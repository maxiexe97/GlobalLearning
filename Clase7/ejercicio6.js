// Teniendo en cuenta la misma conferencia anterior, necesitamos saber el nombre y país de el primer desarrollador de cierto lenguaje que se haya inscripto.
//LISTO

const list1 = [
    { firstName: 'Mark', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', country: 'Norway', continent: 'Europe', age: 19, language: 'Python' }
  ];
  
function developer(lang){
    var devv;
    devv = list1.find(function(item){
        return (item.language.toLowerCase()==lang.toLowerCase())
    })

    if(devv==null) console.log("There are no '"+lang+"' developers in the conference");
    else console.log(devv.firstName+" from "+devv.country+" was the first "+devv.language+" developer in the conference.");
}
developer('python');
developer('C#')