<<<<<<< HEAD
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
=======
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
        if (brand == '/wlm/walmart') { //If the brand is walmart, creates the urls needed to find product info
           urlArray = [];
         for (let i = 0; i < data.length; i++) {
            prodUrl = 'https://www.walmart.com/' + data[i];
            urlArray.push(prodUrl);
          }
          return urlArray
         };

        if (brand == '/amz/amazon') { //If the brand is amazon, creates the urls needed to find product info
          urlArray = [];
        for (let i = 0; i < data.length; i++) {
           prodUrl = 'https://www.amazon.com/dp/' + data[i];
          urlArray.push(prodUrl);
        }
        return urlArray
        };

        if (brand == '/alb/alibaba') { //If the brand is alibaba, creates the urls needed to find product info
          urlArray = [brand];
        for (let i = 0; i < data.length; i++) {
           prodUrl =  data[i];
          urlArray.push(prodUrl);
         }
       
        return urlArray
        };

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
var getProductInfo = function (prodUrl) {
  if (prodUrl[0] == '/alb/alibaba') {
    for (let i = 1; i < data.length; i++) {
      var apiUrl = 'http://api-prd2.axesso.de/alb/alibaba-lookup-product?url=' + prodUrl[i];
      fetch(apiUrl);
      .then(function(response){
        if (response.ok)  {
          console.log(response)
          response.json().then(function(data) {
            console.log(data);
            let prodInfo = {};
            prodInfo.name = data.productTitle;
            prodInfo.rating = data.reviews.rating + ' stars';
            prodInfo.price = data.samplePrice;
            prodInfo.image = data.imageUrlList;
            prodInfo.url = prodUrl[i];
            console.log(prodInfo);
            return prodInfo;
          });
        } else {
          //Report errors
          alert('Error: ' + response.statusText);
        }
      });   
  } 

}
if (prodUrl[0] == '/amz/amazon') {
  for (let i = 1; i < data.length; i++) {
    var apiUrl = 'http://api-prd2.axesso.de/amz/amazon-lookup-product?url=https://www.amazon.com/dp/' + prodUrl[i];
    fetch(apiUrl);
    .then(function(response){
      if (response.ok)  {
        console.log(response)
        response.json().then(function(data) {
          console.log(data);
          let prodInfo = {};
          prodInfo.name = data.productTitle;
          prodInfo.rating = data.productRating;
          prodInfo.price = data.price;
          prodInfo.image = data.imageUrlList;
          prodInfo.url = 'https://www.amazon.com/dp/' + prodUrl[i];
          console.log(prodInfo);
          return prodInfo;
        });
      } else {
        //Report errors
        alert('Error: ' + response.statusText);
      }
    });   
} 
}
if (prodUrl[0] == '/wlm/walmart') {
  for (let i = 1; i < data.length; i++) {
    var apiUrl = 'http://api-prd2.axesso.de/wlm/walmart-lookup-product?url=https://www.walmart.com/ip/' + prodUrl[i];
    fetch(apiUrl)
    .then(function(response){
      if (response.ok)  {
        console.log(response)
        response.json().then(function(data) {
          console.log(data);
          let prodInfo = {};
          prodInfo.name = data.productTitle;
          prodInfo.rating = data.productRating;
          prodInfo.price = data.price;
          prodInfo.image = data.imageUrlList;
          prodInfo.url = 'https://www.walmart.com/ip/' + prodUrl[i];
          console.log(prodInfo);
          return prodInfo;
        });
      } else {
        //Report errors
        alert('Error: ' + response.statusText);
      }
    });   
} 
}
}
/*.catch(function (error) {
  //If the normal error response fails, this will also report an error
  alert('Unable to connect');
}*/

>>>>>>> main
