let number = [12, 44, 76, 99, 23, 45, 67, 44, 78];

console.log(number);
console.log("Array Length is : ", number.length - 1);
console.log("1st target value is : ", number.indexOf(12));
console.log("2nd target value is : ", number.indexOf(78));

let temp = number[8];
number[8] = number[0];
number[0] = temp;

console.log(number);