// dependendcies 
//dotv
//twitter
//Spotify
//request 
require('dotenv').config();
let Twitter = require('twitter');

let Spotify = require('node-spotify-api');

let keys = require('./keys');

let request = require('request');

//functions 

let getMyTweets = function() {
    let client = new Twitter(keys.twitter);
    let params = { screen_name: 'melprax'};

    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log(tweets);
        }
    })
}

let getMyMusic = function() {
    let client = new Spotify(keys.spotify);
    client.request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
    .then(function(data) {
      console.log(data); 
    })
    .catch(function(err) {
      console.error('Error occurred: ' + err); 
    });
}

request.onreadystatechange

//events 
getMyTweets();
getMyMusic();