'use strict';

let lang = 'e';
/*
if (lang === 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (lang === 'en') {
    console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
} else {
    console.log('Чувак, не гони!');
}
*/
/*
switch (lang) {
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break;

    case 'en':
        console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
        break;
    default:
        console.log('Чувак, не гони!');
}
*/
let arr = [
    ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
];

lang === 'ru' ? console.log(arr[0].join(', ')) : lang === 'en' ? console.log(arr[1].join(', ')) : console.log('Чувак, не гони!');

let namePerson = 'Максимв';

namePerson === 'Артем' ? console.log('Пан Директор') :
    namePerson === 'Максим' ? console.log('Папа тысячи программистов') :
    console.log('студент');