// function for search button
var searchButton = document.querySelector('#search-button');
var resultContentEl = document.querySelector('#result-content');
/////
var getProduct = function (searchEl) {
   console.log(searchEl)
   searchEl = searchEl.trim()
    searchEl = searchEl.split(' ').join('%20');
    fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=" + searchEl + "&r=json&page=1", {
      "method": "GET",
      "headers": {
          "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
          "x-rapidapi-key": "69e5639567msh04fcedaeb274ddap1281c2jsnb13aa2fe71aa"
      }
  })
      .then(function (response){
        //console.log(response)
        if (response.ok)  {
          //Show response in console
          console.log(response);
         
          response.json().then(function(data){
            if (data.Response !== 'False') {
              console.log(data);
              console.log(data.Search);
              console.log(getInfo(data.Search[0].imdbID));
              return getInfo(data.Search[0].imdbID);
            }
            if (data.Response == 'False') {
              console.log('That movie does not exist')
            }
  
          });
        } else {
          //Report errors
          alert('Error: ' + response.statusText);
        
        }
          })
          .catch(function (error) {
          //If the normal error response fails, this will also report an error
            console.log(error); //changed alert to console log
          });
        };
  
  var getInfo = function (prodUrlID) {
    fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?r=json&i="+ prodUrlID, {
      "method": "GET",
      "headers": {
          "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
          "x-rapidapi-key": "69e5639567msh04fcedaeb274ddap1281c2jsnb13aa2fe71aa"
      }
  })
      .then(function(response){
        if (response.ok)  {
          console.log(response)
          response.json().then(function(data) {
            console.log(data);
            let info = {};
            info.name = data.Title;
            info.rating = data.Ratings;
            info.plot = data.Plot;
            info.image = data.Poster;
            console.log(info);
            displayMovieInfo(info);
            return info;
            });
          } else {
            //Report errors
            alert('Error:'  + response.statusText)
          }
        });
    }
  // .catch(function (error) {
  //   //If the normal error response fails, this will also report an error
  //   alert('Unable to connect');
  // }
  
  





/////
function conductSearch(event){
event.preventDefault();
console.log('search function called')
var searchInputValue = document.querySelector('#search-input');
console.log(searchInputValue.value)
getProduct(searchInputValue.value);
//displayMovieInfo(info);
if(!searchInputValue){
    console.error('You need a search input value.');
    return;
}
//var searchString = '/display-results.html?q=' + searchInputValue;

//location.assign(searchString);
}

searchButton.addEventListener('click', conductSearch);


function displayMovieInfo(info){
console.log(info);
//var resultCard = document.createElement('div');
//resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

var resultBody = document.createElement('div');
resultBody.classList.add('card-body', 'bg-light', 'text-dark', 'mb-3', 'p-3');
//resultCard.append(resultBody);

var titleEl = document.createElement('h1');
titleEl.textContent = info.name;

var bodyContentEl = document.createElement('p');
ratingEl = info.rating[1].Value;
plotEl = info.plot;
bodyContentEl.innerHTML =
  '<strong>Rating from Rotten Tomatoes:</strong> ' + ratingEl + '<br/>';

if (info.plot) {
  bodyContentEl.innerHTML +=
    '<strong>Plot:</strong> ' + plotEl;
} else {
  bodyContentEl.innerHTML +=
    '<strong>Plot:</strong> No plot for this entry.';
}

console.log(info.url);

var linkButtonEl = document.createElement('a');
linkButtonEl.textContent = 'Read More';
linkButtonEl.setAttribute('href', info.url);
linkButtonEl.classList.add('btn', 'btn-dark');


localStorage.setItem("name", titleEl.textContent);
localStorage.setItem("rating", ratingEl);
localStorage.setItem("plot", plotEl);

resultContentEl.append(titleEl, bodyContentEl, linkButtonEl);

resultContentEl.append(resultBody);

}


