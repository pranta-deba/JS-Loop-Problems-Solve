let amount = [12, 44, 76, 99, 23, 45, 67, 44, 78];
let sum = 0;

for (let i = 0; i < amount.length; i++) {
   const currentNum = amount[i];
   sum += currentNum;
}
console.log("Sum of array : ", sum);