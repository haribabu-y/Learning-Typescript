// interface Employee {
//     firstName: string, 
//     lastName: string,
//     age: number,
//     role: string
// }
// let employee: Employee;
// employee = {
//     firstName: 'Hari',
//     lastName: 'babu',
//     age: 22,
//     role: 'Web developer'
// }

// console.log(employee);
// //get an error
// // employee = "Hari";
// //get an error
// // employee = 100;

// console.log(employee.lastName);
// console.log(employee.hireDate);


let employee: {
    firstName: string;
    lastName: string;
    age: number;
    role: string;
};

employee = {
    firstName: 'Hari',
    lastName: 'babu',
    age: 22,
    role: 'Web developer'
}

let emptyType: {};

emptyType = {};

// emptyType.firstName = "Hari";  //Gives an error 

console.log(emptyType.toString());


