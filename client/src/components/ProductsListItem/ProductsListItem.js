// @flow
import React from 'react';
import { type Product } from 'flow/product';
import styles from './ProductsListItem.scss';

type ProductListItemProps = {
  product: Product,
  onClick: Function
};

const ProductsListItem = (props: ProductListItemProps) => (
  <div className={styles.container}>
    <img src={props.product.image} alt={props.product.name} />
    <h2 className={styles.title}>{props.product.name}</h2>
    <div className={styles.body}>
      <p className={styles.price}>{props.product.price}</p>
    </div>
    <button onClick={evt => props.onClick(evt)}>See more</button>
  </div>
);

export default ProductsListItem;
