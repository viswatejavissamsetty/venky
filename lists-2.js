const ages = [20, 23, 22, 25, 21, 11];

// in - indexes
for (let age in ages) {
    console.log(age);
}
// of - values
for (let age of ages) {
    console.log(age);
}