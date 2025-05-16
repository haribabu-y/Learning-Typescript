// function add(a: number, b: number): number;
// function add(a: string, b: string): string;

let add = function(a: number | string, b: number | string) {
    if(typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if(typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
}

console.log(add(10,20));
console.log(add('h','i'));

function add2(a: number | string, b: number | string) {
    return a+b;
}

console.log(add2(10,20));
console.log(add2('h','i'));
console.log(add2(10, 'i'));
console.log(add2('h', 20));
console.log(add2(10, true));






