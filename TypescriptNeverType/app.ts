type Role = 'admin' | 'user' | 'geust';

const authorize = (role: Role): string => {
  switch (role) {
    case 'admin':
      return 'You can do anything';
    case 'user':
      return 'You can do something';
    case 'geust':
        return 'You can do nothing';
    default:
      // never reach here util we add a new role
      const _unreachable: never = role;
      throw new Error(`Invalid role: ${_unreachable}`);
  }
};

console.log(authorize('geust'));


let nevervar1: never;
nevervar1 = 123;

let stringvar1: string = "Hello";

nevervar1 = nevervar1 + stringvar1;
console.log(nevervar1);
console.log(typeof(nevervar1));

// let neverVar: never = (() => {
//   throw new Error("This function always throws");
// })();

// let stringVar: string = "hello";

// let result = neverVar + stringVar;

type alphanumeric = string & number;

// let value1: alphanumeric = 'hello'; // give an error due to value1 of type never

//it will the compilation error due to never type to the function
// function reiseError(message: string): never {
//   throw new Error("Error");
// }

// reiseError('hello');

//It will print the 'hello' inifitely
// function fun(): never {
//   while(true) {
//     console.log('hello');
    
//   }
// }

// fun();

function logErrorAndThrow(message: string): never {
  console.error(`Error: ${message}`);
  throw new Error(message);
  // Control flow never reaches here
}

try {
  logErrorAndThrow("Something went wrong!");
} catch (e) {
  console.log("Caught the error.");
}



