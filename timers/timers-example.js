// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log("called", i);
//     }, 1000 * (i+1))
// }

// let i = 0;
// while (true){
//     setTimeout(() => {
//         console.log("called", i);
//     }, 1000 * (i+1));
// }

let i = 0;
function callback(){
    console.log("called", i++);
    setTimeout(callback, 1000);
}
callback();
// setTimeout(callback, 1000);

