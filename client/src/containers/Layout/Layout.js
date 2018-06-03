// @flow
import React from 'react';
import { Header, ScrollToTop } from 'components';

type Props = {
  routes: any
};

const Layout = (props: Props) => (
  <ScrollToTop>
    <Header />
    {props.routes}
  </ScrollToTop>
);

export default Layout;
