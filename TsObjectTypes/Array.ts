// array in javascript 

//in js the array allows to inserts any type of value init. to prevent this we use type script array 
const arr1 = new Array();

arr1.push(1);
arr1.push(2);
arr1.push("3");
arr1.push(new Array(2,3));
arr1.push(Symbol("h"));
arr1.push(true);

console.log(arr1);

//In this array allows only number typed element into it. if we try to push any another type it give an error 
const arr2: number[] = new Array();

arr2.push(1);
arr2.push(2);
arr2.push(3);
arr2.push(4);
arr2.push(5);

console.log(arr2);

// This array is of type String
const arr3: string[] = [];

arr3.push('h');
arr3.push('e');
arr3.push('l');
arr3.push('l');
arr3.push('o');

console.log(arr3);

// Array using the ts Generics
const arr4: Array<number> = [];

arr4.push(1);
arr4.push(2);
arr4.push(3);
arr4.push(4);
arr4.push(5);

console.log(arr4);
// console.log(arr4.join(""));

// String array using ts generics
const arr5: Array<string> = Array();

arr5.push('h');
arr5.push('e');
arr5.push('l');
arr5.push('l');
arr5.push('o');

console.log(arr5);
console.log(arr5.join(""));

// Generic fundtion to create an array in ts

function createarray<E>(...elements: E[]): E[] {
    return elements;
}

let arr6 = createarray(2,3,4,5,6);
console.log(arr6);
let arr7 = createarray('h','e','l','l','o');
console.log(arr7);

//number typed array 
const numbers1: number[] = [1,2,3,4,5,6,7,8];
console.log(numbers1);
// number typed array using generic type
const numbers2: Array<number> = [8,7,6,5,4,3,2,1];
console.log(numbers2);

// mixed type array 
const array1: (string | number)[] = [2,'d',3,'b',4,'w',5,6];
console.log(array1);
//using generics
const array2: Array<string | number> = ['d',5,3,'b',6,'w',7,9,8,'a',0];
console.log(array2);

// array that allow any element
const array3: any[] = [2,true,'k',{},[8],[[9],4]];
console.log(array3);

//Creating the empty array using both normal and generic method
const array4: number[] = [];
const array5: number[] = new Array();
const array6: number[] = Array();

const array7: Array<string> = [];









