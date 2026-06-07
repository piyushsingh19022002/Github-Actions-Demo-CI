const add = require('./index');

if(add(2,3)===5){
    console.log("Test cases passed");
}else{
    throw new Error("Test cases failed");
}