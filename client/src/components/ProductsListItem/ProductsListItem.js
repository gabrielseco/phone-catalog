import React from 'react';
import type { Product } from './../../flow/product';
/* import styles from './ProductsListItem.scss';
 */
type ProductListItemProps = {
  product: Product
};

const ProductsListItem = (props: ProductListItemProps) => (
  <div>
    <h2>{JSON.stringify(props.product)}</h2>
  </div>
);

export default ProductsListItem;
