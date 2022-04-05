const date = new Date();

console.log(date);

console.log(new Date(0));

console.log((new Date()).getDate());
console.log((new Date()).getMonth());
console.log((new Date()).getFullYear());
console.log((new Date()).getDay());

console.log((new Date()).setDate(6));
console.log(new Date(1649228376400));

console.log(new Date("2016-07-11 14:11:00"));

console.log((new Date()).toDateString());
console.log((new Date()).toISOString());
console.log((new Date()).toLocaleDateString());
console.log((new Date()).toLocaleTimeString());
console.log((new Date()).toTimeString());
console.log((new Date()).toJSON());
console.log((new Date()).toUTCString());


console.log((new Date()).valueOf());

let currentDate = new Date().valueOf();
let otherDate = new Date("2022-03-12").valueOf()

const diff = currentDate - otherDate;

console.log(diff/(1000 * 60 * 60 * 24));
