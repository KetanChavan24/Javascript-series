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
console.log(stringname);            // Logs: "     Ketan     "
console.log(stringname.trim());     // Logs: "Ketan"
console.log(stringname.trimStart()); // Logs: "Ketan     "
console.log(stringname.trimEnd());   // Logs: "     Ketan"
//trim removes any leading and trailing spaces 

let stringname = " v    Ketan     ";
console.log(stringname);           // Output: " v    Ketan     "
console.log(stringname.trim());    // Output: "v    Ketan"
console.log(stringname.trimStart()); // Output: "v    Ketan     "
console.log(stringname.trimEnd());   // Output: " v    Ketan"


const url = "https://ketan.com/solarsystem%20cro";
console.log(url.replace('%20','-'));     // Output: "https://ketan.com/solarsystem-cro"
console.log(url.includes('solar'));      // Output: false ,Returns false because the string contains "solarsytem", not "solar"


let example = "bhavani-ketan-chavan";
console.log(example.split('-'));//output: [bhhavani, ketan , chavan]
// A good way of coverion of string to array
//split('-') breaks the string at each '-' and returns an array of parts


