//NULLISH COALESGING OPERATOR (??): USED IN CASE OF 'NULL' AND 'UNDEFINED' VALUE.
//IT ALWAYS PRINTS THE VALUE BEFORE THE QUESTION MARKS EXCEPT FOR 'NULL' AND 'UNDEFINED' VALUES.

let val1 = 10 ?? 20;
let val2 = null ?? 10;
let val3 = undefined ?? 34;
console.log(val1);
console.log(val2);
console.log(val3);

//TERNIARY OPERATOR
//condition ? true : false

const drinkPrice = 50;

drinkPrice >= 60 ? console.log(`We can buy drink`) : console.log('We can' + "'t buy drink.");