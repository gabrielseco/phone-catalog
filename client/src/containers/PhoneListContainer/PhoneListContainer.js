// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PhoneList } from 'components';
import { SpinnerContainer } from 'containers';
import { getPhonesList } from 'actions/phones';
import { type Phone } from './../../types/phone';
import { type Dispatch } from 'redux';
import { type RootState } from './../../reducers';

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
        {this.props.isLoading ? <SpinnerContainer /> : null}
        {this.props.isLoaded ? <PhoneList phones={this.props.phones} /> : null}
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
