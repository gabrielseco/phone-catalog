import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import './styles/main.scss';

const store = configureStore();

const app = (
  <Provider store={store}>
    <div>Hello World</div>
  </Provider>
);

render(app, document.getElementById('root'));
