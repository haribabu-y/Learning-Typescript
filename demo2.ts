interface functionFormate {
    (str: string, num: number, isUpper: boolean): string;
}

let formate1: functionFormate;

formate1 = function(str: string, num: number, isUpper: boolean) {
    return isUpper ? str +" "+ num +"." : str.toLocaleUpperCase() +" "+ num +".";
}


console.log(formate1("hari", 22, false));
console.log(formate1('HARI', 21, true));


let formate2: functionFormate;

formate2 = function(str: string,num:number, isUpper: boolean) {
    return isUpper ? str : str.toLocaleUpperCase();
}

console.log(formate2('hari',22, false));
console.log(formate2('HARI',21, true));


interface Json {
    toJson(): string;
}

class Person implements Json {
    constructor(private name: string, private age: number) {};
    toJson(): string {
        return JSON.stringify(this);
    }
}

class Person2 implements Json {
  constructor(private firstName: string, private lastName: string) {}
  toJson(): string {
    return JSON.stringify(this);
  }
}

let person1 = new Person("hari", 22);
console.log(person1.toJson());
let person2 = new Person2('Hari', 'Babu');
console.log(person2.toJson());





