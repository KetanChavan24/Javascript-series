//CHAINING CONCEPT USING BOTH MAP AND FILTER

const anyNums = [1,2,3,4,5,6,7,8,9,10];

let myNums = anyNums.map((nums) => nums * 10).map((nums) => nums + 1).filter((nums) => nums > 30);

console.log(myNums);