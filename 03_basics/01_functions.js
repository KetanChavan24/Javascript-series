function sayName() {
    console.log(`My name is Ronaldo`);
}

sayName();
//WHILE DEFINING THE FUNCTIONS:(PARAMETERS) => ACCORDING TO NOTATION
function addTwoNumbers(num1,num2){
    return num1 + num2;
}

//WHILE CALLING THE FUNCTION:(ARGUMENT) => ACCORDING TO NOTATION

const sum = addTwoNumbers(3,4);
console.log(sum);

function multiplyTwoNumbers(num1,num2){
    console.log("CRISTIANOOOO");
    return num1*num2;
    console.log("Messi");//WILL NOT BE EXECUTED AS RETURN ACTS AS THE END OF THE FUNCTION
}

const prod = multiplyTwoNumbers(3,4);

console.log(prod);

function loggedMessage(user){
    if(!user){
        console.log("Please enter username!");
        return;
    }
    return `${user} just logged in!`;
}

const textMessage = loggedMessage("Ketan");
console.log(textMessage);

//ANOTHER CASE IF THE USER DOESN'T INPUTS THE USERNAME IS TO TAKE A DEFAULT VALUE WHICH WILL BE OVERIDE WITH THE VALUE GIVEN BY THE USER

function loggedINMessage(username = "Raj"){
    
    return `${username} just logged in!`;
}

const message = loggedINMessage("Ketan");
console.log(message);