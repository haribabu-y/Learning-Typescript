interface Point {
    x: number;
    y: number;
}

function logPoint(p : Point) {
    console.log(`X: ${p.x}, Y: ${p.y}`);
}

let point1 = {
    x: 10,
    y: 20
}

console.log(logPoint(point1));

let point2 = {
    x: 20,
    y: 30,
    z: 50
}

console.log(logPoint(point2));

let point3 = {
    y: 30
}

console.log(logPoint(point3));


