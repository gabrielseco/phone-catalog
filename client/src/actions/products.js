// @flow
import { ProductsServiceFactory } from 'services/ProductsServiceFactory';
import type { Dispatch } from 'redux';
import type { Product } from 'flow/product';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

type GET_PRODUCTS_ACTION = { type: typeof GET_PRODUCTS };
type GET_PRODUCTS_SUCCESS_ACTION = {
  type: typeof GET_PRODUCTS_SUCCESS,
  payload: Product[]
};
type GET_PRODUCTS_FAILURE_ACTION = { type: typeof GET_PRODUCTS_FAILURE };

export type ProductActions =
  | GET_PRODUCTS_ACTION
  | GET_PRODUCTS_SUCCESS_ACTION
  | GET_PRODUCTS_FAILURE_ACTION;

function getProducts(): GET_PRODUCTS_ACTION {
  return {
    type: GET_PRODUCTS
  };
}

function getProductsSuccess(products: Product[]): GET_PRODUCTS_SUCCESS_ACTION {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: products
  };
}

function getProductsFailure(): GET_PRODUCTS_FAILURE_ACTION {
  return {
    type: GET_PRODUCTS_FAILURE
  };
}

export function getProductsList() {
  return (dispatch: Dispatch) => {
    dispatch(getProducts());
    return ProductsServiceFactory()
      .getProducts()
      .then(response => {
        dispatch(getProductsSuccess(response.data));
      })
      .catch(() => {
        dispatch(getProductsFailure());
      });
  };
}
