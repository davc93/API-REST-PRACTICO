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

    getTrendingMoviesPreview();

    getCategoriesMoviesPreview();

}