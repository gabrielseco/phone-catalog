import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import configureStore from './store/configureStore';
import { Layout } from './containers';
import routes from './routes';
import './styles/main.scss';

const store = configureStore();

const app = (
  <Provider store={store}>
    <Router>
      <Layout routes={routes()} />
    </Router>
  </Provider>
);

render(app, document.getElementById('root'));
