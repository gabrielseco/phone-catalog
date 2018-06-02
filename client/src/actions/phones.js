// @flow
import { PhonesServiceFactory } from 'services/PhonesServiceFactory';
import { type Dispatch } from 'redux';
import { type Phone } from './../types/phone';

export const GET_PHONES = 'GET_PHONES';
export const GET_PHONES_SUCCESS = 'GET_PHONES_SUCCESS';
export const GET_PHONES_FAILURE = 'GET_PHONES_FAILURE';

type GET_PHONES_ACTION = { type: typeof GET_PHONES };
type GET_PHONES_SUCCESS_ACTION = {
  type: typeof GET_PHONES_SUCCESS,
  payload: Phone[]
};
type GET_PHONES_FAILURE_ACTION = { type: typeof GET_PHONES_FAILURE };

export type PhonesActions =
  | GET_PHONES_ACTION
  | GET_PHONES_SUCCESS_ACTION
  | GET_PHONES_FAILURE_ACTION;

function getPhones(): GET_PHONES_ACTION {
  return {
    type: GET_PHONES
  };
}

function getPhonesSuccess(products: Phone[]): GET_PHONES_SUCCESS_ACTION {
  return {
    type: GET_PHONES_SUCCESS,
    payload: products
  };
}

function getPhonesFailure(): GET_PHONES_FAILURE_ACTION {
  return {
    type: GET_PHONES_FAILURE
  };
}

export function getPhonesList() {
  return (dispatch: Dispatch) => {
    dispatch(getPhones());
    return PhonesServiceFactory()
      .getPhones()
      .then(response => {
        dispatch(getPhonesSuccess(response.data));
      })
      .catch(() => {
        dispatch(getPhonesFailure());
      });
  };
}
