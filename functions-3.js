function add(a, b, ...c) {
    let s = a + b;
    for (let i = 0; i < c.length; i++) {
        s += c[i];
    }
    return s;
}

console.log(add(10, 20, 30, 40, 50));