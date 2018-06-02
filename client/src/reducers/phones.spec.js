// @flow
import phones, { initialState } from './phones';
import {
  GET_PHONES,
  GET_PHONES_FAILURE,
  GET_PHONES_SUCCESS
} from 'actions/phones';
import { phonesFake } from './../fakes/phone';

describe('Phones reducer', () => {
  it(`should call the action ${GET_PHONES}`, () => {
    const state = phones(initialState, { type: GET_PHONES });
    expect(state.phones).toEqual([]);
    expect(state.isLoading).toBeTruthy();
    expect(state.isLoaded).toBeFalsy();
  });

  it(`should call the action ${GET_PHONES_SUCCESS}`, () => {
    const state = phones(initialState, {
      type: GET_PHONES_SUCCESS,
      payload: phonesFake
    });
    expect(state.phones).toEqual(phonesFake);
    expect(state.isLoading).toBeFalsy();
    expect(state.isLoaded).toBeTruthy();
  });

  it(`should call the action ${GET_PHONES_FAILURE}`, () => {
    const state = phones(initialState, { type: GET_PHONES_FAILURE });
    expect(state.phones).toEqual([]);
    expect(state.isLoading).toBeFalsy();
    expect(state.isLoaded).toBeFalsy();
  });

  it('should default state', () => {
    const state = phones(initialState, { type: '' });

    expect(state).toEqual(initialState);
  });
});
