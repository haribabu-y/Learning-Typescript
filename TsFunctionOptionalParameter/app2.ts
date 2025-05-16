function add(a: number, b: number, c?: number): void {
    if(c) {
       console.log(a+b+c); 
       return;   
    }
    console.log(a+b);
    
    // return a+b;
}

let sum1 = add(10,20);
console.log(sum1);
let sum2 = add(10,20,30);
console.log(sum2);




