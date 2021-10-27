class Pet{
    type
    race
    name
    color
    size

    constructor(petType, petRace, petName, petColor, petSize){
        this.type = petType;
        this.race = petRace;
        this.name = petName;
        this.color = petColor;
        this.size = petSize;
    }
}

let dog1 = new Pet("Perro", "Bulldog", "Pepe", "negro", "mediano");
let dog2 = new Pet("Perro", "Bulldog", "mora", "blanca","pequeño" );

console.log(dog1);
console.log(dog2);
console.log("Pets: "+dog1.name+", "+dog2.name);

if(dog1.race == dog2.race){
    console.log("Tienen la misma raza");
}else{
    console.log("No tienen la misma raza");
}