let pendings: boolean;

pendings = true;

console.log(pendings);
console.log(typeof(pendings));

// NOT operator
const pending: boolean = true;
const notPending = !pending; // false
// console.log(result); // false

const hasError: boolean = false;
const completed: boolean = true;

// AND operator
let result = completed && hasError; 
console.log(result); // false

// OR operator
result = completed || hasError; 
console.log(result); // true

