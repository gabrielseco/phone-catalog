// @flow
import {
  GET_PHONES,
  GET_PHONES_SUCCESS,
  GET_PHONES_FAILURE,
  type PhonesActions
} from '../actions/phones';

import { type Phone } from './../types/phone';

export type PhonesState = {
  phones: Phone[],
  isLoading: boolean,
  isLoaded: boolean
};

export const initialState: PhonesState = {
  phones: [],
  isLoading: false,
  isLoaded: false
};

const phones = (
  state: PhonesState = initialState,
  action: PhonesActions
): PhonesState => {
  switch (action.type) {
    case GET_PHONES:
      return {
        ...state,
        phones: [],
        isLoading: true,
        isLoaded: false
      };
    case GET_PHONES_SUCCESS:
      return {
        ...state,
        phones: action.payload,
        isLoading: false,
        isLoaded: true
      };
    case GET_PHONES_FAILURE:
      return {
        ...state,
        phones: [],
        isLoading: false,
        isLoaded: false
      };
    default:
      return state;
  }
};

export default phones;
