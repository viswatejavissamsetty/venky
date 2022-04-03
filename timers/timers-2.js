var i = 0;
var j = 0;

const intervalId = setInterval(()=>{
    console.log("Called 1:", i++);
    if(i == 5){
        clearInterval(intervalId);
    }
}, 3000);


const intervalId2 = setInterval(()=>{
    console.log("Called 2:", j++);
    if(j == 10){
        clearInterval(intervalId2);
    }
}, 1000);

console.log("Outside");