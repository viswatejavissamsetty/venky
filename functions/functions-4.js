function add(a = 10, b = 20) {
    console.log("inside func: ",a, b)
    return a + b;
}

console.log(add(100, 200));
console.log(add(200, 100));
console.log(add());
console.log(add(b=300));