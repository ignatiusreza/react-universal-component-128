const webpack = require('webpack');
const _ = require('lodash');

let config = require('./webpack.config.web');

config = _.merge({}, config, {
  output: {
    crossOriginLoading: 'anonymous',
  },
  devtool: 'cheap-module-source-map',
});

require('./webpack.loaders')(config);

module.exports = config;
