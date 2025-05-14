let skills: string[];

skills = [];

skills[0] = "front-end";
skills[1] = "bacl-end";
skills[2] = "database";

console.log(skills);

skills.push("Problem solving");
console.log(skills);

skills = ['front-end', 'back-end', 'database'];
console.log(skills);

skills.push('100');
console.log(skills);
skills.pop();
console.log(skills);

console.log(skills[0]);
console.log(typeof(skills));

//Methods in array 

// length method used to find the length of the array 
console.log(skills.length);

let series: number[] = [1,2,3,4];
let doubleit = series.map(e => e*2);
console.log(series);
console.log(doubleit);

//assigning multiple typs of data to the single array

let array = ['hari', 22, 'B.Tech', 8985336546n];

console.log(array);
console.log(typeof(array));
//get an error if we try to push the data into the array other than type already present in the array
//Now the array accepts only srting, number, bitint values
// array.push(true);
array.push(9959686852n);
console.log(array);


// tuples in typescript

let skill: [string, number];
skill = ['Java', 5];
console.log(skill);
skill.push('hello');
console.log(skill);
skill.push('java');



















