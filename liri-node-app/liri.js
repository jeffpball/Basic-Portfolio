require("dotenv").config();
var fs = require("fs");

var moment = require('moment');
var axios = require("axios");


// var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var input = process.argv[3];

switch (command) {
  case "concert-this":
    concert();
    break;
  
  case "spotify-this-song":
    spotify();
    break;
  
  case "movie-this":
    movie();
    break;
  
  case "do-what-it-says":
    other();
    break;
  }

function concert() {
  axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp").then(
    function(response) {
      concertResponse = 
        (
          response.data[0].venue.name + "\n" + response.data[0].venue.city + " " + response.data[0].venue.region + "\n" + moment(response.data[0].datetime.substring(0,10), 'YYYY MM DD').format('MM/DD/YY')
          + "\n" + "-------------------------------------" + "\n" +
          response.data[1].venue.name + "\n" + response.data[1].venue.city + " " + response.data[1].venue.region + "\n" + moment(response.data[0].datetime.substring(0,10), 'YYYY MM DD').format('MM/DD/YY')
          + "\n" + "-------------------------------------" + "\n" +
          response.data[2].venue.name + "\n" + response.data[2].venue.city + " " + response.data[2].venue.region + "\n" + moment(response.data[0].datetime.substring(0,10), 'YYYY MM DD').format('MM/DD/YY')
          + "\n" + "-------------------------------------" + "\n" +
          response.data[3].venue.name + "\n" + response.data[3].venue.city + " " + response.data[3].venue.region + "\n" + moment(response.data[0].datetime.substring(0,10), 'YYYY MM DD').format('MM/DD/YY')
          + "\n" + "-------------------------------------" 
          );

      console.log("THIS WORKED: " + "\n" + concertResponse);

      fs.appendFile("log.txt", concertResponse, function(err) {

        // If the code experiences any errors it will log the error to the console.
        if (err) {
          return console.log(err);
        }
     
        // Otherwise, it will print: "movies.txt was updated!"
        console.log("");
      });

    })
    .catch(function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

function movie() {
  axios.get("http://www.omdbapi.com/?t=" + input + "&apikey=trilogy").then(
    function(response) {
      let OMDBresult = "-----------------------------------" +
      "\nTitle: " + JSON.stringify(response.data.Title) +
      "\nYear: " + JSON.stringify(response.data.Year) +
      "\nIMDB Rating: " + JSON.stringify(response.data.imdbRating) +
      "\nRotton Tomatoes Rating: " + JSON.stringify(response.data.Ratings[2].Value) +
      "\nLocation: " + JSON.stringify(response.data.Country) +
      "\nLanguage: " + JSON.stringify(response.data.Language) +
      "\nPlot: " + JSON.stringify(response.data.Plot) +
      "\nActors: " + JSON.stringify(response.data.Actors) +
      "\n---------------------------------------------------"
      // console logging
      console.log(OMDBresult)

      // Write the response to the log.txt file
      fs.appendFile("log.txt", OMDBresult, function(err) {

        // If the code experiences any errors it will log the error to the console.
        if (err) {
          return console.log(err);
        }
        // Otherwise, it will print: "movies.txt was updated!"
        console.log("updated");
      });
    })
    .catch(function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

function spotify() {
  var Spotify = require('node-spotify-api');

  var spotify = new Spotify({
  id: '69a8fe5f2f1748d38fc5b1bd0cfcb487',
  secret: '5cf553215d084f53b79cc2c3ec51b11d'
  });

  spotify.search({ type: 'track', query: input, limit:1}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  var spotifyResponse = 
  (
    "\n" + "-----------------------------------" +
    "\n" + "Artists: " + JSON.stringify(data.tracks.items[0].artists[0].name) +
    "\n" + "Song Name: " + JSON.stringify(data.tracks.items[0].name) +
    "\n" + "Album: " + JSON.stringify(data.tracks.items[0].album.name) +
    "\n" + "Preview Link from Spotify: " + JSON.stringify(data.tracks.items[0].artists[0].external_urls.spotify) +
    "\n" + "-----------------------------------" 
    );
  console.log(spotifyResponse);
      // console.log("--------------------");
      // console.log(JSON.stringify(data));
      // console.log("--------------------");
      // console.log("Artists: " + JSON.stringify(data.tracks.items[0].artists[0].name));
      // console.log("Song Name: " + JSON.stringify(data.tracks.items[0].name));
      // console.log("Album: " + JSON.stringify(data.tracks.items[0].album.name));
      // console.log("Preview Link from Spotify: " + JSON.stringify(data.tracks.items[0].artists[0].external_urls.spotify));
      fs.appendFile("log.txt", spotifyResponse, function(err) {

        // If the code experiences any errors it will log the error to the console.
        if (err) {
          return console.log(err);
        }
     
        // Otherwise, it will print: "movies.txt was updated!"
        console.log("");
      });
  });
  
}

function other() {
  // Using FS with an external text file to control LIRI
  // Core node package for reading and writing files
  
  // This block of code will read what is in

  fs.readFile("random.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");

  console.log(dataArr[0]);
  console.log(dataArr[1])
  // We will then re-display the content as an array for later use.
  command = dataArr[0];
  input = dataArr[1];

  switch (command) {
    case "concert-this":
      concert();
      break;
    
    case "spotify-this-song":
      spotify();
      break;
    
    case "movie-this":
      movie();
      break;
    
    case "do-what-it-says":
      other();
      break;
    }
  });
}

