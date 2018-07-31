const webpack = require('webpack');
const _ = require('lodash');

let config = require('./webpack.config.base');

module.exports = _.merge({}, config, {
  target: 'node',
  devtool: 'cheap-module-source-map', // not the fastest, but it point to the right file & line number
});
