const path = require('path');
const CSSExtractPlugin = require('extract-css-chunks-webpack-plugin');
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
  new CSSExtractPlugin({
    filename: '[name]-[contenthash].css',
    chunkFilename: '[name]-[contenthash].css',
  }),
];
plugins.forEach(plugin => config.plugins.push(plugin));

module.exports = config;
