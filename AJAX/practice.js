// Get the button element from the HTML document and add a click event listener to it which calls the function to make the AJAX request
const getMoviesBtn = document
  .querySelector("#get-movies-btn")
  .addEventListener("click", makeRequest);

// Get the unordered list from the HTML document
const moviesList = document.querySelector("#movies-list");

// This function gets called when the button is clicked. It makes the AJAX request for the XML document
function makeRequest() {
  const xmlhttp = new XMLHttpRequest(); // Creating an XMLHttpRequest object to make an AJAX request with it
  // Telling the XMLHttpRequest object which function will handle the response
  xmlhttp.onreadystatechange = function () {
    getMovies(this);
  };
  xmlhttp.open("GET", "http://localhost:5500/ajax-practice-data.xml", true); // Initializing the newly created request
  xmlhttp.send(); // Sending the request to my "localhost" server. The server is the "Live Server" Visual Studio Code extension listening on port 5500
}

// This function handles the response received by the XMLHttpRequest object and populates the unordered list of the HTML document
function getMovies(xml) {
  // Check if the response is ok and the HTTP status code is 200
  if (xml.readyState === xml.DONE && xml.status === 200) {
    const xmlContent = xml.responseXML; // If all is good, save the XML response to the xmlContent variable
    populateMoviesList(xmlContent); // Call the populateMoviesList() function and pass the XML response data to it
  }
}

// This function will run if we receive a successful AJAX response with the XML data. It will populate the HTML list with the data
function populateMoviesList(xmlData) {
  // Get all the "movies" tags from the XML document
  const movieTags = xmlData.getElementsByTagName("movie");
  // Loop through the HTMLCollection and populate the movies list HTML element
  for (let i = 0; i < movieTags.length; i++) {
    const title = movieTags[i].childNodes[1].innerHTML;
    const distributor = movieTags[i].childNodes[3].innerHTML;
    const year = movieTags[i].childNodes[5].innerHTML;
    const runtime = movieTags[i].childNodes[7].innerHTML;
    moviesList.innerHTML += `
    <li>${title}</li>
    <ul>
        <li>Distributor: ${distributor}</li>
        <li>Year: ${year}</li>
        <li>Runtime: ${runtime}</li>
    </ul>
    <hr />
    `;
  }
}
