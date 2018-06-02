// @flow
import React from 'react';
import { PhoneListItem } from 'components';
import { type Phone } from './../../types/phone';
/* import styles from './ProductsList.scss';
 */
type PhonesListProps = {
  phones: Phone[]
};

const PhonesList = (props: PhonesListProps): PhoneListItem[] => {
  return props.phones.map((phone, index) => {
    return <PhoneListItem phone={phone} key={index} />;
  });
};

export default PhonesList;
