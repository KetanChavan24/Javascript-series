const myDate = new Date;


console.log(myDate);             // Current date and time
console.log(myDate.toString());  // Default string representation of the date
console.log(myDate.toISOString()); // ISO 8601 formatted date string
console.log(myDate.toUTCString()); // UTC string representation of the date
console.log(myDate.toLocaleDateString()); // Date formatted according to local settings
console.log(myDate.toLocaleString()); // Date and time formatted according to local settings
console.log(typeof myDate); // "object" because Date is an object in JavaScript


const newDate = new Date('2024', '0', '23');
console.log(newDate);                // Date for January 23, 2024
console.log(newDate.toLocaleDateString()); // Localized date string for January 23, 2024


//Also as date is an object it has multiple objects or prototypes or properties.
console.log(newDate.getTime());
console.log(newDate.getMonth());

//Timestamp can be used for calculating time for hotels ,quizes and many more.
let myTimestamp = Date.now();
console.log(myTimestamp); // Returns the current timestamp in milliseconds
