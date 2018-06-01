import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { PhoneListContainer } from './containers';

import './styles/main.scss';

const store = configureStore();

const app = (
  <Provider store={store}>
    <PhoneListContainer />
  </Provider>
);

render(app, document.getElementById('root'));
