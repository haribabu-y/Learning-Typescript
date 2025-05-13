// creating the string name message and assigning the value to it
let message: string = 'Hello, World!';
//logging the string inside the message
console.log(message);

//creating an element called adding assign it to the variable heading
let heading = document.createElement('h1');

//assigning the value which is present inside the message to the heading element
heading.textContent = message;

//adding the heading element into the body od the html document
document.body.appendChild(heading);

//colleting the h2 element 
let heading2 = document.querySelector('h2');

// heading2?.textContent = "Heading 2";

let count: number = 1;
count = 4;
console.log(count);


