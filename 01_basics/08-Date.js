const myDate = new Date;

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toUTCString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);//Object

const newDate = new Date('2024','0','23');//month is 0 ;i.e months range from 0-11
console.log(newDate);
console.log(newDate.toLocaleDateString());

//Also as date is an object it has multiple objects or prototypes or properties.
console.log(newDate.getTime());
console.log(newDate.getMonth());

//Timestamp can be used for calculating time for hotels ,quizes and many more.
let myTimestamp = Date.now();
console.log(myTimestamp);