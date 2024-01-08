//For joining 2 arrays:- concat

const villians = ["Joker","Sukuna","Obito","Madara","Evil Eye"];

const heroes = ["Batman","Superman","Naruto","Itachi","Asta"];

const allCharacatersConcat = villians.concat(heroes);
console.log(allCharacatersConcat);

//For joining 2 or more arrays:- spread

const allCharacatersSpread = [...heroes, ...villians];
console.log(allCharacatersSpread);

//FLAT METHOD 

let anyArr = [1,2,3,4,[,4,5,6],7,8,[9,3,4,[,5,6,7]]];
console.log(anyArr.flat(1));//parameter gives the depth of the flat method
console.log(anyArr.flat(Infinity));

console.log(Array.from("KETAN"));//converts into array
console.log(Array.from({name: 'KETAN'}));//INTERESTING CASE FOR INTERVIEW AS IT GETS CONFUSED IN COVERTIING OF WHICH PART OF THE GIVEN VARIABLE

//OF METHOD 

let car1 = "'Audi','Lambo'";
let car2 = "BMW";
let car3 = "Benz";

let carsCollection = Array.of(car1,car2,car3);
console.log(carsCollection);