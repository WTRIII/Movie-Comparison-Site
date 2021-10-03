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
