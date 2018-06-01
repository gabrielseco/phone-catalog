import React from 'react';
import { ProductsListItem } from 'components';
import type { Product } from 'flow/product';
/* import styles from './ProductsList.scss';
 */
type ProductsListProps = {
  products: Product[]
};

const ProductsList = (props: ProductsListProps) => {
  const products = props.products.map((product, key) => {
    return <ProductsListItem product={product} key={key} />;
  });

  return products;
};

export default ProductsList;
