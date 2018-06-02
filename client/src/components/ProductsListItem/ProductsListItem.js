// @flow
import React from 'react';
import { Link } from '@reach/router';
import { type Product } from './../../types/product';
import styles from './ProductsListItem.scss';

type ProductListItemProps = {
  product: Product
};

const ProductsListItem = (props: ProductListItemProps) => (
  <div className={styles.container}>
    <img src={props.product.image} alt={props.product.name} />
    <h2 className={styles.title}>{props.product.name}</h2>
    <div className={styles.body}>
      <p className={styles.price}>{props.product.price}</p>
    </div>
    <Link to={`detail/${props.product.id}`}>See more</Link>
  </div>
);

export default ProductsListItem;
