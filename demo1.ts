let var1: unknown;

let var2: any;

var1 = 10;
console.log(typeof var1);
// console.log(var1.length);


var1 = "hello";
console.log(typeof var1);
if(typeof var1 === 'string') {
    console.log(var1.length);
    // var1.push('h');
    console.log(var1);
    
}

// var1.push('h');
// console.log(var1);


var1 = true;
console.log(typeof var1);
// console.log(var1.length);

var1 = Symbol("h");
console.log(typeof var1);
// console.log(var2.length);

console.log("-------------------------------------------------");


var2 = 10;
console.log(typeof var2);
console.log(var2.length);


var2 = "hello";
console.log(typeof var2);
if(typeof var2 === 'string') {
    console.log(var2.length);
}

var2 = true;
console.log(typeof var2);
console.log(var2.length);

var2 = Symbol("h");
console.log(typeof var2);
console.log(var2.length);

// var2.push('h');
console.log(var2);



// Typescript Type Guards instancesOf example
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Generic anima sound!..");
    }
}

class Dog extends Animal {
    breed: string;
    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    bark(): void {
        console.log("woof!..");
    }
    makeSound(): void {
        this.bark();
    }
}

function animalSpeak(animal: Animal | Dog) {
    animal.makeSound();
    if(animal instanceof Dog) {
        console.log(`Breed: ${animal.breed}`);
        animal.bark;        
    }
}

animalSpeak(new Animal("General Animal"));
console.log("------------------------------------");
animalSpeak(new Dog("Buddy", "Golden Retriever"));

console.log("------------------------------------");

// Typescript Type Guards 'in' example
interface Bird {
    fly(): void;
    wingspan: number;
}
interface Fish {
    swim(): void;
    depth: number;
}

type animalType = Bird | Fish;

function move(animal: animalType) {
    if('fly' in animal) {
        console.log(`Flying with windsoan: ${animal.wingspan}`);
        animal.fly();
    } else if('swim' in animal) {
        console.log((`Swiming in the deep: ${animal.depth}`));
        animal.swim()
    }
}

const eagle: Bird = {fly: () => {console.log("Soaring")}, wingspan: 2};
const salmon: Fish = {swim: () => {console.log("Glub glub")}, depth: 10};

move(eagle);
console.log("------------------------------------");
move(salmon);
