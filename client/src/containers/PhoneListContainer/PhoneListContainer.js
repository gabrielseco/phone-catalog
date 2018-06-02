// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProductsList, Spinner } from 'components';
import { getProductsList } from 'actions/products';
import { type Product } from './../../types/product';
import { type Dispatch } from 'redux';
import { type RootState } from './../../reducers';
/* import styles from './PhoneListContainer.scss';
 */
type Props = {
  products: Product[],
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
    dispatch(getProductsList());
  }

  render() {
    return (
      <div>
        {this.props.isLoading ? <Spinner /> : null}
        {this.props.isLoaded ? (
          <ProductsList products={this.props.products} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  products: state.products.products,
  isLoading: state.products.isLoading,
  isLoaded: state.products.isLoaded
});
export default connect(mapStateToProps)(PhoneListContainer);

export { PhoneListContainer as PhotoListContainerTesting, mapStateToProps };
