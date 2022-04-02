// named functions and anonomous functions

// named functions -> function with name
function add(a, b) { // function defination, decleration
    return a+b;
}

let c = add(3, 5); // function call
console.log(c);

// anonomous functions -> function without name
const sub = function (a,b) {
    // console.log("inside function",c);
    return a - b;
}

c = sub(5,3);
console.log(c);

// arrow functions -> another type of function
const mul = (a,b) => {
    return a*b;
}

c = mul(3,5);
console.log(c)