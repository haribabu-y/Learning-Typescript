class Person {
    private firstName: string;
    private lastName: string;
    constructor(fn: string, ln:string) {
        this.firstName = fn;
        this.lastName = ln;
    }

    public get _firstName() {
        return this.firstName;
    }

    public set _firstName(fn: string) {
        this.firstName = fn;
    }

    public get _lastName() {
        return this.lastName;
    }

    public set _lastName(ln: string) {
        this.lastName = ln;
    }

    public message() {
        return `This is ${this.firstName} ${this.lastName}.`;
    }

}

class Employee extends Person {
    private role: string;
    constructor(fn: string, ln: string, role: string) {
        super(fn,ln);
        this.role = role;
    }

    public get _role() {
        return this.role;
    }

    public set _role(role: string) {
        this.role = role;
    }
    
    public message(): string {
        // return super.message() + `I am ${this.role} developer.`;
        return `I am ${this.role} developer.`;
    }

}

let employee = new Employee('hari', 'babu', 'front-end');

console.log(employee._firstName);
console.log(employee._lastName);
console.log(employee._role);
console.log(employee.message());






