"use strict";

const numberOfFilms = +prompt('How many movies have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('What was the last film you\'ve watched?', ''),
    b = +prompt('Rate the movie from 1 to 10', ''),
    c = prompt('What was another film you\'ve watched recently?', ''),
    d= +prompt('Rate the movie from 1 to 10', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);