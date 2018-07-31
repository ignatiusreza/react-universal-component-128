import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import pick from 'lodash/pick';

import Root from 'routes';

import helpers from 'server/helpers';

export default ({ clientStats }) => async (req, res) => {
  const context = {};
  const html = renderToString(
    <StaticRouter location={req.originalUrl} context={context}>
      <Route path="" component={Root} />
    </StaticRouter>
  );
  const chunkNames = flushChunkNames();
  const chunks = pick(flushChunks(clientStats, { chunkNames }), 'js', 'styles', 'cssHash');

  res.render('index', {
    ...helpers,
    html,
    chunks,
  });
};
