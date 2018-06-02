// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getProductsList } from 'actions/products';
import { Spinner } from 'components';
import { type Dispatch } from 'redux';
import { type RootState } from './../../reducers';
import { type Product } from './../../types/product';
/* import styles from './PhoneDetailContainer.scss';
 */

type Props = {
  product: Product,
  dispatch: Dispatch
};

class PhoneDetailContainer extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    if (this.props.product === undefined) {
      dispatch(getProductsList());
    }
  }

  render() {
    if (this.props.product === undefined) {
      return <Spinner />;
    }
    return (
      <div>
        <img src={this.props.product.image} alt={this.props.product.name} />
        <h2>{this.props.product.name}</h2>
        <h2>{this.props.product.manufacturer}</h2>
        <h2>{this.props.product.price}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: any) => ({
  product: state.products.products.find(
    product => product.id === parseInt(ownProps.match.params.id, 10)
  )
});
export default withRouter(connect(mapStateToProps)(PhoneDetailContainer));

export { PhoneDetailContainer as PhotoDetailContainerTesting, mapStateToProps };
