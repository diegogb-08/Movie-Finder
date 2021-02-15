
// Global Variables

// let url = 'http://api.themoviedb.org/3/movie/popular?api_key=c0b6dea31a9d647a6b7d1eafa59bacaa'

const pathImg = 'https://image.tmdb.org/t/p/w500';
let input = document.getElementById('searchBar');
let baseUrl = 'http://api.themoviedb.org/3';
let movieOrTv = 'search';
let endPoint = 'multi';
let apiKey = '?api_key=c0b6dea31a9d647a6b7d1eafa59bacaa';
let page = '&page=';
let checkBox = document.getElementById('searchById');
// &query=$


const popular = async () => {
    // Local Variables
    let movieOrTv = 'movie';
    let endPoint = 'popular';

    // URL Building
    let url = `${baseUrl}/${movieOrTv}/${endPoint}/${apiKey}`; 
    let movieCollection = await call(url);
    console.log(url)
    //Render
    renderPopular(movieCollection);
};



// Render Popular Movies

const renderPopular = (pelisCollection) => { 
    const divPelisDomElement = document.getElementById('popularMovies');
    
    pelisCollection.map((pelicula) =>{
        
        const newPeliDomElement = document.createElement('div');
        const titleMovie = document.createElement('div')
        const moviePic = document.createElement('img')
        
        divPelisDomElement.appendChild(newPeliDomElement)
        newPeliDomElement.appendChild(moviePic)
        newPeliDomElement.appendChild(titleMovie)
        
        newPeliDomElement.setAttribute('class', 'movieCollection')
        titleMovie.setAttribute('class', 'titleCollection')
        titleMovie.innerHTML = pelicula.title;
        moviePic.setAttribute('src', pathImg+pelicula.poster_path);

    });
}


// Movie searcher

const searcher = async () => {
    if(event.keyCode === 13) {
        let query = input.value;

        if(checkBox.checked == true) {
            let movieOrTv = 'movie';
            let url = `${baseUrl}/${movieOrTv}/${query}/${apiKey}`
            let movieCollection = await call(url);
            changeScreen('moviesContainer','movieSearcher')
            render(movieCollection);

        }else {
            //Construccion de la URL 
            let url = `${baseUrl}/${movieOrTv}/${endPoint}/${apiKey}&query=${query}`; 
            let movieCollection = await call(url);
            changeScreen('moviesContainer','movieSearcher')
            render(movieCollection);

        }
    }
};


// Calling the url created in the searcher

const call = async (url) => {
    let res = await axios.get(url);
    
    if(!res.data.results){
        error = new Error("La url era incorrecta");
        return error;
    }
    
    return res.data.results;
};


// Rendering the search

const render = async (movieCollection) => {

    movieCollection.map((arrayPosition) =>{

        const divPelisDomElement = document.getElementById('showSelection');
        const newPeliDomElement = document.createElement('div');
        const titleMovie = document.createElement('div')
        const moviePic = document.createElement('img')
        
        divPelisDomElement.appendChild(newPeliDomElement)
        newPeliDomElement.appendChild(moviePic)
        newPeliDomElement.appendChild(titleMovie)
        
        newPeliDomElement.setAttribute('class', 'titlePicture')
        titleMovie.setAttribute('class', 'title')
        titleMovie.innerHTML = arrayPosition.title;
        moviePic.setAttribute('src', pathImg+arrayPosition.poster_path);
        
    });

    return;
};

// Change Screen

let changeScreen = (pastPhase,newPhase) => {
    
    currentScreen = document.getElementById(pastPhase);
    futureScreen = document.getElementById(newPhase);
    
    currentScreen.style.display = "none";
    futureScreen.style.display = "flex";

};






popular()





