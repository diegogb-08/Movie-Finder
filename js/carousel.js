// Carousel

const row = document.querySelector('.carousel');
const row2 = document.querySelector('.carousel2');
const row3 = document.querySelector('.carousel3');
const row4 = document.querySelector('.carousel4');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

/* Event Listener for the right arrow */
const rightArrowButton = () => {
    row.scrollLeft += row.offsetWidth;
};

const rightArrowButton2 = () => {
    row2.scrollLeft += row.offsetWidth;
};

const rightArrowButton3 = () => {
    row3.scrollLeft += row.offsetWidth;
};

const rightArrowButton4 = () => {
    row4.scrollLeft += row.offsetWidth;
};

/* Event Listener for the left arrow */
const leftArrowButton = () => {
    row.scrollLeft -= row.offsetWidth;
};

const leftArrowButton2 = () => {
    row2.scrollLeft -= row.offsetWidth;
};

const leftArrowButton3 = () => {
    row3.scrollLeft -= row.offsetWidth;
};

const leftArrowButton4 = () => {
    row4.scrollLeft -= row.offsetWidth;
};





// Hover

// const films = document.getElementsByClassName("titleCollection")

// films.forEach((film) => {
//     film.addEventListener('mouseenter', (e) => {
//         const element = e.currentTarget;
//         setTimeout(() => {
//             films.forEach(film => film.classList.remove('.hover'));
//             element.classList.add('hover');
//         }, 300);
//     });
// });

// row.addEventListener
// white lines Indicators

// const topRatedFilms = document.getElementsByClassName('moviesTopRated')
// const upcomingFilms = document.getElementsByClassName('moviesUpcoming')
// const nowPlayingFilms = document.getElementsByClassName('moviesNowPlaying')

// const numberOfPages1 = Math.ceil(popularFilms.lenght / 5);
// const numberOfPages2 = Math.ceil(topRatedFilms.lenght / 5);
// const numberOfPages3 = Math.ceil(upcomingFilms.lenght / 5);
// const numberOfPages4 = Math.ceil(nowPlayingFilms.lenght / 5);


// for(let i = 0; i < numberOfPages1; i++) {
//     const indicator = document.createElement('button')
//     document.querySelector('.indicators').appendChild(indicator)
// }


