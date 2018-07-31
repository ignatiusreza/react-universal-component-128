import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter, Route } from 'react-router-dom';

const renderer = Component => {
  const targetElement = document.getElementById('react-root');
  const root = (
    <AppContainer>
      <BrowserRouter>
        <Route path="" component={Component} />
      </BrowserRouter>
    </AppContainer>
  );

  ReactDOM.hydrate(root, targetElement);
};

export default callback => callback(renderer);
