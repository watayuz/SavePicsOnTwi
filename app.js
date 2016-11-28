'use strict';

// TLの画像を保存するやつ

const config = require('config.js');
const twitter = require('twitter');
const path = require('path');
const SAVEDIR = path.join(__dirname, 'pics');

twitter.stream('statuses/filter', {}, stream => {

});