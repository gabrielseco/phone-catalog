// @flow
import React from 'react';
import { PhoneListItem } from 'components';
import { type Phone } from './../../types/phone';
import styles from './PhonesList.scss';

type PhonesListProps = {
  phones: Phone[]
};

const PhonesList = (props: PhonesListProps) => {
  const phones = props.phones.map((phone, index) => {
    return <PhoneListItem phone={phone} key={index} />;
  });

  return <div className={styles.container}>{phones}</div>;
};

export default PhonesList;
