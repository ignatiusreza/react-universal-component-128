import Root from 'routes';

import render from './helpers/render';

render((renderer) => {
  renderer(Root);

  if (module.hot) {
    module.hot.accept('../routes', () => {
      const NextRoot = require('../routes').default;

      renderer(NextRoot, 'react-root');
    });
  }
});
