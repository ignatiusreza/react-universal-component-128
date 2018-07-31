import fs from 'fs';
import path from 'path';
import reject from 'lodash/reject';

const bundlePath = (bundle, type = 'js') => `/assets/${bundle}.${type}`;

export default {
  bundlePath,
};
