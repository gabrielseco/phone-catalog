// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PhonesList, Spinner } from 'components';
import { getPhonesList } from 'actions/phones';
import { type Phone } from './../../types/phone';
import { type Dispatch } from 'redux';
import { type RootState } from './../../reducers';
import styles from './PhoneListContainer.scss';

type Props = {
  phones: Phone[],
  isLoading: boolean,
  isLoaded: boolean,
  dispatch: Dispatch
};

class PhoneListContainer extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    if (!this.props.isLoaded) {
      dispatch(getPhonesList());
    }
  }

  render() {
    return (
      <div>
        {this.props.isLoading ? (
          <div className={styles.spinnerContainer}>
            <Spinner />
          </div>
        ) : null}
        {this.props.isLoaded ? <PhonesList phones={this.props.phones} /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  phones: state.phones.phones,
  isLoading: state.phones.isLoading,
  isLoaded: state.phones.isLoaded
});
export default connect(mapStateToProps)(PhoneListContainer);

export { PhoneListContainer as PhotoListContainerTesting, mapStateToProps };
