// dependendcies 
//dotv
//twitter
//Spotify
//request 
require('dotenv').config();
let Twitter = require('twitter');

let keys = require('./keys');

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


//events 
getMyTweets();
