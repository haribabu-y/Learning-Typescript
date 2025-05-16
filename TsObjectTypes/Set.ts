const arr = [1,2,3,4,4,5,6,6,6,7,7,8,0];
const set1 = new Set<number>(arr);

console.log(set1);
console.log(arr.length);
console.log(set1.size);

const set2: Set<number> = new Set(arr);

console.log(set2);

console.log(set2.has(9));
console.log(set2.has(2));

console.log(set2.delete(0));
console.log(set2.delete(0));

//Creating the empty set of multiple type

const set3 = new Set<string | number>();

set3.add('h');
set3.add(1);
set3.add('f');
set3.add(8);
set3.add('h');
set3.add(34);

console.log(set3);


