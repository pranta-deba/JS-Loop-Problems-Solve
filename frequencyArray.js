const frequencyArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const simpleNumber = "922004575698714254729";
for (let i = 0; i < simpleNumber.length; i++) {
  const element = simpleNumber[i];
  frequencyArray[element]++;
}
console.log(frequencyArray);

// FindOut maximun occurance
let maxOccurance = frequencyArray[0];
let maxOccuranceIndex = 0;
for (let j = 0; j < frequencyArray.length; j++) {
  const element = frequencyArray[j];
  if (maxOccurance < element) {
    maxOccurance = element;
    maxOccuranceIndex = j;
  }
}
console.log(maxOccuranceIndex, " ache :", maxOccurance, " Bar.");
