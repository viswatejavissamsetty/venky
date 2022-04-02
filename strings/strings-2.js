const string1 = "Hello My Name is Viswa.";

console.log(string1);

console.log(string1.includes("My", 5));
console.log(string1.includes("Mi", 10));

console.log(string1.endsWith("swa"));
console.log(string1.endsWith("ewa"));


console.log(string1.startsWith("Hell"));
console.log(string1.startsWith("hell"));

console.log(string1.length);

console.log(string1.match('Hell'));
console.log(string1.match('Helle'));


const x = string1.matchAll('Hell')
for (let i of x){
    console.log("test:",i);
}


console.log(string1.padEnd(100, "*"))
console.log(string1.padStart(100, "*"))


console.log(string1.repeat(5));

console.log(string1.replace("Name", "name"));

console.log(string1.split(" "));

console.log(string1.search('Hello My Name is Viswa. Hello My Name is Viswa.'));

console.log(string1.substring(5, 10));
console.log(string1.toUpperCase());
console.log(string1.toLowerCase());

"Hello " + "World"


