searchBtn.addEventListener('click',() => {
    location.hash = `#search=${searchInput.value}`;
})
trendsBtn.addEventListener('click',() => {
    location.hash = `#trends`;
})
window.addEventListener('DOMContentLoaded',navigator,false);
window.addEventListener('hashchange',navigator,false)
flecha.addEventListener('click',()=> {
    history.back();
})
function navigator(){
    if(location.hash.startsWith('#trends')){
        trendsPage();
    } else if(location.hash.startsWith('#search=')){

        searchPage();
    } else if(location.hash.startsWith('#movie=')){

        movieDetailsPage();
    } else if(location.hash.startsWith('#category=')){

        categoryPage();
    } else {

        homePage();
    }
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}


function homePage(){

    navLeftCategorieName.innerText = '';
    console.log("home");
    header.setAttribute('style','');
    tendencies.classList.remove('inactive');
    categories.classList.remove('inactive');
    searchSection.classList.remove('inactive');
    movieDetail.classList.add('inactive');
    similarMovies.classList.add('inactive');
    moviesGridCategories.classList.add('inactive');

    flecha.classList.add('inactive');
    flecha.classList.add('inactive');
    getTrendingMoviesPreview();
    getCategoriesMoviesPreview();
}

function movieDetailsPage(){

    console.log("Movie details");

    header.setAttribute('style','height:0;');
    tendencies.classList.add('inactive');
    categories.classList.add('inactive');
    searchSection.classList.add('inactive');

    movieDetail.classList.remove('inactive');
    similarMovies.classList.remove('inactive');

    moviesGridCategories.classList.add('inactive');
    flecha.classList.remove('inactive');
    [_, movieId] = location.hash.split('=');
    getMovieById(movieId);
    
}

function searchPage(){


    console.log("SearchPage");

    header.setAttribute('style','');
    tendencies.classList.add('inactive');
    categories.classList.add('inactive');
    searchSection.classList.remove('inactive');
    movieDetail.classList.add('inactive');
    similarMovies.classList.add('inactive');
    moviesGridCategories.classList.remove('inactive');
    flecha.classList.remove('inactive');


    // [#search, 'platzi']
    const [_, searchQuery] = location.hash.split('=');
    getMoviesBySearch(searchQuery);
    
}

function categoryPage(){


    console.log("categoryPage");

    header.setAttribute('style','');
    tendencies.classList.add('inactive');
    categories.classList.add('inactive');
    searchSection.classList.add('inactive');
    movieDetail.classList.add('inactive');
    similarMovies.classList.add('inactive');
    moviesGridCategories.classList.remove('inactive');
    flecha.classList.remove('inactive');
    
    const [_, categoryData] = location.hash.split('=');
    const [categoryId, categoryName] = categoryData.split('-');
    getMoviesByCategory(categoryId, categoryName);
    
}

function trendsPage(){


    console.log("categoryPage");

    header.setAttribute('style','');
    tendencies.classList.add('inactive');
    categories.classList.add('inactive');
    searchSection.classList.add('inactive');
    movieDetail.classList.add('inactive');
    similarMovies.classList.add('inactive');
    moviesGridCategories.classList.remove('inactive');
    flecha.classList.remove('inactive');
    
    getTrendingMovies();
    
}