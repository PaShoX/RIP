"use strict";


const numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');

const personaMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};
const a = prompt("Один из последних просмотренных фильмов", ""),
      b = prompt("На сколько оцените его", "");
 
personaMovieDB.movies[a] = b;
console.log(personaMovieDB); 

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