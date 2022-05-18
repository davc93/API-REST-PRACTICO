window.addEventListener('DOMContentLoaded',navigator,false);
window.addEventListener('hashchange',navigator,false)
function navigator(){
    
    if(location.hash.startsWith('#tendencies')){
        tendenciesPage();
    } else if(location.hash.startsWith('#search=')){

        searchPage();
    } else if(location.hash.startsWith('#movie=')){

        movieDetailsPage();
    } else if(location.hash.startsWith('#category=')){

        categoryPage();
    } else {

        homePage();
    }
}

function homePage(){

    console.log("home");
    tendencies.classList.remove('inactive');
    categories.classList.remove('inactive');
    searchSection.classList.remove('inactive');
    flecha.classList.add('inactive');
    movieDetail.classList.add('inactive');
    similarMovies.classList.add('inactive');
    moviesGrid.classList.add('inactive');
    searchSectionCategoriesAction.classList.add('inactive');
    moviesGridAction.classList.add('inactive');
    searchSectionCategoriesAdventure.classList.add('inactive');
    moviesGridAdventure.classList.add('inactive');

    getTrendingMoviesPreview();
    getCategoriesMoviesPreview();
}

function movieDetailsPage(){

    console.log("Movie details");
    tendencies.classList.add('inactive');
    categories.classList.add('inactive');
    searchSection.classList.add('inactive');

    movieDetail.classList.remove('inactive');
    similarMovies.classList.remove('inactive');
    moviesGrid.classList.add('inactive');
    searchSectionCategoriesAction.classList.add('inactive');
    moviesGridAction.classList.add('inactive');
    searchSectionCategoriesAdventure.classList.add('inactive');
    moviesGridAdventure.classList.add('inactive');

    flecha.classList.remove('inactive');
    
}

function searchPage(){


    console.log("SearchPage");
    tendencies.classList.add('inactive');
    categories.classList.add('inactive');
    searchSection.classList.remove('inactive');
    movieDetail.classList.add('inactive');
    similarMovies.classList.add('inactive');
    moviesGrid.classList.remove('inactive');
    searchSectionCategoriesAction.classList.add('inactive');
    moviesGridAction.classList.add('inactive');
    searchSectionCategoriesAdventure.classList.add('inactive');
    moviesGridAdventure.classList.add('inactive');
    flecha.classList.remove('inactive');
    
}