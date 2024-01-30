let number = [22, 34, 56, 12, 88, 43, 99, 12];

let maxNum = number[0];
let minNum = number[0];

for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element > maxNum) {
        maxNum = element;
    }

    if (element < minNum) {
        minNum = element;
    }
    
}
console.log("Max Number : ", maxNum, ". Min Number : ", minNum);