let fruits = ["🍌", "🍑", "🥧", "🍓", "🍒", "🍍", "🥭", "🍎", "🍏"];

let target = "🍒";
let foundIndex = -1;

for (let i = 0; i < fruits.length; i++) {
  const element = fruits[i];
  if (element == target) {
    foundIndex = i;
  }
}

if (foundIndex > -1) {
  console.log(foundIndex, " index Found.");
} else {
  console.log("not found!");
}
