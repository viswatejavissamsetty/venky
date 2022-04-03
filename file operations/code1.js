// node js - only
const fs = require('fs');
const path = require('path');

// input1 -> file path
// input2 -> options
// input3 -> callback function -> (err, data) => {}

// fs.readFile(path.join(__dirname, 'test.txt'), { encoding: 'utf-8' }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

const data = fs.readFileSync(path.join(__dirname, 'test.txt'), {})
console.log(data.toString());


console.log("Out side")
// console.log(path.join(__dirname, "..", "classes", 'test.txt'))