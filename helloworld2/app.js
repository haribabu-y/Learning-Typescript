// creating the string name message and assigning the value to it
var message = 'Hello, World!';
//logging the string inside the message
console.log(message);
//creating an element called adding assign it to the variable heading
var heading = document.createElement('h1');
//assigning the value which is present inside the message to the heading element
heading.textContent = message;
//adding the heading element into the body od the html document
document.body.appendChild(heading);
