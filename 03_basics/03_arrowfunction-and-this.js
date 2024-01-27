const myObject = {
    user: "Ketan",
    price: 999,
    loginMessage: function(){
        //THIS ALWAYS PROVIDES THE CORRECT CONTEXT
        console.log(`${this.user}, welcome to website!`);
        console.log(this);
    }
}

myObject.loginMessage();
myObject.user = "Cris";//HERE THE CONTEXT IS CHANGED
myObject.loginMessage()

console.log(this);
//ON THE BROWSER THE JAVASCRIPT ENGINE PROVIDES WINDOW AS A GLOBAL SCOPE WHEREAS ON NODE, IT PROVIDES AN EMPTY OBJECT.
//(THIS) DOES NOT WORK IN A FUNCTION.

//ARROW FUNCTIONS

//EXPLICIT METHOD (INCLUDES RETURN `KEYWORD`)

const addTwo = (num1,num2) => {
    return num1 + num2;
}

console.log(addTwo(3,4));

//IMPLICIT METHOD (DOESNT REQUIRE RETURN `KEYWORD`)
//THIS IS ALSO KNOWN AS EXPRESSION
const multTwo = (num3,num4) => (num3 * num4);

console.log(multTwo(3,4));