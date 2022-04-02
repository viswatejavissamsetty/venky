const x = "test";

const student1 = {
    name: "venky",
    age: 24,
    gender: 'M',
    scores: [29, 28, 29, 29, 30],
    address: {
        street1: "Street 1",
        village: "fsdfsd"
    },
    1: 20,
    [x]: x,
    add(a, b) {
        return a + b;
    },
    sub: (a,b) => {
        return a - b;
    },
};

student2 = { ...student1 };

student2.name = "Viswa";
student2.address.street1 = "Dummy";
// student1.sub = (a,b) => {
//     return a*b;
// };

console.log(student1);
console.log(student2);

// console.log(student1.add(1, 2));

// JSON - JavaScript Object Notation
// loads, dumps
// parse, stringify

let val = JSON.stringify(student1)
console.log(val, typeof val);
let val2 = JSON.parse(val);
console.log(val2, typeof val2);

console.log(Object.keys(val2)); // val2.keys();
console.log(Object.values(val2)); // val2.values();
console.log(Object.entries(val2)); // val2.items();