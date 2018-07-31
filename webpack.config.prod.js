const path = require('path');
const _ = require('lodash');

const AssetsPlugin = require('assets-webpack-plugin');

let config = require('./webpack.config.web');

config = _.merge({}, config, {
  output: {
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
  },
});

require('./webpack.loaders')(config);

const plugins = [
  new AssetsPlugin({ path: config.output.path }),
];
plugins.forEach(plugin => config.plugins.push(plugin));

module.exports = config;
