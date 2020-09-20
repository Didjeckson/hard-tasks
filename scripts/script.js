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

let res = multiplication(num);

console.log('умножнение цифр: ' + res);

console.log('exponention number on 3: ' + res ** 3);
/// странно в статье написано, что в es6 ** такое воздевение есть, а jshint пишет в es7, кому верить, можешь ответить?
let exponention = (res ** 3);
document.write(String(exponention).slice(0, 2));