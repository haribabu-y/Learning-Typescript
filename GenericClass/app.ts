class Stack<T> {
    private elements: T[] = [];
    constructor(private size: number) {
    } 

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    isFull(): boolean {
        return this.elements.length === this.size;
    }
    pushelement(element: T) {
        if(this.elements.length === this.size) {
            console.log("Stack is full");
            return;            
        }
        this.elements.push(element);
    }

    popElement() {
        if(this.elements.length === 0) {
            console.log("Stack is empty");
            return;            
        }
        return this.elements.pop();
    }
}

function randBetween(h: number, l: number): number {
    return Math.floor(Math.random() * (h - l + 1) + l);
}

let stack1 = new Stack<number>(5);

while(!stack1.isFull()) {
    let n = randBetween(1,10);
    console.log(`Push ${n} into the Stack!`);
    stack1.pushelement(n);    
}
console.log(stack1);

while(!stack1.isEmpty()) {
    let n = stack1.popElement();
    console.log(`Pop ${n} fromm the Stack!`);
}

console.log(stack1);

