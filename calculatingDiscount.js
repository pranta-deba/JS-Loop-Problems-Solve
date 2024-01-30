let amount = [121, 33, 470, 290, 136, 170, 990, 1680];

let discountPrice = [];
// used loop
for (let i = 0; i < amount.length; i++) {
  const element = amount[i];
  if (element > 150) {
    let calDiscount = element - (element * 10) / 100;
    discountPrice.push(calDiscount);
  } else {
    discountPrice.push(element);
  }
}
console.log(discountPrice);

// used .map()

let discountPriceMap = amount.map((e) => {
  if (e > 150) {
    let calDiscount = e - (e * 10) / 100;
    return calDiscount;
  } else {
    return e;
  }
});
console.log(discountPriceMap);
