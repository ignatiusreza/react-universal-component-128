require('source-map-support/register');
require('babel-polyfill');

const express = require('express');
const webpack = require('webpack');
const logger = require('webpack-log')({ name: 'server' });

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

const path = require('path');

const clientConfig = require('../../webpack.config.dev');
const serverConfig = require('../../webpack.config.server');

const app = express();
const port = 3000;
let isListening = false;

app.disable('x-powered-by');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

const compiler = webpack([clientConfig, serverConfig]);
const clientCompiler = compiler.compilers[0];
const devMiddlewareOptions = {
  publicPath: clientConfig.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*' },
  serverSideRender: true,
  writeToDisk: true,
};
app.use(webpackDevMiddleware(compiler, devMiddlewareOptions));
app.use(webpackHotMiddleware(clientCompiler));
app.use(webpackHotServerMiddleware(compiler));

app.use((err, req, res, _) => {
  logger.error(err);
  res.status(500).send('InternalServerError');
});
compiler.hooks.done.tap('ToInfinity', () =>
  !isListening && app.listen(port, () => {
    isListening = true;
    logger.info(`Listening @ http://localhost:${port}/`);
  }),
);
