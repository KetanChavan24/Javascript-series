//ARRAY AND OBJECTS IN FUNCTIONS
//(...) => SPREAD OR REST OPERATOR

function addNums(...num){
 return num;
}

console.log(addNums(200,300,400));
//PASSING AN ARRAY IN FUNCTION

function returnFirstValue(anyArray){
    return anyArray[0];
}

let myArray = [9000,7000,4000];
console.log(returnFirstValue(myArray));

//PASSING AN OBJECT IN FUNCTION

const myObject = {
    name: "Python",
    price: 999
}

function accessObject(anyObject){
    return `The name is ${anyObject.name} and the price is ${anyObject.price}.`
}

console.log(accessObject(myObject));
