const webpack = require('webpack');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const context = path.join(__dirname, 'src');

module.exports = {
  mode,
  context,

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(mode),
      },
    }),
  ],
};
