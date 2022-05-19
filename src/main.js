const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
        'Content-Type':'application/json;charset=utf-8'
    },
    params:{
        'api_key':API_KEY
    }

}); 


//util

function createMovies(movies,container){
    container.innerHTML = '';
    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('img-container');
        const movieImg = document.createElement('img');
        movieImg.setAttribute('alt',`Foto de pelicula ${movie.title} ${movie.title}`);
        movieImg.setAttribute('src',`https://image.tmdb.org/t/p/w300/${movie.poster_path}`);
        movieContainer.appendChild(movieImg);
        container.appendChild(movieContainer);
    });
}


async function getTrendingMoviesPreview(){

    const { data } = await api('trending/movie/day');
    const movies = data.results;
    console.log({data, movies});
    createMovies(movies, tendenciesGrid);
}
async function getCategoriesMoviesPreview(){

    const {data} = await api('genre/movie/list');
    const categories = data.genres;
    document.querySelector('#categories .categories-view__list-categories').innerHTML = "";
    console.log({data, categories});
    categories.forEach(element => {
        const categoriesContainer = document.querySelector('#categories .categories-view__list-categories');
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('list-box');
        const categoryText = document.createElement('p');
        categoryText.innerText = element.name;
        const categoryButton = document.createElement('button');
        categoryButton.setAttribute('type','button');
        categoryButton.addEventListener('click', () => {
            location.hash = `#category=${element.id}-${element.name}`;
        });
        categoryContainer.appendChild(categoryButton);
        categoryContainer.appendChild(categoryText);
        categoriesContainer.appendChild(categoryContainer);
    });
}

async function getMoviesByCategory(id,name){
    const { data } = await api('discover/movie/',{
        params: {
            with_genres:id
        }
    });
    const movies = data.results;
    navLeftCategorieName.innerText = name;
    createMovies(movies,moviesGridCategories);
}

async function getMoviesBySearch(name){
    const { data } = await api('search/movie/',{
        params: {
            query:name
        }
    });

    const movies = data.results;
    createMovies(movies,moviesGridCategories);
}

async function getTrendingMovies(){

    const { data } = await api('trending/movie/day');
    const movies = data.results;
    console.log({data, movies});
    navLeftCategorieName.innerText = 'Tendencias';
    createMovies(movies, moviesGridCategories);
}