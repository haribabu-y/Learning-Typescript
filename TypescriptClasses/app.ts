class person {
    id;
    name;
    age;
    email;

    constructor(id, name, age, email) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
    }

    message() {
        return `I am ${this.name} and i am ${this.age} years old`;
    }
}

let person1 = new person(1, 'Hari',22, "hari12@gmail.com");

console.log(person1);
console.log(person1.message());
// console.log(person1);


class Car {
    name: string;
    model: string;
    MFD_Year: number;
    owner: string;

    constructor() {
        this.name = 'Thor';
        this.model = 'ROXX';
        this.MFD_Year = 2024;
        this.owner = 'Hari';
    }

    message() {
        return `${this.owner} have ${this.name} ${this.model} car.`;
    }
}

let mycar = new Car();

console.log(mycar.name);
console.log(mycar.message());




