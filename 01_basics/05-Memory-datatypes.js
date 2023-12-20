//for primitive data type:

let username = "Ketan";

console.log("The original username is " + username);

let username2 = username;
username2 = "Shubhankar";
console.log("username2 is " + username2);
console.log("username is " + username);

//From the above section we can understand that primitive data types store memory in stack format, i.e the in this the copy of original is associated to another variable

//for Non-primitive data type:

let userone = {
    usermail: "kc@gmail.com",
    userscore: "2",
}
console.log("Original usermail of userone is " + userone.usermail);

let usertwo = userone;

usertwo.usermail = "sc@gmail.com";

console.log("The usermail of userone is " + userone.usermail);
console.log("The usermail of usetwo is " + userone.usermail);

//From the above section we can understand that the non-primitive data types use heap memory, i.e memory is any change or variable is associated with the original data itself