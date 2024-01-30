let serial = [22, 33, 44, 55, 66, 77, 88, 99];

// end result = [55,66,77,88,99,22,33,44]

let target = 55;

while (true) {
    if (serial[0] == target) {
        break;
    }
    const extractedElement = serial.shift();
    serial.push(extractedElement);
}
console.log(serial);