let result: any;

result = 10;
console.log(result);

result = 'Hello';
console.log(result);

result = [1,2,3,4,5];
console.log(result);
result = result.reduce((a:number, b:number) => a+b, 0);
console.log(result);

let result2: any;
result2 = 10.123;
console.log(result2.toFixed());
// result2.willExist(); 

