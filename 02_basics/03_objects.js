//Object literals

//PS: For interview symbol as a key may be asked:
let mysym = Symbol("key1");


const user = {
    //key = value
    name: "Shubhankar",
    [mysym]: "Mykey1",
    age: 20,
    email: "Shubha@gmail.com",
    "full name": "Shubhankar Chavan",
    absentOn: ["Saturday","Sunday"],
}

//ACCESSING ELEMENTS IS DONE BY 2 TECHNIQUES 
console.log(user.name);
console.log(user["name"]);
//REASON WHY YOU SHOULD KNOW THE SECOND TECHNIQUE OF ACCESSING ELEMENTS OF AN OBJECT
console.log(user["full name"]);
console.log(typeof mysym);

//FOR CHANGING THE VALUE OF ELEMENTS OF OBJECT:
user.email = "subu@gmail.com";
console.log(user);
//YOU CAN ALSO FREEZE AN OBJECT(NO CHANGES WILL BE MADE)
Object.freeze(user);
user.email = "subu@gpt.com";
console.log(user);

const tinderUser = {};

tinderUser.greeting = function() {
    console.log(`Hey User`);
}

tinderUser.greetingTwo = function() {
    console.log(`Hey User, ${"name"}`);
}


console.log(tinderUser);
console.log(tinderUser.greeting());
console.log(tinderUser.greetingTwo());