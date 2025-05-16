let click: 'click';

click = 'click';
console.log(click);


// click = 'dblclick';

let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';

mouseEvent = 'click';
console.log(mouseEvent);
console.log(typeof(mouseEvent));

mouseEvent = 'dblclick';
console.log(mouseEvent);
console.log(typeof(mouseEvent));

mouseEvent = 'mouseup';
console.log(mouseEvent);
console.log(typeof(mouseEvent));

mouseEvent = 'mousedown';
console.log(mouseEvent);
console.log(typeof(mouseEvent));

// mouseEvent = 'mouseover';
// console.log(mouseEvent);
// console.log(typeof(mouseEvent));

// type MyMouseEvent = 'click' | 'dblclick' | 'mouseup' | 'mousedown';
// let mymouseEvent: MyMouseEvent;
// mymouseEvent = 'click'; // valid
// mymouseEvent = 'dblclick'; // valid
// mymouseEvent = 'mouseup'; // valid
// mymouseEvent = 'mousedown'; // valid
// // mymouseEvent = 'mouseover'; // compiler error

// let anotherEvent: MyMouseEvent;