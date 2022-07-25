window.addEventListener('DOMContentLoad', navigator, false);
window.addEventListener('hashchange', navigator, false);


function navigator (){
    console.log({ location });

    if (location.hash.startsWith('#trends')){
        trendsPage();
    }else if (location.hash.startsWith('#search=')){
        searchPage();
    }else if (location.hash.startsWith('#movie=')){
       movieDetailsPage();
    }else if (location.hash.startsWith('#category=')){
       categoriespage();
    }else{
        homePage();
    }
}

function homePage(){
    console.log('HOME!!')
    getTrendingMoviesPreview();
    getCategoriesMovies();
}

function categoriesPage(){
    console.log('categories!!')
}

function movieDetailsPage(){
    console.log('movie!!')
}

function searchPage(){
    console.log('search!!')
}

function trendsPage(){
    console.log('trends!!')
}

