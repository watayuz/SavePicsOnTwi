'use strict';

// TLの画像を保存するやつ

var config = require('./config.js');
var Twitter = require('twitter');
var path = require('path');
var SAVEDIR = path.join(__dirname, 'pics');

var user = {
    name: String,
    screen_name: String,
    text: String
}

var client = new Twitter({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token_key: config.access_token_key,
    access_token_secret: config.access_token_secret
});

client.stream('user', function(stream) {
    stream.on('data', function(tweet) {
        var imageUrl = getImagesUrl(tweet.text);
        console.log(tweet);
        // console.log('iamges: ' + imageUrl);
        if (imageUrl != null) {
            // console.log(imageUrl[imageUrl.count -1]);
        }
        // console.log(tweet.user.name);
        // console.log('@' + tweet.user.screen_name);
        // console.log(tweet.text);
    });

    stream.on('error', function(error) {
        console.log('on error: ' + error);
    });
});

function getImagesUrl(text) {
    var regExp = new RegExp(/(?:^|[\s　]+)((?:https?|ftp):\/\/[^\s　]+)/);
    return regExp.exec(text)
    // return /http(s)?:\/\/([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?/.exec(text);
}