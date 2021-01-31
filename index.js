"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many movies have you watched?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count))
        {
            personalMovieDB.count = +prompt('How many movies have you watched?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count != '' && personalMovieDB.count != null && personalMovieDB.count < 10) {
            console.log('Quite a few');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You are an ordinar user');
        } else if (personalMovieDB.count >= 30) {
            console.log('Wow, quite a lot');
        } else {
            console.log('Error!');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`What is your favorite genre number ${i}?`, '');
            if (genre === "" || genre === null) {
                console.log('You forgot to enter a statement or entered a wrong one');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favorite genre number ${i + 1} is ${item}`);
        });
    }
};
