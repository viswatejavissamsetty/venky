function callBackFunc(name, age) {
    console.log("Call back in setTimeout", name, age);
}

const timer = setTimeout((name, age) => {
    console.log("Call back in setTimeout", name, age);
}, 6000, "Viswa", 23, "Venky");

setTimeout(()=>{
    clearTimeout(timer);
}, 5000);

setTimeout(callBackFunc, 2000, "Viswa", 23, "Venky");
setTimeout(() => callBackFunc("Venky", 24), 4000);

console.log("Outside function");