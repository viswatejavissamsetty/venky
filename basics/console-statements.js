console.log("Hello World");

console.log("Hello World", 10, 20);

console.error("Hi");

console.warn("Hi Warn");

console.group();
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.groupEnd();


const x = [1,2,3,4,5,100,200,300];
console.table(x);

const student = {
    name: "venky",
    age: 23,
    sex: "M"
}
console.table(student);

class student1 {
    name = "venky";
    age = 10;
    add() {

    }
}
const s1 = new student1();
console.table(s1);