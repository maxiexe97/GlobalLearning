// Pensemos que tenemos que hacer un juego. Y lo primero que necesitamos es que se puedan crear héroes en el juego.
// Haga una función o una clase que nos sirva para crear nuestro objeto “heroe”
// Debe tener las siguientes propiedades y valores.
// LISTO

class hero{
    name
    position = '00'
    life = 100
    dano = 5
    experience = 0
    constructor(name){
        if(name==null) this.name = "Héroe"; // por defecto
        else this.name = name;
    }
}

const hero1= new hero();
const hero2= new hero("Spiderman");
console.log(hero1);
console.log(hero2);