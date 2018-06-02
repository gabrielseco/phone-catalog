import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import {
  GET_PHONES,
  GET_PHONES_SUCCESS,
  GET_PHONES_FAILURE,
  getPhonesList
} from './phones';
import { phonesFake } from 'fakes/phone';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const host = 'http://localhost';
axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

const createStore = () => ({
  phones: {
    phones: [],
    isLoading: false,
    isLoaded: false
  }
});

jest.useFakeTimers();

describe('phones actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it(`checks ${GET_PHONES} && ${GET_PHONES_SUCCESS} actions`, () => {
    nock(host)
      .get('/phones')
      .reply(200, phonesFake);

    const expectedActions = [
      { type: GET_PHONES },
      { type: GET_PHONES_SUCCESS, payload: phonesFake }
    ];
    const store = mockStore(createStore);
    return store.dispatch(getPhonesList()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it(`checks ${GET_PHONES} && ${GET_PHONES_FAILURE} actions`, () => {
    nock(host)
      .get('/phones')
      .reply(409, phonesFake);

    const expectedActions = [
      { type: GET_PHONES },
      { type: GET_PHONES_FAILURE }
    ];
    const store = mockStore(createStore);
    return store.dispatch(getPhonesList()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
