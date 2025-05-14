let counter = "hello";
console.log(counter);
console.log(typeof(counter));

counter = "hello World";
console.log(counter);

function infers(max=100) {
    console.log(max);
    
}

infers(10);

function inference(max: number) {
    console.log(max);
}

inference(100);

let items: number[] = [1,2,3,4];
console.log(items);
console.log(typeof(items));

let items2 = [1,2,3, 'hello', true, null, undefined];
console.log(items2);
console.log(items2.length);
// if we delete the element in the array using delete keyword then it will the value in the position but the space is occupied with undefined value and the lenght of the array still remains same

// delete items2[6]
// delete items2[5]
// console.log(items2);
// console.log(items2.length);
// console.log(items2[5]);

// removeing the element from the array using splice

// items2.splice(5,2);
// console.log(items2);
// console.log(items2.length);

//Removing the element by using the slice keyword

items2 = items2.splice(0, 5);
console.log(items2);

let items3 = [1,2, 'hello', true, null];
console.log(items3);
// items3 = [2, 'hello', null, 5, undefined, items2, false];

// document.addEventListener('click', function(event) {
//     console.log(event.button);
    
// });

// document.addEventListener("scroll", function(event) {
//     console.log(event.type);
// });

let item;
item = 10;
console.log(item);
console.log(typeof(item));














