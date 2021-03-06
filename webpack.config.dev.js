const webpack = require('webpack');
const CSSExtractPlugin = require('extract-css-chunks-webpack-plugin');
const _ = require('lodash');

let config = require('./webpack.config.web');

const hmrClient = 'webpack-hot-middleware/client';

config = _.merge({}, config, {
  output: {
    crossOriginLoading: 'anonymous',
  },
  devtool: 'cheap-module-source-map',
});
config.entry = [hmrClient, ...config.entry];

require('./webpack.loaders')(config);

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new CSSExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name].css',
    hot: true,
  }),
];
plugins.forEach(plugin => config.plugins.push(plugin));

module.exports = config;
