import React from 'react';
import { Spinner } from 'components';
import styles from './SpinnerContainer.scss';

const SpinnerContainer = () => (
  <div className={styles.spinnerContainer}>
    <Spinner />
  </div>
);

export default SpinnerContainer;
