//FOR OF LOOP (USED IN STRINGS,OBJECTS AND ARRAYS)

let myArray = ["Batman" , 1,4,"Wakanda"];
for (const count of myArray) {
    console.log(`${count}`);
}

//MAPS (JUST LIKE OBJECTS)

const country = new Map();

country.set('In',"India");
country.set('USA',"United States Of America");
country.set('Fr',"France");

console.log(country);

for (const [key,value] of country) {
    // console.log(`${key,value}`);
    console.log(`${key}:-${value}`);
}

//FOR OBJECTS:- WE USE FOR IN LOOP

const myObj = {
    js: "javascript",
    cpp: "c++",
    css: "Cascading Style Sheets",
    rb: "ruby"
}

for (const key in myObj) {
    console.log(`${key}: ${myObj[key]}`);
}