

// Global Variables


const pathImg = 'https://image.tmdb.org/t/p/w500';
let input = document.getElementById('searchBar');
const baseUrl = 'https://api.themoviedb.org/3';
let movieOrTv = 'search';
let endPoint = 'movie';
let apiKey = '?api_key=c0b6dea31a9d647a6b7d1eafa59bacaa';
let page = '&page=';
let checkBox = document.getElementById('searchById');


const renderCollection = async (endPoint) => {
    // Local Variables
    let movieOrTv = 'movie';

    // URL Building
    let url = `${baseUrl}/${movieOrTv}/${endPoint}${apiKey}`; 
    let movieCollection = await call(url);
    //Render

    if(endPoint == "popular")
       return renderPopular(movieCollection);

    else if(endPoint == "top_rated") 
       return renderTopRated(movieCollection);

    else if(endPoint == "upcoming")
        return renderUpcoming(movieCollection);

    else if(endPoint == "now_playing")
        return renderNowPlaying(movieCollection);

    
};



// Render Popular Movies

const renderPopular = (pelisCollection) => { 
    const divPelisDomElement = document.getElementById('popularMovies');
    
    pelisCollection.map((pelicula) =>{
        
        divPelisDomElement.innerHTML += `<div class='movieCollection moviesPopular'>
        <div class='titleCollection'><img class="film" src='${pathImg}${pelicula.poster_path}'>
        </img><div>${pelicula.title}</div></div></div>`
    });
}

// Render Top rated Movies

const renderTopRated = (pelisCollection) => { 
    const divPelisDomElement = document.getElementById('topRatedMovies');
    
    pelisCollection.map((pelicula) =>{
               
        divPelisDomElement.innerHTML += `<div class='movieCollection moviesTopRated'>
        <div class='titleCollection'><img class="film" src='${pathImg}${pelicula.poster_path}'>
        </img><div>${pelicula.title}</div></div></div>`

    });
}

// Render Upcoming Movies

const renderUpcoming = (pelisCollection) => { 
    const divPelisDomElement = document.getElementById('upcomingMovies');
    
    pelisCollection.map((pelicula) =>{
               
        divPelisDomElement.innerHTML += `<div class='movieCollection moviesUpcoming'>
        <div class='titleCollection'><img class="film" src='${pathImg}${pelicula.poster_path}'>
        </img><div>${pelicula.title}</div></div></div>`

    });
}


// Render Now Playing Movies

const renderNowPlaying = (pelisCollection) => { 
    const divPelisDomElement = document.getElementById('nowPlayingMovies');
    
    pelisCollection.map((pelicula) =>{
               
        divPelisDomElement.innerHTML += `<div class='movieCollection moviesNowPlaying'>
        <div class='titleCollection'><img class="film" src='${pathImg}${pelicula.poster_path}'>
        </img><div>${pelicula.title}</div></div></div>`

    });
}


// Rendering the search

const renderSearch = async (movieCollection) => {
    const divPelisDomElement = document.getElementById('showSelection');

    movieCollection.map((arrayMovies) =>{
        console.log(arrayMovies)

        if(arrayMovies.title || arrayMovies.poster_path != undefined || null) {
            
            divPelisDomElement.innerHTML += `<div class='titlePicture'><img class="film" src='${pathImg}${arrayMovies.poster_path}'></img>
            <div class='description'><div class='title'><h3>${arrayMovies.title}</h3>
            </div><div class='rate'><p>Rate: ${arrayMovies.vote_average}/10</p>
            </div><div class='overview'><p>${arrayMovies.overview}</p></div></div></div>`
        }

        
    });

    return;
};

// Rendering the search

const renderMovieId = async (res) => {

    const divPelisDomElement = document.getElementById('showSelection');
   
        divPelisDomElement.innerHTML += `<div class='titlePicture'>
        <img class="film" src='${pathImg}${res.poster_path}'></img>
        <div class='description'><div class='title'><h3>${res.title}</h3>
        </div><div class='rate'><p>Rate: ${res.vote_average}/10</p>
        </div><div class='overview'><p>${res.overview}</p></div></div></div>`
        

    return;
};


// if(event.keyCode !== 8){}

// Movie searcher

const searcher = async () => {
    if(event.keyCode === 13) {
        let query = input.value;
        const divPelisDomElement = document.getElementById('showSelection');
        divPelisDomElement.innerHTML -= '';

        if(checkBox.checked == true) {
            let movieOrTv = 'movie';
            let url = `${baseUrl}/${movieOrTv}/${query}${apiKey}`
            let movieById = await call(url);
            changeScreen('mainContainer','movieSearcher')
            renderMovieId(movieById);
            console.log('WE ARE IN THE CHECKBOX')

        }else {
            //Construccion de la URL 
            let url = `${baseUrl}/${movieOrTv}/${endPoint}${apiKey}&query=${query}`; 
            let movieCollection = await call(url);
            changeScreen('mainContainer','movieSearcher')
            renderSearch(movieCollection);
            console.log('WE ARE IN THE SEARCH BY WORD')

        }
    }
};


// Calling the url created in the searcher

const call = async (url) => {
    let res = await axios.get(url);
    
    if(res.data.results)
        return res.data.results;
    if(res.data.title)
        return res.data;
    else{
        return error = new Error("The URL was wrong!");
    }

};



// Change Screen

let changeScreen = (pastPhase,newPhase) => {
    
    currentScreen = document.getElementById(pastPhase);
    futureScreen = document.getElementById(newPhase);
    
    currentScreen.style.display = "none";
    futureScreen.style.display = "flex";

};






renderCollection('popular');
renderCollection('top_rated');
renderCollection('upcoming');
renderCollection('now_playing');






