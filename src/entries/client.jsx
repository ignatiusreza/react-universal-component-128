import Root from 'routes';

import render from './helpers/render';

import '../stylesheets/index.css';

render((renderer) => {
  renderer(Root);

  if (module.hot) {
    module.hot.accept('../routes', () => {
      const NextRoot = require('../routes').default;

      renderer(NextRoot, 'react-root');
    });
  }
});
