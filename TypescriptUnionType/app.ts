let result: number | string;

// here the result variable accepts only number values or string values and it will error if we try to assign any other type to the variable
result = 100;
console.log(typeof(result));
console.log(result);

result = "hello";
console.log(typeof(result));
console.log(result);


// result = true;

function add(a: number | string, b: number | string): void {
    if(typeof(a) == 'number' && typeof(b) == 'number') {
        console.log(a + b);
    }
    if(typeof(a) == 'string' && typeof(b) == 'string') {
        console.log(a.concat(b));        
    }
    // throw new Error('Arguments should be number or string');
}

add(10,20);
add('hello', 'world');
// add(true, 9309573057308509n);



