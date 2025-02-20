"use strict";



// "УСЛОВИЯ"
const num = 50;
if (num < 49) {
	console.log('error');
} else if(num >100 ) {
	console.log('много');
} else {
	console.log('ok');
}
// "СОкращенная версия записи условия с помощью тернарного оператора"
(num === 51) ? console.log('ok') : console.log('error');

// "Условия с помощью конструкции switch - при этом происходит строгое сравнение"
const n = 50;
switch (n) {
	case 49:
		console.log('Неверно');
		break;
	case 100:
		console.log("Неверно");
		break;
	case 50:
		console.log("Попал");
		break;
	default:
		console.log('АХахахах');
		break;			
}

// "ЦИКЛЫ"
let t = 50;
while (t <= 55) {
	console.log(t);
	t++;
}

// "Цикл do / while"
let bb = 50;
do {
	console.log(bb);
	bb++;
}
while (bb <= 55);
// "Цикл for"
for(let i = 1; i < 10; i++) {
	if (i === 6) {
		break;  
		// "Код выполниться до этого значения"
		// continue;
		// "Код исключит это условие"
	}
	console.log(i);
}

// "ФУНКЦИИ"
function showFirstMessage (text) {
	console.log(text);
}
showFirstMessage("Hello World");


function calc(a, b) {
	return (a + b);
}
console.log(calc(4, 3));
console.log(calc(10, 3));
console.log(calc(20, 5));

function ret () {
	let nun = 50;
	//
	return nun;
}
const anotherNun = ret ();
console.log(anotherNun);

// "Функциональное вырожение"
const logger = function () {
	console.log('Hello');
};
logger();

// "Стрелочная функция"
const cal = (a, b) => a + b ;
console.log(cal(1, 9));

const cali = (a, b) => {
	// console.log(cali);
	return a + b;
};
console.log (cali (1,9));

// "Методы и свойства строк "
const str = 'tesT bob';
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf("bob"));
// "Методы которые могут модифицировать строку"
console.log(str.slice(5, 8));
console.log(str.slice(2));
console.log(str.substring(2, 8)); // тоже самое что и slice
console.log(str.substr(5, 8));
// "Методы для работы с числами"
const nin = 12.2;
console.log(Math.round(nin)); //округляет число
console.log (parseInt(nin)); // метод переводит число в другую систему исчисления
console.log(parseFloat(nin));  // метод берет число или строку и возвращает его в десятичном значении