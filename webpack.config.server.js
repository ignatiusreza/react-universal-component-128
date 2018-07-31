const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

let config = require('./webpack.config.node');

const nodeModules = path.join(__dirname, 'node_modules');

// tell Webpack to still bundle `react-universal-component`, `webpack-flush-chunks` and
// `require-universal-module` so that they know they are running within Webpack and
// can properly found client modules:
const externals =
  fs
    .readdirSync(nodeModules)
    .filter(x => !/\.bin|react-universal-component|webpack-flush-chunks/.test(x));

config = _.merge({}, config, {
  name: 'server',
  entry: path.join(__dirname, 'src', 'entries', 'server.jsx'),
  output: {
    path: path.join(__dirname, 'build', 'server'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  externals,
});

require('./webpack.loaders')(config);

const plugins = [
  new webpack.optimize.LimitChunkCountPlugin({
    maxChunks: 1,
  }),
];
plugins.forEach(plugin => config.plugins.push(plugin));

module.exports = config;
