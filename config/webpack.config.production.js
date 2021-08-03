const config = require('./webpack.config.js');

config.mode = 'production';
config.devtool = 'inline-source-map';
module.exports = config;
