class Employee {
    static employeeCount = 0;
    constructor(
        private name: string,
        private age: number,
        private role: string
    ) {
        Employee.employeeCount++;
    }

    public static getEmployeeCount() {
        return this.employeeCount;
    }
}

let e1 = new Employee('Hari', 22, 'front-end');
let e2 = new Employee('Naruto', 20, 'shinobi');

console.log(Employee.employeeCount);
console.log(Employee.getEmployeeCount());


