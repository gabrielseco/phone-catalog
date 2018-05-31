// @flow strict
import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  ProductActions
} from './../actions';

import type { Product } from 'flow/product';

type ProductsState = {
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
    default:
      return state;
  }
};

export default products;
