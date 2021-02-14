let promise = axios.get('http://api.themoviedb.org/3/movie/popular?api_key=c0b6dea31a9d647a6b7d1eafa59bacaa');


// Promesa de un array de pelis

let pelisArrayPromise = promise.then((response) => response.data.results);
resultsPromise = promise.then(response => response.results);


//Esta funcion recibe un array de peliculas y pinta en un div una linea por cada pelicula

const pintaLasPelis = (pelisCollection) => { 
    const divPelisDomElement = document.getElementById('pelis');
    
    pelisCollection.map((pelicula) =>{
        const pathImg = 'https://image.tmdb.org/t/p/w500';
        const newPeliDomElement = document.createElement('div');
        const titleMovie = document.createElement('h4')
        const moviePic = document.createElement('img')
        
        divPelisDomElement.appendChild(newPeliDomElement)
        newPeliDomElement.appendChild(titleMovie)
        newPeliDomElement.appendChild(moviePic)
        
        newPeliDomElement.setAttribute('class', 'titlePicture')
        titleMovie.innerHTML = pelicula.title;
        moviePic.setAttribute('src', pathImg+pelicula.poster_path);

    });
}

pelisArrayPromise.then(pintaLasPelis);