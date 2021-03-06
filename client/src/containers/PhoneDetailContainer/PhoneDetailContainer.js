// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getPhonesList } from 'actions/phones';
import { SpinnerContainer } from 'containers';
import { type Dispatch } from 'redux';
import { type RootState } from './../../reducers';
import { type Phone } from './../../types/phone';
import styles from './PhoneDetailContainer.scss';

type Props = {
  phone: Phone,
  dispatch: Dispatch
};

class PhoneDetailContainer extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    if (this.props.phone === undefined) {
      dispatch(getPhonesList());
    }
  }

  render() {
    if (this.props.phone === undefined) {
      return <SpinnerContainer />;
    }
    return (
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={this.props.phone.image} alt={this.props.phone.name} />
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{this.props.phone.name}</h2>
          <p className={styles.manufacturer}>
            Built by: {this.props.phone.manufacturer}
          </p>
          <p className={styles.price}>{this.props.phone.price}</p>
          <p className={styles.description}>{this.props.phone.description}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: any) => ({
  phone: state.phones.phones.find(
    phone => phone.id === parseInt(ownProps.match.params.id, 10)
  )
});
export default withRouter(connect(mapStateToProps)(PhoneDetailContainer));

export { PhoneDetailContainer as PhoneDetailContainerTesting, mapStateToProps };
