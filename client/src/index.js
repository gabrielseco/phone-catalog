import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';

import configureStore from './store/configureStore';
import { App, PhoneListContainer, PhotoDetailContainer } from './containers';

import './styles/main.scss';

const store = configureStore();

const app = (
  <Provider store={store}>
    <Router>
      <App path="/">
        <PhoneListContainer default />
        <PhotoDetailContainer path="/detail/:id" />
      </App>
    </Router>
  </Provider>
);

render(app, document.getElementById('root'));
