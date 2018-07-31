import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';

import Root from 'routes';

import helpers from 'server/helpers';

export default ({ clientStats }) => async (req, res) => {
  const context = {};
  const html = renderToString(
    <StaticRouter location={req.originalUrl} context={context}>
      <Route path="" component={Root} />
    </StaticRouter>
  );

  res.render('index', {
    ...helpers,
    html,
  });
};
