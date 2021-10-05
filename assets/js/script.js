// function for search button
var searchButton = document.querySelector('#search-button');
var resultContentEl = document.querySelector('#result-content');
/////
var getProduct = function (searchEl) {
   console.log(searchEl)
   searchEl = searchEl.trim()
    searchEl = searchEl.split(' ').filter(s => s).join('%20');
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
              //console.log(getInfo(data.Search[0].imdbID));
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

var bodyContentEl = document.createElement('div');
var ratingEl = document.createElement('strong');
var plotEl = document.createElement('h5')
ratingEl.textContent = info.rating[1].Value;
//plotEl.textContent = info.plot;
bodyContentEl.append(ratingEl) 
bodyContentEl.append(plotEl)

// ratingEl;

if (info.plot) {
  // bodyContentEl.innerHTML +=
  //   plotEl;
  plotEl.textContent = info.plot;
  bodyContentEl.append(plotEl)
  
} else {
  bodyContentEl.innerHTML +=
    '<strong>Plot:</strong> No plot for this entry.';
}
//var searchString = '/display-results.html?q=' + searchInputValue;

console.log(info.url);

var linkButtonEl = document.createElement('a');
linkButtonEl.textContent = 'Read More';
linkButtonEl.setAttribute('href', info.url);
linkButtonEl.classList.add('btn', 'btn-dark');

var poster = document.createElement('img')
poster.setAttribute('src', info.image)
// posterEl = info.image;
// bodyContentEl.innerHTML +=
//   `<img src = ${posterEl}></img>`;
bodyContentEl.append(poster)

localStorage.setItem("name", titleEl.textContent);
localStorage.setItem("rating", ratingEl);
localStorage.setItem("plot", plotEl);

resultContentEl.append(titleEl, bodyContentEl, linkButtonEl);

//resultContentEl.append(resultBody);

}


=======
////

function displayResults(resultObj) {
  console.log(resultObj);
  //creates the card div
  var resultCard = document.createElement('div');
  resultCard.addClass('card');
    // creates the card body
      var cardContent = document.createElement('div');
      cardContent.addClass('card-content');
      resultCard.append(cardContent);
    // adds a name/title to the card
      var name = document.createElement('h3');
      name.textContent = resultObj.name;
    // creates the main body of the search result
      var bodyContent = document.createElement('p');
      bodyContent.innerHTML =
        'Rating: ' + resultObj.rating + '<br/>'; //adds the rating string
              
      if (resultObj.plot) { //logic loop to add plot description line or return no description
        bodyContent.innerHTML +=
          '<strong>Description:</strong> ' + resultObj.plot;
      } else {
        bodyContent.innerHTML +=
         '<strong>Description:</strong>  No description for this entry.';
      }
      //creates the link and button to the result
      var productLink = document.createElement('a');
      productLink.textContent = 'Read More'; //sets the text of the link
      productLink.setAttribute('href', resultObj.url); //sets what the the link references
      productLink.addClass('button'); //classes the link as a button
    
      cardContent.append(name, bodyContent, productLink);
    
      productContent.append(resultCard);
    }

