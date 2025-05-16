const map1: Map<string, number> = new Map();

map1.set('h',1);
map1.set('e',2);
map1.set('l',3);
map1.set('l',4);
map1.set('o',5);
map1.set('o',6);

console.log(map1);
console.log(map1.size);


const map2 = new Map<string, number>();

map2.set('h',1);
map2.set('a',2);
map2.set('r',3);
map2.set('i',4);
map2.set(' ',5);
map2.set('y',6);

console.log(map2);
console.log(map2.size);
const demo = map2.values();
console.log(demo.toString());

//Creating a map of the person
interface Person {
    name: String;
    age: number;
}

const personMap: Map<string, Person> = new Map();

personMap.set("Hari", {name: 'Hari', age: 22});
personMap.set("Eran", {name: 'Eran', age: 20});

console.log(personMap);
console.log(personMap.get('Eran'));

//Generic function to create a Map

function createMap<K, V>(entries: [K, V][]): Map<K, V> {
    return new Map(entries);
}

const mapEntries = [['y',1],['h',2],['b',3]];

const map3 = createMap([['y',1],['h',2],['b',3]]);
console.log(map3);

//Creating the map using default method
const mapp1: Map<string, number> = new Map([['d',2],['h',4],['j',2]]);
console.log(mapp1);
const mapp2 = new Map<string, any>();
mapp2.set('hello',2);
mapp2.set('jhdfb',true);

mapp2.forEach((value, key) => {
    console.log(`${key}: ${value}`);    
});









