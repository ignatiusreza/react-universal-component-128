import pick from 'lodash/pick';

import helpers from 'server/helpers';

export default ({ clientStats }) => async (req, res) => {
  const html = 'hello server';

  res.render('index', {
    ...helpers,
    html,
  });
};
