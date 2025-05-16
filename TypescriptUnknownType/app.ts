let result: unknown;

//assigning number to the result
result = 1;
console.log(typeof(result));
console.log(result);

//assigning string to the result
result = "Hello";
console.log(typeof(result));
console.log(result);

//assigning boolean to the result
result = true;
console.log(typeof(result));
console.log(result);

//assigning undefined to the result
result = undefined;
console.log(typeof(result));
console.log(result);

//assigning symbol to the result
result = Symbol();
console.log(typeof(result));
console.log(result);

//assigning object to the result
result = {name: 'Hari', age: 22};
console.log(typeof(result));
console.log(result);

//assigning array to the result
result = [1,2,3,4,5];
console.log(typeof(result));
console.log(result);

// const total = result.reduce((a:number, b:number) => a+b, 0);
// console.log(total);


let flexibleVarAny: any = "hello";
flexibleVarAny = 123; // No error
console.log(flexibleVarAny.toUpperCase()); // Could cause a runtime error
console.log(flexibleVarAny);


let flexibleVarUnknown: unknown = "world";
flexibleVarUnknown = "456"; // No error
console.log(flexibleVarUnknown);


console.log(flexibleVarUnknown.toUpperCase()); // Error: Object is of type 'unknown'.

if (typeof flexibleVarUnknown === 'string') {
  console.log(flexibleVarUnknown.toUpperCase()); // Okay, TypeScript knows it's a string now
}

flexibleVarUnknown as string; // Type assertion - telling TypeScript we know it's a string
// console.log(flexibleVarUnknown.toUpperCase()); // Now potentially unsafe if it's not actually a string

console.log(flexibleVarUnknown);

