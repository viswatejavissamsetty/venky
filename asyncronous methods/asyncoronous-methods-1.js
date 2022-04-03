// Promises

function divide(a, b) {
    return new Promise((resolve, reject) => {
        if (b == 0) {
            reject("Cant divide with zero");
        }

        let res = a / b;

        setTimeout(() => {
            resolve(res);
        }, 5000)

    })
}

// console.log(divide(2,5))
divide(2, 5).then((result) => {
    return result;
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("Done");
});