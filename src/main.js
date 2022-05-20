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
        movieContainer.addEventListener('click',()=> {
            location.hash = `movie=${movie.id}`;
        })
    });
}

function createCategories(categories,container){

    container.innerHTML = "";
    categories.forEach(categorie => {
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('list-box');
        const categoryText = document.createElement('p');
        categoryText.innerText = categorie.name;
        const categoryButton = document.createElement('button');
        categoryButton.setAttribute('type','button');
        categoryButton.addEventListener('click', () => {
            location.hash = `#category=${categorie.id}-${categorie.name}`;
        });
        categoryContainer.appendChild(categoryButton);
        categoryContainer.appendChild(categoryText);
        container.appendChild(categoryContainer);
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
    createCategories(categories,categoriesGrid);
    
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
    navLeftCategorieName.innerText = 'Tendencias';
    createMovies(movies, moviesGridCategories);
}

async function getMovieById(id){
    const { data: movie } = await api('/movie/'+id);
    console.log(movie);
    movieDetailImg.setAttribute('src',`https://image.tmdb.org/t/p/w300/${movie.poster_path}`);
    movieDetailTitle.innerText = movie.title;
    movieDetailOver.innerText = movie.overview;
    movieDetailRate.innerHTML = `<i class="bi-star-fill" style="color: #FF7A48; font-size: 20px; margin-right: 5px;" ></i>` + movie.vote_average;
    createCategories(movie.genres, movieDetailCategories);
    getRelatedMovies(id);


}

async function getRelatedMovies(id){

    const { data  } = await api(`/movie/${id}/recommendations`);
    const relatedMovies = data.results;
    createMovies(relatedMovies,similarMoviesImg);
}