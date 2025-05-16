let result: any;

result = 10;
console.log(result);
console.log(result.length);

let result2: unknown;

result2 = "10";
if(typeof result2 === 'string') {
    console.log(result2.length);    
}
// console.log(result2.length);


result = 'Hello';
console.log(result);

result = [1,2,3,4,5];
console.log(result);
result = result.reduce((a:number, b:number) => a+b, 0);
console.log(result);

// let result2: any;
// result2 = 10.123;
// console.log(result2.toFixed());
// result2.willExist(); 


const map1: Map<string, number> = new Map([['zero', 0]]);
map1.set('one', 1);
map1.set('two', 2);
map1.set('three', 3);
console.log(map1);

map1.forEach((value, key) => {
    console.log(`${key} => ${value}`);
});


let score = new Array(1);
score[0] = 1;
score.push(2);
score.push(3);
console.log(score);
console.log(score.length);

let score2 = new Array('1');
console.log(score2);
console.log(score2.length);

let score3 = [];
console.log(score3);
console.log(score3.length);

let score4: Array<number> = [];
console.log(typeof score4);

let score5: Array<string> = new Array(5);
for(let i=0;i<score5.length;i++) {
    score5[i] = `${i+1}`;
}
console.log(score5);
console.log(typeof score5);

let score6: Array<number> = Array();
score6.push(90);
score6.push(80);
score6.push(95);
console.log(score6);
console.log(score6.length);

const map2: Map<string, number> = new Map();

map2.set('frj', 3);
map2.set('fgg', 4);
map2.set('tee', 7);

for(let i=0;i<3;i++) {
    map2.set(`add${i}`, i);
}

console.log(map2);

console.log(map2.size);

console.log(map2.get('fgg'));

const set: Set<number> = new Set([2,3,4,5,5,6,7]);
console.log(set);
set.add(9);
console.log(set);
set.delete(6)
console.log(set);

console.log(set.size);

const map3 = new Map([[1,2],[2,2],[3,4],[3,5]]);
console.log(map3);

const map4: Map<number, number> = new Map([["1",1],[2,2],[3,3],[4,"6"]]);
console.log(map4);








