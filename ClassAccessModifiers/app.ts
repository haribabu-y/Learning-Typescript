// public Access modifier
class Car {
    public name: string;
    public model: string;
    public mfd_year: number;
    public color: string;

    constructor(name: string, model: string, mfd_year: number, color: string) {
        this.name = name;
        this.model = model;
        this.mfd_year = mfd_year;
        this.color = color;
    }
    public carFullname() {
        return `${this.name} ${this.model}`;
    }
}

let car1 = new Car('Thor', 'ROXX', 2024, 'Black');
car1.name = "THOR";
console.log(car1.name);
console.log(car1.model);
console.log(car1.mfd_year);
console.log(car1.color);
console.log(car1.carFullname());

// class Car2 extends Car {
// }

// let car2 = new Car2("Honda", "Civic", 2022, 'White');

// car2.name;


// Private access modifier

class Person {
    private name: string;
    private age: number;
    private email: string;

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    message() {
        return `My name is ${this.name} and i am ${this.age} years old.`;
    }
}

let person1 = new Person('hari', 22, 'hari12@gmail.com');
// if we try to access the variable outside the class it gives error
// console.log(person1.name);
// console.log(person1.age);
console.log(person1.message());

class Person2 extends Person {
    
}

let person2 = new Person2('Eran', 20, 'eran12@gmail.com');
// person2.name;
person2.message();


class birthDate {
    readonly birthDate: Date;

    constructor(brd: Date) {
        this.birthDate = brd;
    }
}

let brd1 = new birthDate(new Date(2003, 2, 15));
console.log(brd1.birthDate);
//If we try to reasign the birthdate to the above object it givw error
// brd1.birthDate = new Date(2004, 4,14);










