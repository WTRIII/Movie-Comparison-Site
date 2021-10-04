/*var formSubmitHandler = function (event) {
    event.preventDefault();
//   changed to match input element
    var username = InputEl.value;
    console.log(username)
  
    if (username) {
      getUserRepos(username);
//   changed to results
      resultsContainerEl.textContent = '';
      InputEl.value = '';
    } else {
      alert('Please enter a GitHub username');
    }
  };
  
  var buttonClickHandler = function (event) {
    // `event.target` is a reference to the DOM element of what programming language button was clicked on the page
    var language = event.target.getAttribute('data-language');
  
    // If there is no language read from the button, don't attempt to fetch repos
    if (language) {
      getFeaturedRepos(language);
//   change to match variable
      resultsContainerEl.textContent = '';
    }
  };
  
  var getUserRepos = function (user) {
    var apiUrl = 'https://www.loc.gov/search/?q=' + user + '&fo=json';
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function (data) {
            console.log(data.results[0].date);
            displayRepos(data, user);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to GitHub');
      });
  };
  */
/* get api url as an input for function
make function that calls api and checks status
if status returns error, display error message
if not, sort thru json to find a few data points and store in an object
return object out of function
*/

/* create url for search terms, varUrl = 'placeholder format' + search input var + 'last bit placeholder'
*/
// Var brand will change the url for whichever site we want to search for keyword.  Amazon is '/amz/amazon', Alibaba is '/alb/alibaba', walmart is '/wlm/walmart'
// var search = function (searchEl) {
//   var apiUrls = []
//   apiUrls.push('https://movie-database-imdb-alternative.p.rapidapi.com/?s=' + searchEl + '&r=json&page=1', {
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
//       "x-rapidapi-key": "69e5639567msh04fcedaeb274ddap1281c2jsnb13aa2fe71aa"
//     }
//   })
//   apiUrls.push('http://www.omdbapi.com/?t=' + searchEl + '&apikey=a8a7dac0')
//   apiUrls.push()
// }
var getProduct = function (searchEl) {
  //searchEl = 'Avengers Endgame';
  searchEl = searchEl.split(' ').join('%20');
  // var apiUrl = 'https://movie-database-imdb-alternative.p.rapidapi.com/?s=' + Titanic + '&r=json&page=1', {
  //   "method": "GET",
  //   "headers": {
  //     "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
  //     "x-rapidapi-key": "69e5639567msh04fcedaeb274ddap1281c2jsnb13aa2fe71aa"
  //   }
  // } 
  // fetch(apiUrl)
  fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=" + searchEl + "&r=json&page=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
		"x-rapidapi-key": "69e5639567msh04fcedaeb274ddap1281c2jsnb13aa2fe71aa"
	}
})
    .then(function (response){
      if (response.ok)  {
        //Show response in console
        console.log(response);
        //To-do: find how response data is structured to isolate info needed
        response.json().then(function(data){
          console.log(data);
          console.log(data.Search);
          console.log(getInfo(data.Search[0].imdbID));
         

        });
      } else {
        //Report errors
        alert('Error: ' + response.statusText);
      
      }
        })
        .catch(function (error) {
        //If the normal error response fails, this will also report an error
          alert('Unable to connect');
        });
      };

// Turn array of URLs into data needed to compare products.  Could do this inside the for loops for each url instead of outputting array but would have to store a lot of data
var getInfo = function (prodUrlID) {

  // var apiUrl = 'https://movie-database-imdb-alternative.p.rapidapi.com/?r=json&i=' + ID, {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
  //       "x-rapidapi-key": "69e5639567msh04fcedaeb274ddap1281c2jsnb13aa2fe71aa" 
  //     }
  //   };
  // fetch(apiUrl)
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
          return info;
          });
        } else {
          //Report errors
          alert('Error:'  + response.statusText)
        }
      });
  }
getProduct()
// .catch(function (error) {
//   //If the normal error response fails, this will also report an error
//   alert('Unable to connect');
// }

//Variables
var resultText = document.querySelector('#result-text');
var productContent = document.querySelector('#result-content');
var searchForm = document.querySelector('#search-form');

// getApi functions - parameters, get and fetch
    //parameter function
    // get and fetch function

// function to capture search results of user
    // function for user input / search
    // function to store / get user input

//funtion to add HTML elements. use this function to display search results on the page
// **need to create an image to display product in search results**
// this code was derived from Library of Congress mini-project solution
function displayResults(resultObj) {
    console.log(resultObj);
    //creates the card div
    var resultCard = document.createElement('div');
    resultCard.addClass('card');
      // creates the card body
        var cardContent = document.createElement('div');
        cardContent.addClass('card-content');
        resultCard.append(cardContent);
      // adds a title to the card
        var title = document.createElement('h3');
        title.textContent = resultObj.title;
      // creates the main body of the search result
        var bodyContent = document.createElement('p');
        bodyContent.innerHTML =
          'Date: ' + resultObj.date + '<br/>'; //adds the Date string
      
        if (resultObj.subject) { //logic loop to add subject and builds in else in the event of no subject
          bodyContent.innerHTML +=
            'Subjects: ' + resultObj.subject.join(', ') + '<br/>';
        } else {
          bodyContent.innerHTML +=
            'Subjects: No subject for this entry.';
        }
      
        if (resultObj.description) { //logic loop to add description line or return no description
          bodyContent.innerHTML +=
            '<strong>Description:</strong> ' + resultObj.description[0];
        } else {
          bodyContent.innerHTML +=
           '<strong>Description:</strong>  No description for this entry.';
        }
        //creates the link and button to the result
        var productLink = document.createElement('a');
        productLink.textContent = 'Read More'; //sets the text of the link
        productLink.setAttribute('href', resultObj.url); //sets what the the link references
        productLink.addClass('button'); //classes the link as a button
      
        cardContent.append(title, bodyContent, productLink);
      
        productContent.append(resultCard);
      }

// function for search button
var searchButton = document.querySelector('#search-button');

function conductSearch(event){
event.preventDefault();
var searchInputValue = document.querySelector('#search-input');
searchApi(searchInputValue);
}

searchButton.addEventListener('submit', conductSearch());
// function to save user inputs into local storage - passive function?
    // preventDefault on user submit

// function to append 'go back' button on search
    // go back button functionality

// function appends results to side of page

// logic loops to sort or filter results
    // compare API values to sort or highlight function
