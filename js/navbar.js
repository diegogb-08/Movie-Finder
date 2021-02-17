/* Hamburguer */

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

navbarLinks.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// Navbar Links

const films = document.getElementById('films')

films.addEventListener('click', ()=> {
    changeScreen('movieSearcher','mainContainer')
})
