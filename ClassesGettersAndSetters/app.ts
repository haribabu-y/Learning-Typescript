// public Access modifier
class Car {
    private _name: string;
    public model: string;
    public mfd_year: number;
    public color: string;

    constructor(name: string, model: string, mfd_year: number, color: string) {
        this._name = name;
        this.model = model;
        this.mfd_year = mfd_year;
        this.color = color;
    }
    public carFullname() {
        return `${this._name} ${this.model}`;
    }

    
    public get name(): string {
        return this._name;
    }
    
    public set name(name : string) {
        this._name = name;
    }   

}

let car1 = new Car('THOR', 'ROXX', 2023, 'Black');
console.log(car1.name);



