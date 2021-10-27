const person = {
    name: 'Maxi Lopez',
    age: 24,
    work: 'UNT'
}

class Person {
    name
    age
    work
    constructor(name, age, work){
        this.name = name;
        this.age = age;
        this.work = work;
    }
}

const person2 = new Person('Maxi Lopez', 24, 'UNT');

console.log(person);
//person.lastName="Lopez";
//console.log(person);
console.log(person2);
