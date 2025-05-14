// priitive type aliase 
type Name = string;

let firstName: Name = "Hari";
let lastName: Name = "Babu";

console.log(firstName + " " + lastName);

// Object type
type Person = {
    name: string;
    age: number;
}

let person1: Person = {
    name: "Hari",
    age: 22
}
console.log(person1);

let person2: Person = {
    name: "Eran",
    age: 20
}
console.log(person2);

// Union type 
type alphanumeric = string | number;

let input: alphanumeric;
input = 100;
console.log(input);
input = "hello";
console.log(input);
// input = true; // getting error

// Intersection type 
type Personal = {
    name: string;
    age: number;
}

type Contact = {
    email: string;
    phone: string;
}

type Candidate = Personal & Contact;

let candidate: Candidate = {
    name: "Hari",
    age: 22,
    email: "hari12@gmail.com",
    phone: "8985336546"
}

console.log(candidate);
console.log(typeof(candidate));







