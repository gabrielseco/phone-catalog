// @flow
import React from 'react';
import { ProductsListItem } from 'components';
import { type Product } from './../../types/product';
/* import styles from './ProductsList.scss';
 */
type ProductsListProps = {
  products: Product[]
};

const ProductsList = (props: ProductsListProps): ProductsListItem[] => {
  return props.products.map((product, index) => {
    return <ProductsListItem product={product} key={index} />;
  });
};

export default ProductsList;
