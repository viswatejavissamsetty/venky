const fs = require('fs');
const path = require('path');

// fs.writeFile(path.join(__dirname, 'test1.txt'), "Hello Venky", {encoding: 'utf8'}, () => {
//     console.log("Succesfully written");
// });

fs.writeFileSync(path.join(__dirname, 'test1.txt'), "Hello Venky 1", {encoding: 'utf8'});

console.log("Outside")