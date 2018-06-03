// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { type Phone } from './../../types/phone';
import styles from './PhoneListItem.scss';

type PhoneListItemProps = {
  phone: Phone
};

const PhoneListItem = (props: PhoneListItemProps) => (
  <div className={styles.container}>
    <img
      className={styles.phoneImg}
      src={props.phone.image}
      alt={props.phone.name}
    />
    <h2 className={styles.title}>{props.phone.name}</h2>
    <p className={styles.price}>{props.phone.price}</p>
    <Link className={styles.btnAction} to={`detail/${props.phone.id}`}>
      See more
    </Link>
  </div>
);

export default PhoneListItem;
