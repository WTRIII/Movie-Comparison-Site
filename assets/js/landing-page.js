// function for search button
var searchButton = document.querySelector('#search-button');

function conductSearch(event){
event.preventDefault();
var searchInputValue = document.querySelector('#search-input');
searchApi(searchInputValue);
if(!searchInputValue){
    console.error('You need a search input value.');
    return;
}
var searchString = './search-results.html?q=' + searchInputValue;

location.assign(searchString);
}

searchButton.addEventListener('submit', conductSearch());