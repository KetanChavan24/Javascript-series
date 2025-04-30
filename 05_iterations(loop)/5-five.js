//FILTER

const anyNums = [1,2,3,4,5,6];
let myNums = anyNums.filter((num) => num > 3);
console.log(myNums);//output: [4,5,6]

let MyNums = anyNums.filter((num) => {
     return num > 2;//here return works as a scope has been formed
 })
 console.log(MyNums);//output: [3,4,5,6]

anyNums.forEach(element => {
 if(element > 2){
    console.log(element);
}
  console.log(anyNums);
 });
// output:[ 1, 2, 3, 4, 5, 6 ]
//[ 1, 2, 3, 4, 5, 6 ]
//3
//[ 1, 2, 3, 4, 5, 6 ]
//4
//[ 1, 2, 3, 4, 5, 6 ]
//5
//[ 1, 2, 3, 4, 5, 6 ]
//6
//[ 1, 2, 3, 4, 5, 6 ]





