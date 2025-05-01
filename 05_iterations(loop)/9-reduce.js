//CONCEPT OF REDUCE (USED IN SHOPPING CART)

const nums = [1,2,3,4];

const total = nums.reduce(function (accumulator,currentvalue){
    console.log(`accumulator: ${accumulator} , currentvalue: ${currentvalue}`);
     return accumulator + currentvalue;
 },0)//accumulator value = 0(initial value)


ARROW FUNCTION
 const total = nums.reduce((accumulator,currentvalue) => {
     return accumulator + currentvalue;
 },0);

 console.log(total);


//ARROW FUNCTION IN ONE LINE
const myTotal = nums.reduce((accum,currval) => accum + currval, 0);

console.log(myTotal);

const cart = [

    {
        name: "Cloud Computing",
        price: 999,
    },
    {
        name: "C Programming",
        price: 2999,
    },
    {
        name: "Data Science",
        price: 12999,
    },
    {
        name: "AI/Ml",
        price: 899,
    },
    {
        name: "Prompt Engineering",
        price: 999,
    }
    

]

const cartTotal = cart.reduce(function (accumulator,currentvalue) {
    return accumulator + currentvalue.price;
},0);

console.log(cartTotal);
