interface mailable {
    send(email: string): boolean;
    queue(email: string): boolean;
}

interface fuatureMailable extends mailable {
    later(email: string, after: number): boolean;
}

interface A {
    methodA(): string;
}
interface B extends A {
    methodB(): string;
}

interface C extends B {
    methodC(): string;
}

class D implements C {
    methodA(): string {
        return "hi";
    }
    methodB(): string {
        return 'Hello';
    }
    methodC(): string {
        return 'bye!';
    }

    methodD(): string {
        return "Welcome!";
    }
}

let d1 = new D;
console.log(d1.methodA());
console.log(d1.methodB());
console.log(d1.methodC());
console.log(d1.methodD());


class E {
    methodE(): string {
        return 'ee';
    }
}

interface F extends E {
    methodF(): string;
}

class G implements F {
    methodE(): string {
        return "eee";
    }
    methodF(): string {
        return 'ffff!';
    }
}

let g1 = new G;

console.log(g1.methodE());
console.log(g1.methodF());

interface H extends A,B,C {
    methodH(): string;
}

class I implements H {
    methodA(): string {
        return "Hi!";
    }
    methodB(): string {
        return 'Hello!';
    }
    methodC(): string {
        return "Welcome!";
    }
    methodH(): string {
        return 'Bye';
    }
}

let i1 = new I;

console.log(i1.methodA());
console.log(i1.methodB());
console.log(i1.methodC());
console.log(i1.methodH());
