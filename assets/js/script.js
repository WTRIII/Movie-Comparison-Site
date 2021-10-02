/*function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response.status);
      //  Conditional for the the response.status.
      if (response.status !== 200) {
        // Place the response.status on the page.
        responseText.textContent = response.status;
      }
      return response.json();
    })
    .then(function (data) {
      // Make sure to look at the response in the console and read how 404 response is structured.
      console.log(data);
    });
}

getApi(badRequestUrl);
*/
/* get api url as an input for function
make function that calls api and checks status
if status returns error, display error message
if not, sort thru json to find a few data points and store in an object
return object out of function
*/

/* create url for search terms, varUrl = 'placeholder format' + search input var + 'last bit placeholder'
*/