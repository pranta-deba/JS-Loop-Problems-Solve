// used for loop
let rollNumber = [12, 55, 98, 55, 34, 123, 67, 87, 91, 40, 77];
let filteredRollNumber = [];

for (let i = 0; i < rollNumber.length; i++) {
  const currentItems = rollNumber[i];
  if (currentItems <= 50) {
    filteredRollNumber.push(currentItems);
  }
}

console.log(filteredRollNumber);

// used .filter
let filteredRollNumber2 = rollNumber.filter((e)=>{
    return e >= 50;
});
console.log(filteredRollNumber2);