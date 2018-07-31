import fs from 'fs';
import path from 'path';
import reject from 'lodash/reject';

const manifestPath = path.join(__dirname, '../client/webpack-assets.json');
const manifest = process.env.NODE_ENV === 'production' && JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const bundlePath = (bundle, type = 'js') => (manifest ? manifest[bundle][type] : `/assets/${bundle}.${type}`);

export default {
  bundlePath,
};
