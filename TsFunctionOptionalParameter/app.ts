//Example for Typescript Optional parameter
function mul(a: number, b: number, c?: number) {
    if(c !== undefined) {
        return a*b*c;
    }
    return a*b;
}

console.log(mul(10,20));
console.log(mul(10,20,30));

//Example fot typescript Default paramenter
function amount(price: number, discount: number = 0.05): number {
    return price * (1-discount);
}

console.log(amount(100));
console.log(amount(100,0.10));

function getdays(year: number = new Date().getFullYear(), month: number): number {
    let days = 0;
    switch(month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
        case 11:
            days = 31;
            break;
        case 4:
        case 6:
        case 8:
        case 10:
        case 12:
            days = 30;
            break;
        case 2:
            if(((year % 4 == 0) && !(year % 100 ==0)) || (year % 400 == 0)) {
                days = 29;
            } else {
                days = 28;
            }
    }
    return days;
}

console.log(getdays(2021,2));


// Example for rest parameter in the typescript funcctions

function total(...numbers: number[]): number {
    let total = 0;
    numbers.forEach(num => total += num);
    return total;
}

console.log(total());
console.log(total(10,20));
console.log(total(1,2,3,4,5,6,7,8,9,10));

//Rest parameters with multiple types
function combine(...agrs: (number | string)[]) {
    let total = 0;
    let str = '';
    agrs.forEach(arg => {
        if(typeof(arg) === 'number') {
            total += arg;
        }else if(typeof(arg) === 'string') {
            str += arg;
        }
    });
    return [total, str];    
}

const [total1, str] = combine(3, 'Happy', 2, 1, ' New Year');

console.log(total1);
console.log(str);


function fun2(n1: number, n2: number, ...n3: number[]) {
    let total = n1 + n2;
    n3.forEach(n => total+=n);
    return total;
}

console.log(fun2(10,20,30,40,50));









