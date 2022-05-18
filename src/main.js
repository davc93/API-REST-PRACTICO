const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
        'Content-Type':'application/json;charset=utf-8'
    },
    params:{
        'api_key':API_KEY
    }

}); 



async function getTrendingMoviesPreview(){

    const { data } = await api('trending/movie/day');
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
async function getCategoriesMoviesPreview(){

    const {data} = await api('genre/movie/list');
    const categories = data.genres;
    console.log({data, categories});
    categories.forEach(element => {
        const categoriesContainer = document.querySelector('#categories .categories-view__list-categories');

        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('list-box');
        const categoryText = document.createElement('p');
        categoryText.innerText = element.name;
        const categoryButton = document.createElement('button');
        categoryButton.setAttribute('type','button');
        categoryContainer.appendChild(categoryButton);
        categoryContainer.appendChild(categoryText);
        categoriesContainer.appendChild(categoryContainer);
    });
}
