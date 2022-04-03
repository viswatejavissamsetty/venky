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

    });
}


async function cal() {
    const res = await divide(10, 20);
    console.log(res)
}

async function cal2() {
    try {
        const res = await divide(10, 0);
        console.log(res)
    } catch (err) {
        console.error(err)
    }
}

async function cal3() {
    const res = await divide(100, 20);
    return res;
}

cal();
cal2();
cal3().then(res => {
    console.log(res)
})
// console.log(cal3());