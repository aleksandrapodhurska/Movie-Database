"use strict";

const numberOfFilms = +prompt('How many movies have you watched?', '');
const movieName = prompt('What was the last film you\'ve watched?', '');
const movieMark = +('Rate the movie from 1 to 10', '');
const movie2Name = prompt('What was another film you\'ve watched recently?', ''); 
const movie2Mark = +('Rate the movie from 1 to 10', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        'movieName': 'movieMark'
    },
    actors: {},
    genres: [],
    privat: false
};
