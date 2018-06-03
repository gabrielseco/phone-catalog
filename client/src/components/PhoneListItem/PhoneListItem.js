// @flow
import React from 'react';
import { withRouter, type History } from 'react-router-dom';
import { type Phone } from './../../types/phone';
import styles from './PhoneListItem.scss';

type PhoneListItemProps = {
  phone: Phone,
  history: History
};

const PhoneListItem = (props: PhoneListItemProps) => {
  const route = `detail/${props.phone.id}`;
  const onKeyUp = evt => {
    const ENTER = 13;
    if (evt.keyCode === ENTER) {
      props.history.push(route);
    }
  };
  return (
    <div
      className={styles.container}
      onClick={() => {
        props.history.push(route);
      }}
      onKeyUp={onKeyUp}
      role="listitem"
      tabIndex={0}
      id={`phone-list-item-container-${props.phone.id}`}
    >
      <img
        className={styles.phoneImg}
        src={props.phone.image}
        alt={props.phone.name}
      />
      <h2 className={styles.title}>{props.phone.name}</h2>
      <p className={styles.price}>{props.phone.price}</p>
      <a
        href="#"
        className={styles.btnAction}
        onClick={evt => {
          evt.stopPropagation();
          evt.preventDefault();
          props.history.push(route);
        }}
      >
        See more
      </a>
    </div>
  );
};

export { PhoneListItem as PhoneListItemTesting };

export default withRouter(PhoneListItem);
