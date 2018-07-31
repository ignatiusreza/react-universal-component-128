require('babel-polyfill');

const express = require('express');
const logger = require('webpack-log')({ name: 'server' });

const path = require('path');

const staticPath = path.join(__dirname, '../../build/client');
const clientStats = require('../../build/client/webpack.stats.json');
const serverRenderer = require('../../build/server/main').default;

const app = express();
const port = 3000;

app.disable('x-powered-by');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use('/assets', express.static(staticPath));

app.use(serverRenderer({ clientStats }));

app.use((err, req, res, _) => {
  logger.error(err);
  res.status(500).send('InternalServerError');
});

app.listen(port, () => {
  logger.info(`Listening @ http://localhost:${port}/`);
});
