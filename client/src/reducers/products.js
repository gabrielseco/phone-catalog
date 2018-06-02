// @flow
import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  type ProductActions
} from '../actions/products';

import { type Product } from './../flow/product';

export type ProductsState = {
  products: Product[],
  isLoading: boolean,
  isLoaded: boolean
};

export const initialState: ProductsState = {
  products: [],
  isLoading: false,
  isLoaded: false
};

const products = (
  state: ProductsState = initialState,
  action: ProductActions
): ProductsState => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
        isLoaded: true
      };
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        products: [],
        isLoading: false,
        isLoaded: false
      };
    case 'INVENTED':
    default:
      return state;
  }
};

export default products;
