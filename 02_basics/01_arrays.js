//Declaring arrays(a type of variable which can store elements of multiple type of variables)

const myArr = [1,"Cristiano","ketan",2];
console.log(myArr);

const myArr2 = new Array(1, ["Gojo","Naruto","Hashira","Barou"] , "Rengoku");
console.log(myArr2);

//Accessing elements of an array
console.log(myArr[0]);//index of an array starts from 0.
console.log(myArr2[1]);

//METHODS IN ARRAYS

const nums = [0,2,3,4,5];
console.log(nums);
nums.push(8);//Pushes the parameter at the last index.
console.log(nums);
nums.pop();//Removes the element from the last index.
console.log(nums);

const cars = ["Lambo","BMW","Mercedes"];
console.log(cars);
cars.unshift("Koininsinegg");//Pushes the parameter at the first(0th) index.
console.log(cars);
cars.shift();//Removes the element from the first(0th) index.
console.log(cars);

//Arrays also have various methods such as include,indexof etc

/*DIFFERENCE BETWEEN SLICE AND SPLICE: 1.)The outer range is not included in splice.
2.) The below code:(Major reason) */
const orgArr = [0,1,2,3,4,5];
console.log(`A ${orgArr}`);
const sliceArr = orgArr.slice(1,4);
console.log(`Sliced array : ${sliceArr}`);
console.log(`B ${orgArr} (Original array after slicing)`);
const spliceArr = orgArr.splice(1,4);
console.log(`Spliced array : ${spliceArr}`);
console.log(`B ${orgArr} (Original array after splicing)`);
