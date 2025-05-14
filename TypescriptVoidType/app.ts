let message: string = "Hello World";
console.log(typeof(message));

function logMessage(message: string): void {
    console.log(message);
    // return message;
}

logMessage(message);

function fun(): void {
    console.log("The sum of 10 and 20 is "+ (10 + 20));
    // return 'hello';
}

fun();

let variable1: void;
console.log(variable1);
variable1 = null;
console.log(variable1);

// run this program using this command to see output "tsx app.ts --strictNullChecks";

