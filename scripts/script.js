'use strict';


function text(str) {

    if (typeof (str) !== 'string') {
        alert('it is not a string!');
        text(str);
    }



}

let n = 4;

text(n);