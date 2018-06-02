// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PhoneListContainer, PhotoDetailContainer } from './containers';

const routes = () => (
  <Switch>
    <Route exact path="/" component={PhoneListContainer} />
    <Route path="/detail/:id" component={PhotoDetailContainer} />
  </Switch>
);

export default routes;
