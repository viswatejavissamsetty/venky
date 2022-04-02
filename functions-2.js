function fun1(fun2, x, y) {
    fun2(x, y);
}

const dummyFunc = function (a,b) { 
    console.log(a+b) 
};

fun1(
    dummyFunc, // fun2 -> input 1
    10,
    35
)

fun1(
    (a, b) => {console.log(a+b)},
    10,
    35
)


function getFunction() {
    return function (a,b) {
        return a * b;
    }
};

const func = getFunction();
console.log(func(10,20));