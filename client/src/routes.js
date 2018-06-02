// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PhoneListContainer, PhoneDetailContainer } from './containers';

const routes = () => (
  <Switch>
    <Route exact path="/" component={PhoneListContainer} />
    <Route path="/detail/:id" component={PhoneDetailContainer} />
  </Switch>
);

export default routes;
