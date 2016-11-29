'use strict';

// TLの画像を保存するやつ

var config = require('./config.js');
var Twitter = require('twitter');
var path = require('path');
var SAVEDIR = path.join(__dirname, 'pics');

var client = new Twitter({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token_key: config.access_token_key,
    access_token_secret: config.access_token_secret
});

client.stream('user', function(stream) {
    stream.on('data', function(tweet) {
        // console.log('on data tweet: ' + tweet.text);
        console.log(tweet.user.name);
        console.log('@' + tweet.user.screen_name);
        console.log(tweet.text);
    });

    stream.on('error', function(error) {
        console.log('on error: ' + error);
    });
});