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
var getProduct = function (searchEl, brand) {
  //Either specify brand as part of argument or iterate thru all 3 every time
var apiUrl = 'http://api-prd.axesso.de' + brand + '-search-by-keyword-asin?keyword=' + searchEl + '&asin='/*api key*/'domainCode=com&sortBy=review-rank' //sort by average user review with review-rank
fetch(apiUrl)
  .then(function (response){
    if (response.ok)  {
      //Show response in console
      console.log(response);
      //To-do: find how response data is structured to isolate info needed
      response.json().then(function(data){
        console.log(data);
        //data is a list of the back end of URLs for the different shoppin sites.  Walmart needs to have 'https://www.walmart.com/' before the tag, unsure for amazon and alibaba rn
        //I could either keep these if statements in this function, or make a separate one to parse data into URLs to feed the 2nd part of the api
       if (brand = '/wlm/walmart') { //If the brand is walmart, creates the urls needed to find product info
         urlArray = [];
        for (let i = 0; i < data.length; i++) {
          prodUrl = 'https://www.walmart.com/' + data[i];
          urlArray.push(prodUrl);
        }
        return urlArray
       };

       if (brand = '/amz/amazon') { //If the brand is amazon, creates the urls needed to find product info
        urlArray = [];
       for (let i = 0; i < data.length; i++) {
         prodUrl = 'https://www.amazon.com/dp/' + data[i];
         urlArray.push(prodUrl);
       }
       return urlArray
      };

      if (brand = '/alb/alibaba') { //If the brand is alibaba, creates the urls needed to find product info
        urlArray = [];
       for (let i = 0; i < data.length; i++) {
         prodUrl =  data[i];
         urlArray.push(prodUrl);
       }
       return urlArray
      };

      });
    } else {
      //Report errors
      alert('Error: ' + response.statusText)
      
    }
      })
      .catch(function (error) {
        //If the normal error response fails, this will also report an error
        alert('Unable to connect');
      });
    };

// Turn array of URLs into data needed to compare products.  Could do this inside the for loops for each url instead of outputting array but would have to store a lot of data
/*var getProductInfo = function (prodUrl) {
  
}*/
}*/
