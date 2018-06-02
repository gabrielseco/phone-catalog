import { combineReducers } from 'redux';

import products, { type ProductsState } from './products';

export type RootState = {
  products: ProductsState
};

const rootReducer = combineReducers({
  products: products
});

export default rootReducer;
