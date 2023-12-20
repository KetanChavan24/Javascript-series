let name = "cristiano";

let lastname = "ronaldo";

console.log("My name is " + name + " " + lastname + ".");
//old syntax of contemplating string  or String Interpolation: takes more tym and effort

console.log(`My name is ${name} ${lastname}.`);

let newname = new String("toothcr7");
let brandname = "Nike";

//functions to play with strings

console.log(newname.toUpperCase());
console.log(newname.charAt(3));
console.log(newname.indexOf('c'));
console.log(brandname.toLowerCase());
//and many more...

let stringname = "     Ketan     ";
console.log(stringname);
console.log(stringname.trim());
console.log(stringname.trimStart());
console.log(stringname.trimEnd());

const url = "https://ketan.com/solarsytem%20cro";
console.log(url.replace('%20','-'));
console.log(url.includes('solar'));

let example = "bhavani-ketan-chavan";
console.log(example.split('-'));// A good way of coverion of string to array


