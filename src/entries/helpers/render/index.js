import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

const renderer = Component => {
  const targetElement = document.getElementById('react-root');
  const root = (
    <BrowserRouter>
      <Route path="" component={Component} />
    </BrowserRouter>
  );

  ReactDOM.render(root, targetElement);
};

export default callback => callback(renderer);
