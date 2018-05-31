import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from 'components';
import { getProducts } from './../../actions';
import type { Product } from 'flow/product';
import type { Dispatch } from 'redux';
/* import styles from './PhotoListContainer.scss';
 */
type Props = {
  products: Product[],
  dispatch: Dispatch
};

class PhotoListContainer extends Component<Props, {}> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getProducts());
  }

  render() {
    return (
      <div>
        <Header />
        {JSON.stringify(this.props.products)}
      </div>
    );
  }
}

export { PhotoListContainer as PhotoListContainerTesting, mapStateToProps };

const mapStateToProps = state => ({
  products: state.products.products,
  isLoading: state.products.isLoading,
  isLoaded: state.products.isLoaded
});
export default connect(mapStateToProps)(PhotoListContainer);
