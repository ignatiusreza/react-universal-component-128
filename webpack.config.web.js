const path = require('path');
const _ = require('lodash');

const config = require('./webpack.config.base');

const polyfill = [
  'babel-polyfill', 'core-js', 'regenerator-runtime',
  'raf/polyfill',
];
const polyfillRegExp = new RegExp(`/node_modules/(${polyfill.join('|')})`);

module.exports = _.merge({}, config, {
  name: 'client',

  entry: [...polyfill, path.join(__dirname, 'src', 'entries', 'client.jsx')],

  output: {
    path: path.join(__dirname, 'build', 'client'),
    publicPath: '/assets/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },

  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      cacheGroups: {
        polyfill: {
          chunks: 'all',
          name: 'polyfill',
          test: polyfillRegExp,
          enforce: true,
        },
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: /\/node_modules\//,
          enforce: true,
          priority: -5,
        },
      },
    },
  },
});
