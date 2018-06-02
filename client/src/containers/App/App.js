// @flow
import React from 'react';
import { Header } from 'components';
/* import styles from './App.scss'; */

type Props = {
  children: any
};

const App = (props: Props) => (
  // $FlowFixMe: React Flow typings are not updated to React 16.3 yet
  <React.StrictMode>
    <Header />
    <div className="main">{props.children}</div>
  </React.StrictMode>
);

export default App;
