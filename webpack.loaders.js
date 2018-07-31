const jsxLoader = ({ context }) => {
  return {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      presets: [['env', { modules: false }], 'react'],
      plugins: [
        'transform-object-rest-spread',
      ],
    },
  };
};

module.exports = (config, extractCSS) => {
  if (!config.module) config.module = { rules: [] };
  config.module.rules.push(jsxLoader(config));
};
