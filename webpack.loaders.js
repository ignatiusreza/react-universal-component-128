const CSSExtractPlugin = require('extract-css-chunks-webpack-plugin');
const cssClassName = '[hash:base64]';

const cssLoader = ({ target, devTool, output = {} }) => {
  const { path: outputPath, publicPath } = output;
  const loader = {
    test: /\.css$/,
    use: [{ loader: 'postcss-loader' }],
  };

  const options = { modules: true, localIdentName: cssClassName };
  if (process.env.NODE_ENV !== 'production' && devTool) {
    options.sourceMap = true;
  }

  if (target === 'node') {
    loader.use = [{ loader: 'css-loader/locals', options }, ...loader.use];
  } else {
    loader.use = [{ loader: CSSExtractPlugin.loader }, { loader: 'css-loader', options }, ...loader.use];
  }

  return loader;
};

const jsxLoader = ({ context }) => {
  return {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      presets: [['env', { modules: false }], 'react'],
      plugins: [
        ['react-css-modules', { context, generateScopedName: cssClassName }],
        'react-hot-loader/babel',
        'transform-object-rest-spread',
      ],
    },
  };
};

module.exports = (config, extractCSS) => {
  config.module.rules.push(cssLoader(config));
  config.module.rules.push(jsxLoader(config));
};
