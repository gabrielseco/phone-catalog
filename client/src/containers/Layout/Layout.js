// @flow
import React from 'react';
/* import styles from './Layout.scss';
 */
import { Header } from 'components';

type Props = {
  routes: any
};

const Layout = (props: Props) => (
  <div>
    <Header />
    {props.routes}
  </div>
);

export default Layout;
