const path = require('path');
const cssimport = require('postcss-import');
const preset = require('postcss-preset-env');

const root = path.join(__dirname, 'src');

module.exports = webpack => ({
  plugins: [
    cssimport({ path: [root] }),
    preset({ stage: 0 }),
  ],
});
