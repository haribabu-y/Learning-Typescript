let fun: (a:number, b: number) => number;

fun = ( a: number, b: number) => {
    return a+b;
};

const firstpara = document.getElementById("ffr") as HTMLParagraphElement
firstpara.textContent = (fun(10,20)).toString();
console.log(fun(10,20));

fun = ( a: number, b: number, c:number) => {
    return a+b+c;
};
const secondpara = document.getElementById("sfr") as HTMLParagraphElement
secondpara.textContent = (fun(10,20,30)).toString();
 console.log(fun(10,20,30));


 fun = (x: string, y: string) => {
    return x.concat(y);
 }
 let sym:symbol = Symbol("hi");
 console.log(fun('h','i'));
 
