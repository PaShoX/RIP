"use strict";

// prompt('Сколько фильмов вы посмотрели?', '');

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