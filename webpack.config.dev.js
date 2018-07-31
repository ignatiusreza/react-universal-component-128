const webpack = require('webpack');
const CSSExtractPlugin = require('extract-css-chunks-webpack-plugin');
const _ = require('lodash');

let config = require('./webpack.config.web');

config = _.merge({}, config, {
  output: {
    crossOriginLoading: 'anonymous',
  },
  devtool: 'cheap-module-source-map',
});

require('./webpack.loaders')(config);

const plugins = [
  new CSSExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name].css',
  }),
];
plugins.forEach(plugin => config.plugins.push(plugin));

module.exports = config;
