const anyNumber = 200;
console.log(anyNumber);

const price = new Number(200);
console.log(price);

//prototypes or properties of Number variabe (less than String variable)
console.log(price.toString());
console.log(price.toFixed(2));//gives precision value for digits after decimal upto length i.e the parameter value.

const balance = 345.679;
//'toPrecision' is different than toFixed as it precises the whole value upto the length i.e the parameter value.
console.log(balance.toPrecision(3));
console.log(balance.toPrecision(4));
console.log(balance.toPrecision(5));

const anyValue = 10000000;

console.log(anyValue.toLocaleString());//According to US system.

console.log(anyValue.toLocaleString('en-IN'));//According to Indian system.
//here in our system its not working; although its working on the browser.

// MATHS
//Math is a seperate library which has various prototypes or properties or methods

console.log(Math.round(4.56));
console.log(Math.floor(4.56));
console.log(Math.ceil(4.56));
console.log(Math.random());//range: 0-1
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max - min + 1)) + min);//Formula for generating random number for range min to max

