const user = new Object();//singleton object
const tinderuser = {};//Non-singleton object
console.log(user);
console.log(tinderuser);

const eaUser = {
    age: 20,
    isLoggedIn: false,
    name: "Ketan",
    fullname: {
        userfullname: {
            firstname: "Ketan",
            lastname: "Chavan",
        }
    }
}

console.log(eaUser.fullname);
console.log(eaUser.fullname.userfullname);
console.log(eaUser.fullname.userfullname.firstname);

//JOINING 2 OR MORE OBJECTS:

let obj1 = {
    1: "kets",
    2: 12,
}
let obj2 = {
    3: "chets",
    4: 13,
}
let obj3 = {
    5: "pets",
    6: 14,
}

const obj4 = Object.assign({},obj1,obj2,obj3);
//another method:
const obj5 = {...obj1, ...obj2, ...obj3};

console.log(obj4);
console.log(obj5);