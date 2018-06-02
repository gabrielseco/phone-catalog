import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import configureStore from './store/configureStore';
import { PhoneListContainer, PhotoDetailContainer } from './containers';
import { Header } from './components';

import './styles/main.scss';

const store = configureStore();

const app = (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={PhoneListContainer} />
          <Route path="/detail/:id" component={PhotoDetailContainer} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

render(app, document.getElementById('root'));
