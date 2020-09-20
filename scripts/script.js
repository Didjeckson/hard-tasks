'use strict';
let num = 266219;


let multiplication = function (item) {
    let sum = item % 10;
    item /= 10;
    item = parseInt(item);
    // Math.trunc(item);
    while (item > 0) {
        sum *= item % 10;
        item /= 10;
        item = parseInt(item);
        // Math.trunc(item);
    }

    // let sum = item[0];

    // for (let i = 1; i < num.length; i++) {
    //     sum *= item[i];
    // }

    return sum;
};

console.log(multiplication(num));