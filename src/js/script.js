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
const cal = (a, b) => a + b ; // сокращенный вариант стр функции
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

// " CallBack функции"
function learnJs (lang, CallBack) {
	console.log(`Я учу ${lang}`);
	CallBack();
}
function done () {
	console.log("Я прошел этот урок!");
}
learnJs('Java script', done); // пример с имменой функцией

learnJs('Java script', function() { // пример с анонимной функциейб после выполнения она исчезнет
	console.log('Я прошел этот урок!');
});

// "ОБЬЕКТЫ"
const options = {
	name: 'test',
	width: 1024,
	height: 1025,
	color: {
		border: 'black',
		bg: 'red'
	}
};
console.log(options.name); // вызываем ключ name
// delete options.name; // удаляем ключ,значение из обьекта
// console.log(options);

for (let key in options) { // перебераем ключи обьекта
	if (typeof(options[key]) === 'object') {
		for (let i in options[key]) {
			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
		}
	}else {
		console.log(`Свойство ${key} имеет значение ${options[key]}`); //Это обращение к ключам основного обьекта и вложенного 
	}
		// console.log(`Свойство ${key} имеет значение ${options[key]}`);  // это основного к ключам общего обьекта
}

const opti = {
  name: "test",
  width: 1024,
  height: 1025,
  color: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {  // применение функции в обьекте
	console.log('Test');
  }
};
opti.makeTest();

const {border, bg} = opti.color;  //деструктуризация обьекта
console.log(border);

console.log(Object.keys(opti)); // показывает общее нименование клюей обьекта
console.log(Object.keys(opti).length); // показывет общее количестко ключей обьекта

// "МАССИВЫ"
const frr = [1, 2, 3, 4, 5];
frr.pop(); //Метод удаляет элемент в конце массива
frr.push(10); // Метод дообавляет элемент в конец массива
console.log(frr);
for (let i = 0; i < frr.length; i++ ) { // Цикл переберающий элементы массива
	console.log(frr[i]);
}

for (let val of frr) { // ПЕребераем элементы массива с помощью метода for , of
	console.log(val);
} 
frr.forEach(function(bob, i , frr) { //Перебор массива с момощью метода forEach и calback функции
		console.log(` ${i}: ${bob} внутри массива ${frr} `);
});