console.log("2" > 3);
console.log("2" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// The reason is that an equality check == and comparisons > < >=
// <=work differently. Comparisons convert null to a number, treating it as 0.
// That's why (3) null>=0 is true and (1) null0 is false.

console.log("2" === 2);//here the string is not converted into any number due to strict check(===)