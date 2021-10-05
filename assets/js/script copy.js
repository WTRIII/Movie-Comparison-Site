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
  searchEl = '341234123';
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
      console.log(response)
      if (response.ok)  {
        //Show response in console
        console.log(response);
        //To-do: find how response data is structured to isolate info needed
        response.json().then(function(data){
          if (data.Response !== 'False') {
            console.log(data);
            console.log(data.Search);
            console.log(getInfo(data.Search[0].imdbID));}
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

