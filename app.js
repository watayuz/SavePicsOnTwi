'use strict';

// TLの画像を保存するやつ

const config = require('./config.js');
const Twitter = require('twitter');
const path = require('path');
const SAVEDIR = path.join(__dirname, 'pics');

const client = new Twitter({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token_key: config.access_token_key,
    access_token_secret: config.access_token_secret
});

client.stream('statuses/filter', {track: ''}, (stream) => {
    stream.on('data', tweet => {
        console.log('on data user: ${tweet.text}');
    });

    stream.on('error', error => {
        console.log('on error: ${error}');
    });
});