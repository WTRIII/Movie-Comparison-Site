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