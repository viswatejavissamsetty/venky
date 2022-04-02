const names = ["Vinay", "Venky", "Viswa", "Supraja", "Anu"];

console.log(names);

const names1 = [...names];
console.log(names1);

names1[2] = "Test";
console.log(names);
console.log(names1);

const values = new Array();
values.push(2);
values.push(4);
values.push(5);
values.push(10);
values.push(11);
values.push(12);
values.push(13);
values.push(14);
values.unshift(15);
values.pop(); // back side
values.shift(); // front side

console.log(values);
console.log(values.splice(2, 2));
console.log(values);


const arr = [1, 2, 3, 4, 5];


arr.forEach(function (val, index, arr) {
    if (val > 2) {
        console.log(val, index, arr);
    }
});

arr.forEach((val, index, arr) => {
    console.log(val, index, arr);
});

/*

1 - 3
2 - 4
3 - 9
4 - 8
5 - 15

*/

const res = arr.map((val, index, arr) => {
    if (val % 2 == 0) {
        return val * 2;
    }
    return val * 3;
});
console.log(res);


const filterRes = arr.filter((val, index, arr) => {
    if (val % 2 == 0) {
        return true;
    }
});
console.log(filterRes);


const findValue = arr.find((val) => val == 2);
console.log(findValue);

const names1FindResult = names.find((name) => {
    return name[0] == 'V'
});
console.log(names1FindResult);

console.log(names.indexOf('Viswa-1'));

let randomNumbers = [3,1,5,8,2,4];
console.log(names.sort());
// console.log(randomNumbers.sort());
console.log(randomNumbers.sort((num1, num2)=>{
    return num2 - num1;
    // return num1 - num2;
}));

const arr1 = new Array(10);
arr1.fill(0);
console.log(arr1);


const arr2 = [
    [1,2,3,4],
    [3,4,5,6],
    [5,6,7,8]
]

console.log(arr2);

const result = arr2.map(row => {
     row.map(col => {
        return col * 2;
    })
})

console.log(result);