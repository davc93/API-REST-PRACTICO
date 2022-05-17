const API_KEY = '5524b4c77971b4bb70dff079febbbb06';
const API_URL_TENDENCIES = 'https://api.themoviedb.org/3/trending/';
async function getTrendingMoviesPreview(){

    const res = await fetch(`${API_URL_TENDENCIES}movie/day?api_key=${API_KEY}`);
    const data = await res.json();
    const movies = data.results;
    console.log({data, movies});
    movies.forEach(element => {
        const tendenciesMoviesContainer = document.querySelector('#tendencies .tendencies__img-list .img-container');

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('img-container');
        const movieImg = document.createElement('img');
        movieImg.setAttribute('alt',`Foto de pelicula ${element.title}`);
        movieImg.setAttribute('src',`https://image.tmdb.org/t/p/w300/${element.poster_path}`);
        movieContainer.appendChild(movieImg);
        tendenciesMoviesContainer.appendChild(movieContainer);
    });
}

getTrendingMoviesPreview();