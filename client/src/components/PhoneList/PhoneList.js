// @flow
import React from 'react';
import { PhoneListItem } from 'components';
import { type Phone } from './../../types/phone';
import styles from './PhoneList.scss';

type PhoneListProps = {
  phones: Phone[]
};

const PhoneList = (props: PhoneListProps) => {
  const phones = props.phones.map((phone, index) => {
    return <PhoneListItem phone={phone} key={index} />;
  });

  return (
    <div role="list" className={styles.container}>
      {phones}
    </div>
  );
};

export default PhoneList;
