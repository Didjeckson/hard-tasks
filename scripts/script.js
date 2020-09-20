'use strict';


function text(str) {

    console.log(typeof (str));

    if (typeof (str) !== 'string') {
        alert('it is not a string! Please reload a website. And change "n"');
        // text(str);
        return;
    }

    str.trim();

    if (str.length > 30) {
        str = str.substr(0, 30);
        str = str + '...';

    }
    console.log(str);
}

let n = 'fhjkuty';

text(n);