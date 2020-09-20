'use strict';

let arr = ['727275', '132523', '25243', '25245475', '4353464', '2462462', '24436'];

for (let i = 0; i < arr.length; i++) {
    let arrElement = arr[i];
    if (arrElement[0] === '2' || arrElement[0] === '4') {
        console.log(arrElement);
        continue;
    }
}