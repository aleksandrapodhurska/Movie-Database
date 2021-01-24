"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies have you watched?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms))
    {
        numberOfFilms = +prompt('How many movies have you watched?', '');
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('What was the last film you have watched?', ''),
            b = +prompt('Rate the movie from 1 to 10', '');
        console.log('correct');
        if (a != '' && b != '' & a != null && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
            console.log('Error!');
        }
    }    
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count != '' && personalMovieDB.count != null && personalMovieDB.count < 10) {
        console.log('Quite a few');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are an ordinar user');
    } else if (personalMovieDB.count >= 30) {
        console.log('Wow, quite a lot');
    } else {
        console.log('Error!');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`What is your favorite genre number ${i}?`, '');
    }
}

writeYourGenres();