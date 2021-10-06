// function for search button
var searchButton = document.querySelector('#search-button');
var resultContentEl = document.querySelector('#result-content');
/////
var getProduct = function (searchEl) {
   console.log(searchEl)
   searchEl = searchEl.trim()
    searchEl = searchEl.split(' ').filter(s => s).join('%20');
    fetch("https://imdb-api.com/API/Search/k_fkn4m014/" + searchEl , {
      
  })
      .then(function (response){
        //console.log(response)
        if (response.ok)  {
          //Show response in console
          console.log(response);
         
          response.json().then(function(data){
            if (data.Response !== 'False') {
              console.log(data);
              console.log(data.results);
              //console.log(getInfo(data.Search[0].imdbID));
              return getInfo(data.results[0].id);
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
            info.url = 'https://www.imdb.com/title/' + prodUrlID;
            console.log(info);
            displayMovieInfo(info);
            //return info;
            return info;
            });
          } else {
            //Report errors
            alert('Error:'  + response.statusText)
          }
        });
    }

  
  


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

// var resultBody = document.createElement('div');
// resultBody.classList.add('card-body', 'box');

//moved titleEl from here to lower in code

var bodyContentEl = document.createElement('div');
bodyContentEl.classList.add('card-body', 'box');

var titleEl = document.createElement('h3');
titleEl.textContent = info.name;

var ratingTextEl0 = document.createElement('p')
ratingTextEl0.textContent = "IMDb: "

var ratingTextEl = document.createElement('p')
ratingTextEl.textContent = "Rotten Tomatoes: "

var ratingTextEl2 = document.createElement('p')
ratingTextEl2.textContent = "Metacritic: "

var ratingEl0 = document.createElement('strong');
var ratingEl = document.createElement('strong');
var ratingEl2 = document.createElement('strong');
var plotEl = document.createElement('h5')


ratingEl.innerText = "Score from Rotten Tomatoes: "

ratingEl0.textContent = info.rating[0].Value;
ratingEl.textContent = info.rating[1].Value;
ratingEl2.textContent = info.rating[2].Value;

bodyContentEl.append(ratingTextEl0)
bodyContentEl.append(ratingEl0)

bodyContentEl.append(ratingTextEl) 
bodyContentEl.append(ratingEl) 

bodyContentEl.append(ratingTextEl2)
bodyContentEl.append(ratingEl2)




if (info.plot) {  
  plotEl.textContent = info.plot;
  bodyContentEl.append(plotEl)
  
} else {
  bodyContentEl.innerHTML +=
    '<strong>Plot:</strong> No plot for this entry.';
}


console.log(info.url);

var linkButtonEl = document.createElement('a');
linkButtonEl.textContent = 'Read more about ' + info.name;
linkButtonEl.setAttribute('href', info.url);
linkButtonEl.classList.add('button');


var poster = document.createElement('img')
poster.setAttribute('src', info.image);
bodyContentEl.append(poster);

// localStorage.setItem("name", titleEl.textContent);
// localStorage.setItem("rating", ratingEl);
// localStorage.setItem("plot", plotEl);

resultContentEl.append(titleEl, bodyContentEl, linkButtonEl);


}


