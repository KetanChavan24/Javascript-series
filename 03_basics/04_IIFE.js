//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
//IT IS IMMEDIATELY EXECUTED
//AND ALSO IT ELIMINATES THE PROBABILITY OF POLLUTION OR PROBLEMS THAT CAN OCCUR DUE TO SCOPING 


//NAMED IIFE
(function exp(){
    console.log(`This is an immediately invoked function expression which can be used for executing as soon as the website loads.`);
})();
//';' is important for terminating the context of iife.


//UNNAMED IIFE(ARROW FUNCTION EXPRESSION)
( (name) => {
console.log(`${name}, welcome to the website.`);
})('Ketan');